
function viewWork() {
    window.location.href = 'https://github.com/YaBoyAri';
}

function hireMe() {
    window.location.href = 'https://mail.google.com/mail/u/0/#inbox?compose=new'
}

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.bottom >= 0
    );
}

// Disini saya membuat sebuah fungsi agar animasinya keluar ketika user masuk ke section skills
function animateSkills() {
    const skillsSection = document.getElementById('skills');
    const skillLevels = document.querySelectorAll('.skill-level');

    // Memeriksa apakah user berada pada section skills atau tidak
    if (isElementInViewport(skillsSection)) {
        skillLevels.forEach(skillLevel => {
            const skillValue = skillLevel.getAttribute('data-skill-level');
            skillLevel.style.width = skillValue;
        });
    } else {
        skillLevels.forEach(skillLevel => {
            skillLevel.style.width = '0';
        });
    }
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);