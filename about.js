export const appearAboutImage = () => {
  //Creating functionality for the image to appear
    window.addEventListener('scroll', () => {
    const targetElement = document.querySelector('.my-image');
    const aboutText = document.querySelector('.about-text');

    const section = document.querySelector('#about');
    const sectionTop = section.offsetTop + 500;
    const sectionBottom = sectionTop + section.offsetHeight;
    
    const scrollPosition = window.scrollY + window.innerHeight;
  
    if (scrollPosition > sectionTop && scrollPosition < sectionBottom) {
      targetElement.classList.add('appear');
      aboutText.classList.add('about-appear');
    } else {
      targetElement.classList.remove('appear');
      aboutText.classList.remove('about-appear');
    }
  });
}