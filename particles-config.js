tsParticles.load("tsparticles", {
    fpsLimit: 60,
    background: {
        color: "#111827"
    },
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#4f545c"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.3,
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
            color: "#3e4046",
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
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
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
        }
    },
    detectRetina: true
});
