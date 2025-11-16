/* ============================================
   CONTACT PAGE - JAVASCRIPT
   ============================================ */

// Handle form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
}

function handleContactSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('form-message');
    
    // Validation
    if (!name || !email || !subject || !message) {
        showFormMessage('Please fill in all required fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showFormMessage('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission
    disableFormSubmit(true);
    
    setTimeout(() => {
        // Clear form
        contactForm.reset();
        
        // Show success message
        showFormMessage('Thank you! Your message has been sent successfully. We will contact you within 24 hours.', 'success');
        
        // Re-enable submit button
        disableFormSubmit(false);
        
        // Hide message after 5 seconds
        setTimeout(() => {
            const formMessage = document.getElementById('form-message');
            if (formMessage) {
                formMessage.style.display = 'none';
            }
        }, 5000);
    }, 1500);
}

function showFormMessage(message, type) {
    const formMessage = document.getElementById('form-message');
    if (!formMessage) return;
    
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
}

function disableFormSubmit(disabled) {
    const buttons = document.querySelectorAll('.contact-form button[type="submit"]');
    buttons.forEach(btn => {
        btn.disabled = disabled;
        btn.style.opacity = disabled ? '0.6' : '1';
        btn.style.cursor = disabled ? 'not-allowed' : 'pointer';
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ============================================
// LOCATION SELECTOR
// ============================================

const locationCards = document.querySelectorAll('.location-card');
locationCards.forEach(card => {
    card.addEventListener('click', function() {
        locationCards.forEach(c => c.style.borderWidth = '2px');
        this.style.borderWidth = '4px';
        showNotification('Location selected!');
    });
});

// ============================================
// UTILITIES
// ============================================

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background-color: #FF8C00;
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        z-index: 2000;
        animation: slideIn 0.3s ease-in-out;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialize cart count
document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('foodVanCart')) || [];
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
});
