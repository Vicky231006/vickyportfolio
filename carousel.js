const carousel = () => {
    const previousBtn = document.querySelector('.previous');
    const nextBtn = document.querySelector('.next');
    const eduCard = document.querySelectorAll('.edu');
    const educationSection = document.querySelector('.education');

    let currentIndex = 0;

    // Initially hide the previous button
    previousBtn.style.opacity = '0';
    previousBtn.style.pointerEvents = 'none';

    // Add transition class to all cards
    eduCard.forEach(card => {
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    const updateCarousel = (direction) => {
        // Remove show-card class from all cards
        eduCard.forEach(card => {
            card.classList.remove('show-card');
            card.style.transform = 'translateX(100%)';
            card.style.opacity = '0';
        });

        // Update current index based on direction
        if (direction === 'next') {
            currentIndex = (currentIndex + 1) % eduCard.length;
        } else {
            currentIndex = (currentIndex - 1 + eduCard.length) % eduCard.length;
        }

        // Show/hide previous button based on current index
        if (currentIndex === 0) {
            previousBtn.style.opacity = '0';
            previousBtn.style.pointerEvents = 'none';
        } else {
            previousBtn.style.opacity = '1';
            previousBtn.style.pointerEvents = 'auto';
        }

        // Add show-card class to current card with a slight delay for smooth transition
        setTimeout(() => {
            eduCard[currentIndex].classList.add('show-card');
            eduCard[currentIndex].style.transform = 'translateX(0)';
            eduCard[currentIndex].style.opacity = '1';
        }, 50);
    };

    nextBtn.addEventListener('click', () => {
        updateCarousel('next');
    });

    previousBtn.addEventListener('click', () => {
        updateCarousel('previous');
    });

    // Initialize first card
    eduCard[0].classList.add('show-card');
    eduCard[0].style.transform = 'translateX(0)';
    eduCard[0].style.opacity = '1';
};

export default carousel;