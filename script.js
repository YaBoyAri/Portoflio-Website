// Function to link to GitHub repository
function viewWork() {
    window.location.href = 'https://github.com/YaBoyAri';
}

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add or remove animation when the skills section is in view
function animateSkills() {
    const skillsSection = document.getElementById('skills');
    const skillLevels = document.querySelectorAll('.skill-level');

    if (isElementInViewport(skillsSection)) {
        skillLevels.forEach(skillLevel => {
            skillLevel.classList.add('animate');
            skillLevel.style.width = skillLevel.getAttribute('data-skill-level'); // Set width from data attribute
        });
    } else {
        skillLevels.forEach(skillLevel => {
            skillLevel.classList.remove('animate'); // Remove animation class when out of view
            skillLevel.style.width = '0'; // Reset width to 0
        });
    }
}

// Listen for scroll events
window.addEventListener('scroll', animateSkills);