// Handle form submissions
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form[id$="Form"]');
    
    forms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formMessage = document.getElementById('formMessage');
            const submitButton = form.querySelector('button[type="submit"]');
            
            // Get form data
            const formData = new FormData(form);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message'),
                app: formData.get('app') || form.dataset.app || 'general'
            };
            
            // Disable submit button
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                const result = await response.json();
                
                if (response.ok) {
                    formMessage.textContent = result.message || 'Thank you for contacting us! We\'ll respond shortly.';
                    formMessage.className = 'success';
                    form.reset();
                } else {
                    throw new Error(result.error || 'Failed to send message');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                formMessage.textContent = 'Sorry, there was an error sending your message. Please try again or email us directly.';
                formMessage.className = 'error';
            } finally {
                // Re-enable submit button
                submitButton.disabled = false;
                submitButton.textContent = form.id === 'contactForm' ? 'Send Message' : 'Send Support Request';
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                    formMessage.className = '';
                }, 5000);
            }
        });
    });
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
