const showProject = () => {
    const buttons = document.querySelectorAll('.more-details');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const parentElement = button.parentElement;
            if (button.textContent === 'Show project') {
                parentElement.classList.remove('close-project')
                parentElement.classList.add('open-project')
                parentElement.querySelector('iframe').style.opacity = "1";
                button.textContent = 'Show less'
            } else {
                parentElement.classList.remove('open-project')
                parentElement.classList.add('close-project')
                button.textContent = 'Show project'
                parentElement.querySelector('iframe').style.opacity = "0";
            }
        })
    })
}

export default showProject;