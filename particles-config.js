tsParticles.load("tsparticles", {
    fpsLimit: 60,
    background: {
        color: "#18191c" // Updated to match body dark background
    },
    particles: {
        number: {
            value: 50, // Slightly fewer for a cleaner look with this UI
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#4f545c" // Muted grey particles, won't clash
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.3, // More subtle
            random: true,
            anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.05,
                sync: false
            }
        },
        size: {
            value: 2,
            random: true
        },
        links: {
            enable: true,
            distance: 150,
            color: "#3e4046", // Darker links
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab" // Grab is less distracting than repulse for this UI
            },
            onclick: {
                enable: true,
                mode: "push" // Adds a few particles on click
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 120,
                line_linked: {
                    opacity: 0.5
                }
            },
            push: {
                particles_nb: 2
            }
            // Removed bubble and repulse for simplicity
        }
    },
    detectRetina: true
});
