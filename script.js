function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}
/* Scroll Effect */
window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('.section-container');
    let screenHeight = window.innerHeight;

    sections.forEach(section => {
        let sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < screenHeight - 100) {
            section.classList.add('show');
        }
    });
});
document.addEventListener("scroll", function() {
    document.querySelectorAll(".testimonials, .brand-collaboration").forEach(section => {
        let sectionPosition = section.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;
        if (sectionPosition < screenPosition) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});
function displayLogo(event) {
    const logoImg = document.getElementById('uploadedLogo');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            logoImg.src = e.target.result; // Set the image source
            logoImg.style.display = "block"; // Ensure visibility
        };
        reader.readAsDataURL(file);
    }
}

// Ensure the default logo is visible on page load
window.onload = function() {
    const logoImg = document.getElementById('uploadedLogo');
    logoImg.src = "WhatsApp Image 2025-02-23 at 6.51.51 PM.jpeg"; // Set default logo
};