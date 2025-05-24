const form = document.getElementById("form");
const result = document.getElementById("result");
const submitButton = form.querySelector('button[type="submit"]');

const COOLDOWN_PERIOD_HOURS = 5;
const COOLDOWN_PERIOD_MS = COOLDOWN_PERIOD_HOURS * 60 * 60 * 1000;
const LAST_SUBMISSION_KEY = 'gameRequestLastSubmissionTime';

function checkAndApplyCooldown() {
    const lastSubmissionTime = localStorage.getItem(LAST_SUBMISSION_KEY);

    if (lastSubmissionTime) {
        const timeSinceLastSubmission = Date.now() - parseInt(lastSubmissionTime, 10);

        if (timeSinceLastSubmission < COOLDOWN_PERIOD_MS) {
            if (submitButton) submitButton.disabled = true;
            const timeLeft = COOLDOWN_PERIOD_MS - timeSinceLastSubmission;
            const hoursLeft = Math.floor(timeLeft / (60 * 60 * 1000));
            const minutesLeft = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
            
            result.innerHTML = `You can submit again in approximately ${hoursLeft}h ${minutesLeft}m.`;
            result.className = "text-base text-center text-yellow-500";
            return false;
        }
    }
    
    if (submitButton) submitButton.disabled = false;
    if (result.innerHTML.includes("You can submit again in approximately")) {
        result.innerHTML = "";
        result.className = "text-base text-center text-gray-400";
    }
    return true;
}

window.addEventListener('DOMContentLoaded', checkAndApplyCooldown);

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!checkAndApplyCooldown()) {
        return;
    }

    const formData = new FormData(form);
    var object = {};
    formData.forEach((value, key) => {
        object[key] = value;
    });
    var json = JSON.stringify(object);
    
    result.innerHTML = "Please wait...";
    result.className = "text-base text-center text-gray-400";
    if (submitButton) submitButton.disabled = true;


    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json
    })
    .then(async (response) => {
        let jsonResponse = await response.json();
        if (response.status == 200) {
            result.innerHTML = jsonResponse.message;
            result.className = "text-base text-center text-green-500";
            localStorage.setItem(LAST_SUBMISSION_KEY, Date.now().toString());
        } else {
            console.log(response);
            result.innerHTML = jsonResponse.message;
            result.className = "text-base text-center text-red-500";
        }
    })
    .catch((error) => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
        result.className = "text-base text-center text-red-500";
    })
    .then(function () {
        form.reset();
        checkAndApplyCooldown(); // Re-check cooldown to disable button and show message if needed
        setTimeout(() => {
            if (!result.innerHTML.includes("You can submit again in approximately")) {
                 result.innerHTML = "";
                 result.className = "text-base text-center text-gray-400";
            }
        }, 5000);
    });
});
