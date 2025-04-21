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
        console.log('Form submission started');
        
        submitButton.disabled = true;
        status.textContent = 'Processing...';
        status.className = 'form-status warning';

        try {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            console.log('Form data:', data);

            // Basic validation
            if (!data.name || !data.email || !data.subject || !data.message) {
                throw new Error('Please fill in all fields');
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                throw new Error('Please enter a valid email address');
            }

            // Create mailto link
            const mailtoLink = document.createElement('a');
            const recipientEmail = 'vickydsilva2004@gmail.com'; // Replace with your email
            const emailSubject = encodeURIComponent(data.subject);
            const emailBody = encodeURIComponent(
                `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
            );
            mailtoLink.href = `mailto:${recipientEmail}?subject=${emailSubject}&body=${emailBody}`;
            
            // Trigger the mailto link
            mailtoLink.click();
            
            // Show success message
            status.textContent = 'Your default email client has been opened. Please send the email to complete the process.';
            status.className = 'form-status success';
            form.reset();

        } catch (error) {
            console.error('Error:', error);
            status.textContent = error.message || 'Failed to process form. Please try again.';
            status.className = 'form-status error';
        } finally {
            submitButton.disabled = false;
        }
    }

    form.addEventListener('submit', handleSubmit);
}

export default handleForm;