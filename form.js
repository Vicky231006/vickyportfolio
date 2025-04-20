function handleForm() {
    const form = document.getElementById("my-form");
    const status = document.getElementById("my-form-status");
    const submitButton = document.getElementById("my-form-button");

    if (!form || !status || !submitButton) {
        console.error('Required form elements not found');
        return;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        // Use the elements we already found
        submitButton.disabled = true;
        status.textContent = 'Sending...';
        status.style.color = '#4CAF50';

        try {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            status.textContent = result.message || 'Message sent successfully!';
            status.style.color = '#4CAF50';
            form.reset();
        } catch (error) {
            console.error('Error:', error);
            status.textContent = 'Failed to send message. Please try again later.';
            status.style.color = '#f44336';
        } finally {
            submitButton.disabled = false;
        }
    }

    // Add event listener to form
    form.addEventListener('submit', handleSubmit);
}

export default handleForm;