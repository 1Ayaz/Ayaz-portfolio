// --- Navigation Scroll Effect ---
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.add('scrolled'); // Force glass on all states for consistency with theme
    }
});
// Trigger once on load
navbar.classList.add('scrolled');

// --- Mobile Navigation Toggle ---
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change icon from list to X
    const icon = navToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('ph-list');
        icon.classList.add('ph-x');
    } else {
        icon.classList.remove('ph-x');
        icon.classList.add('ph-list');
    }
});

// Close mobile nav when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = navToggle.querySelector('i');
        icon.classList.remove('ph-x');
        icon.classList.add('ph-list');
    });
});

// --- Typewriter Effect ---
const typewriterText = document.getElementById('typewriter');
const words = [
    'Backend Developer',
    'DevOps Developer',
    'Web Designer',
    'Computer Science Student'
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeWriter() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typewriterText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50; // Delete faster
    } else {
        typewriterText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100; // Type slower
    }

    if (!isDeleting && charIndex === currentWord.length) {
        // Pause at the end of the word
        isDeleting = true;
        typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex++;
        // Cycle back to start
        if (wordIndex === words.length) {
            wordIndex = 0;
        }
        // Small pause before typing next word
        typingSpeed = 500;
    }

    setTimeout(typeWriter, typingSpeed);
}

// Start typewriter immediately
typeWriter();

// --- Particles.js Initialization ---
// Used to create the floating stars/snow effect in the background
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.1,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });
}
