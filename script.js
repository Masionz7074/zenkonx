const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
  var object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  result.innerHTML = "Please wait...";
  result.className = "text-base text-center text-gray-400";

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
      setTimeout(() => {
        result.innerHTML = "";
        result.className = "text-base text-center text-gray-400";
      }, 5000);
    });
});