/* ============================================
   FOOD VAN WEBSITE - MAIN JAVASCRIPT
   ============================================ */

// Cart data stored in localStorage
let cart = JSON.parse(localStorage.getItem('foodVanCart')) || [];

// Update cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    setupHamburgerMenu();
});

// ============================================
// CART FUNCTIONS
// ============================================

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

function addToCartFromModal() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const modalDetails = document.getElementById('modal-item-details').innerHTML;
    
    // Extract item name from modal details
    const itemName = document.querySelector('.modal-content h2').nextElementSibling?.textContent || 'Item';
    
    if (quantity > 0) {
        cart.push({
            id: Date.now(),
            name: itemName,
            quantity: quantity
        });
        saveCart();
        updateCartCount();
        closeModal();
        showNotification('Item added to cart!');
    }
}

function saveCart() {
    localStorage.setItem('foodVanCart', JSON.stringify(cart));
}

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

// ============================================
// MODAL FUNCTIONS
// ============================================

function openModal(itemName, itemPrice, itemIcon) {
    const modal = document.getElementById('add-to-cart-modal');
    if (!modal) return;
    
    const modalDetails = document.getElementById('modal-item-details');
    if (modalDetails) {
        modalDetails.innerHTML = `
            <div style="text-align: center; margin-bottom: 20px;">
                <div style="font-size: 3rem; margin-bottom: 10px;">${itemIcon}</div>
                <h3 style="margin: 10px 0; color: #000;">${itemName}</h3>
                <p style="font-size: 1.2rem; color: #FF8C00; font-weight: bold;">$${parseFloat(itemPrice).toFixed(2)}</p>
            </div>
        `;
    }
    
    modal.classList.add('show');
    document.getElementById('quantity').value = 1;
}

function closeModal() {
    const modal = document.getElementById('add-to-cart-modal');
    if (modal) {
        modal.classList.remove('show');
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('add-to-cart-modal');
    if (modal && event.target === modal) {
        closeModal();
    }
};

// Close modal with X button
const closeBtn = document.querySelector('.close');
if (closeBtn) {
    closeBtn.onclick = closeModal;
}

// ============================================
// HAMBURGER MENU
// ============================================

function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
}

// ============================================
// FORM HANDLING
// ============================================

function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('form-message');
    
    if (name && email && message) {
        // Simulate form submission
        setTimeout(() => {
            formMessage.className = 'form-message success';
            formMessage.textContent = 'Thank you! Your message has been sent successfully. We will contact you soon.';
            document.getElementById('contact-form').reset();
            
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }, 500);
    }
}

// ============================================
// ANIMATION ON SCROLL
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.feature-card, .item-card, .team-member, .location-card');
    cards.forEach(card => {
        observer.observe(card);
    });
});

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
