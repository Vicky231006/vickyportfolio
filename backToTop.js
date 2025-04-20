export const backToTop = () => {
      window.addEventListener('scroll', () => {
      const backToTop = document.querySelector('.back-to-top');
  
      const section = document.querySelector('#about');
      const sectionTop = section.offsetTop + 500;
      
      const scrollPosition = window.scrollY + window.innerHeight;

  
      if (scrollPosition > sectionTop) {
        backToTop.style.opacity = '1';
      } else {
        backToTop.style.opacity = '0';
      }
    });
  }

  export default backToTop;