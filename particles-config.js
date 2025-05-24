tsParticles.load("tsparticles", {
    fpsLimit: 60,
    background: {
        color: "#1a1a1a" // Dark grey background for particles
    },
    particles: {
        number: {
            value: 60, // Reduced slightly for less clutter
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#777777" // Particle color
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.4,
            random: true,
            anim: {
                enable: true,
                speed: 0.8,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 2.5,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        links: {
            enable: true,
            distance: 160,
            color: "#555555", // Link color
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
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
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
                line_linked: {
                    opacity: 0.8
                }
            },
            bubble: {
                distance: 350,
                size: 30,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 180,
                duration: 0.4
            },
            push: {
                particles_nb: 3
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    detectRetina: true
});
