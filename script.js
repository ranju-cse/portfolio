// Typing Animation for Hero Subheading
const phrases = [
    "Data Scientist & B.Tech Student.",
    "AI & Data Analysis Enthusiast.",
    "Specializing in Machine Learning."
];
const typedTextElement = document.getElementById('typed-text');
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        // Deleting characters
        typedTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Typing characters
        typedTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 70 : 150; // Faster deletion

    if (!isDeleting && charIndex === currentPhrase.length) {
        // Pause at the end of the phrase
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Done deleting, move to the next phrase
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500; // Pause before starting the next phrase
    }

    setTimeout(typeWriter, typeSpeed);
}

// Scroll Fade-in Animation for Timeline
function checkTimelineItems() {
    const items = document.querySelectorAll('.timeline-item');
    const scrollPosition = window.scrollY;

    items.forEach(item => {
        // Check if the item is in the viewport (or slightly above it)
        if (item.offsetTop < scrollPosition + window.innerHeight * 0.8) {
            item.classList.add('in-view');
        }
    });
}

// Fade-in Animation for Profile Text
function checkProfileSummary() {
    const summary = document.querySelector('.profile-summary p');
    const scrollPosition = window.scrollY;
    const section = document.getElementById('about-skills-section');

    if (section.offsetTop < scrollPosition + window.innerHeight * 0.7) {
        summary.style.opacity = '1';
        summary.style.transform = 'translateY(0)';
        // Remove listener after animation is done
        window.removeEventListener('scroll', checkProfileSummary);
    }
}


// Event Listeners and Initialization
document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
    // Initial check on load
    checkTimelineItems();
    checkProfileSummary();
});

// Listener for scroll-based animations
window.addEventListener('scroll', () => {
    checkTimelineItems();
    checkProfileSummary();
});