const toggleButton = document.querySelector('.theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});

document.addEventListener("DOMContentLoaded", function() {

    const easeSound = document.getElementById('ease-sound');

    // Attempt to play the sound on DOMContentLoaded
    const playEaseSound = () => {
        easeSound.currentTime = 0;
        easeSound.play().catch(error => {
            console.log('Sound playback was prevented:', error);
        });
    };

    // Attempt to play the sound immediately after DOM is loaded
    playEaseSound();
    
    const animatedElements = document.querySelectorAll('.tagline, .profile-img, .about');

    animatedElements.forEach(element => {
        element.addEventListener('animationstart', playEaseSound);
    });

    const tagline = document.getElementById("tagline");
    const letters = tagline.innerHTML.split("");
    tagline.innerHTML = letters.map((letter, index) => {
        return `<span style="animation-delay:${index * 0.05}s">${letter}</span>`;
    }).join("");
});




    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    window.addEventListener('scroll', () => {
        document.querySelectorAll('.about, .works, .skills, .contact').forEach(section => {
            const sectionPos = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionPos < windowHeight - 100) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            }
        });
    });