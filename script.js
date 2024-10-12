
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100, 
                behavior: 'smooth'
            });
        }
    });
});


document.querySelector('.resume-button').addEventListener('click', function() {
    const resumeLink = 'path-to-resume.pdf'; // 
    window.open(resumeLink, '_blank');
});
