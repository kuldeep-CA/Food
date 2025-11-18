/* ============================================
   CART PAGE - JAVASCRIPT
   ============================================ */

// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem('foodVanCart')) || [];

// Display cart items on page load
document.addEventListener('DOMContentLoaded', function() {
    displayCartItems();
    calculateTotal();
});

// ============================================
// DISPLAY CART ITEMS
// ============================================

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const cartTable = document.getElementById('cart-table');
    
    if (!cartItemsContainer) return;
    
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        if (cartTable) cartTable.style.display = 'none';
        if (emptyCartMessage) emptyCartMessage.style.display = 'block';
    } else {
        if (cartTable) cartTable.style.display = 'table';
        if (emptyCartMessage) emptyCartMessage.style.display = 'none';
        
        cart.forEach((item, index) => {
            const row = document.createElement('tr');
            const itemTotal = (item.price * item.quantity).toFixed(2);
            
            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>
                    <input type="number" min="1" value="${item.quantity}" 
                           class="quantity-input" 
                           onchange="updateQuantity(${index}, this.value)">
                </td>
                <td>$${itemTotal}</td>
                <td>
                    <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
                </td>
            `;
            
            cartItemsContainer.appendChild(row);
        });
    }
}

// ============================================
// CART OPERATIONS
// ============================================

function updateQuantity(index, newQuantity) {
    newQuantity = parseInt(newQuantity);
    
    if (newQuantity <= 0) {
        removeItem(index);
    } else {
        cart[index].quantity = newQuantity;
        saveCart();
        displayCartItems();
        calculateTotal();
    }
}

function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartCount();
    displayCartItems();
    calculateTotal();
    showNotification('Item removed from cart');
}

function saveCart() {
    localStorage.setItem('foodVanCart', JSON.stringify(cart));
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// ============================================
// CALCULATE TOTALS
// ============================================

function calculateTotal() {
    let subtotal = 0;
    
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
    });
    
    const tax = subtotal * 0.10; // 10% tax
    const delivery = cart.length > 0 ? 2.00 : 0; // $2 delivery fee if cart is not empty
    const total = subtotal + tax + delivery;
    
    // Update UI
    const subtotalElement = document.getElementById('subtotal');
    const taxElement = document.getElementById('tax');
    const deliveryElement = document.getElementById('delivery');
    const totalElement = document.getElementById('total');
    
    if (subtotalElement) subtotalElement.textContent = '$' + subtotal.toFixed(2);
    if (taxElement) taxElement.textContent = '$' + tax.toFixed(2);
    if (deliveryElement) deliveryElement.textContent = '$' + delivery.toFixed(2);
    if (totalElement) totalElement.textContent = '$' + total.toFixed(2);
}

// ============================================
// CHECKOUT
// ============================================

function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty');
        return;
    }
    
    const total = document.getElementById('total').textContent;
    
    // Show confirmation
    const confirmed = confirm(`Proceed to checkout?\n\nTotal: ${total}\n\nNote: This is a demo. Payment processing is not implemented.`);
    
    if (confirmed) {
        // Simulate order placement
        showNotification('Order placed successfully! Thank you for your order.');
        
        // Clear cart after 2 seconds
        setTimeout(() => {
            cart = [];
            saveCart();
            updateCartCount();
            displayCartItems();
            calculateTotal();
            window.location.href = 'index.html';
        }, 2000);
    }
}

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

// updateCartCount function
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}
