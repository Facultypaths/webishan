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