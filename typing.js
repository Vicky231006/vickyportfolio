export const typeWriter = () => {
    const typewriter = document.querySelector('h1');
    const text = `A Developer on an epic journey to conquer the digital universe </>`;
    const textLength = text.length;
    const cadence = 70;
    let index = 0;
    let intervalId; // Variable to hold the interval ID
  
    intervalId = setInterval(() => {
      if (index < textLength) {
        typewriter.innerHTML += text.charAt(index);
        index++;
      } else {
        clearInterval(intervalId); // Stop the interval when typing is complete
      }
    }, cadence);
  };
  
