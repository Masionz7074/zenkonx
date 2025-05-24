tsParticles.load("tsparticles", {
    fpsLimit: 60,
    background: {
        color: "#000800"
    },
    particles: {
        number: {
            value: 70,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#00E5FF"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.6,
            random: true,
            anim: {
                enable: true,
                speed: 0.8,
                opacity_min: 0.2,
                sync: false
            }
        },
        size: {
            value: 2.5,
            random: true
        },
        links: {
            enable: true,
            distance: 140,
            color: "#00E5FF",
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.5,
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
                distance: 130,
                links: {
                    opacity: 0.8
                }
            },
            push: {
                quantity: 3
            }
        }
    },
    detectRetina: true
});
