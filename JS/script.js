// Video handling
const videoIntro = document.getElementById('video-intro');
const introVideo = document.getElementById('intro-video');
const skipBtn = document.getElementById('skip-btn');
const replayBtn = document.getElementById('replay-btn');
const mainContent = document.getElementById('main-content');

// Skip button functionality
skipBtn.addEventListener('click', () => {
    hideVideoAndShowContent();
});

// Video ended event
introVideo.addEventListener('ended', () => {
    hideVideoAndShowContent();
});

// Replay button functionality
replayBtn.addEventListener('click', () => {
    showVideoIntro();
});

function hideVideoAndShowContent() {
    introVideo.pause();
    introVideo.currentTime = 0; // Reset video to beginning
    videoIntro.classList.add('hidden');
    mainContent.classList.remove('hidden');
    replayBtn.classList.remove('hidden');
}

function showVideoIntro() {
    videoIntro.classList.remove('hidden');
    mainContent.classList.add('hidden');
    replayBtn.classList.add('hidden');
    introVideo.currentTime = 0; // Reset video to beginning
    introVideo.play();
}

// Social link hover effects
const socialBubbles = document.querySelectorAll('.social-bubble');
socialBubbles.forEach(bubble => {
    bubble.addEventListener('mouseenter', () => {
        bubble.style.transform = 'scale(1.1)';
    });

    bubble.addEventListener('mouseleave', () => {
        bubble.style.transform = 'scale(1)';
    });
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const background = document.querySelector('.fullscreen-background');

    if (background) {
        // This moves the background down at half the scroll speed, creating the parallax effect.
        background.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Smooth scrolling for navigation buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navigation button hover effects
const navButtons = document.querySelectorAll('.nav-button');
navButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        const arrow = button.querySelector('.nav-arrow');
        arrow.style.transform = 'translateY(3px)';
    });

    button.addEventListener('mouseleave', () => {
        const arrow = button.querySelector('.nav-arrow');
        arrow.style.transform = 'translateY(0)';
    });
});

// Project card animations
const projectCards = document.querySelectorAll('.project-card');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add staggered animation delay to project cards
projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});