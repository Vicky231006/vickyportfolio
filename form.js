function handleForm() {
    const form = document.getElementById("my-form");
    const status = document.getElementById("my-form-status");
    const submitButton = document.getElementById("my-form-button");

    if (!form || !status || !submitButton) {
        console.error('Required form elements not found');
        return;
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        submitButton.disabled = true;
        status.textContent = 'Thanks for sending the message! Will revert soon.';
        status.className = 'form-status success';
        form.reset();
        
        setTimeout(() => {
            submitButton.disabled = false;
        }, 2000);
    }

    form.addEventListener('submit', handleSubmit);
}

export default handleForm;