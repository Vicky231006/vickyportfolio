const projectEffect = () => {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const section = document.querySelector('#projects');
        
        if (!section) return; // Guard clause if section doesn't exist
        
        const sectionTop = section.offsetTop + 300; // Reduced offset for earlier animation
        const sectionBottom = sectionTop + section.offsetHeight;
    
        const projects = document.querySelectorAll('.project');
        
        if (scrollPosition > sectionTop && scrollPosition < sectionBottom) {
            projects.forEach((project, index) => {
                // Add animation with slight delay for each project
                setTimeout(() => {
                    project.style.transform = "translateY(0)";
                    project.style.opacity = "1";
                }, index * 200); // 200ms delay between each project
            });
        } else {
            projects.forEach(project => {
                project.style.transform = "translateY(50px)";
                project.style.opacity = "0";
            });
        }
    });
};

export default projectEffect;