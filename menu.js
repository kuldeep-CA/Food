/* ============================================
   MENU PAGE - JAVASCRIPT
   ============================================ */

// Menu items data
const menuItems = [
    // Chinese Items (65 items)
    {
        id: 1,
        name: 'Chicken Fried Rice',
        price: 6.99,
        category: 'chinese',
        icon: '🍚',
        description: 'Fluffy fried rice with tender chicken and vegetables'
    },
    {
        id: 2,
        name: 'Vegetable Fried Rice',
        price: 5.99,
        category: 'chinese',
        icon: '🍚',
        description: 'Mixed vegetables with steamed rice'
    },
    {
        id: 3,
        name: 'Egg Fried Rice',
        price: 5.49,
        category: 'chinese',
        icon: '🍚',
        description: 'Golden fried rice with scrambled egg and spring onion'
    },
    {
        id: 4,
        name: 'Shrimp Fried Rice',
        price: 7.99,
        category: 'chinese',
        icon: '🍚',
        description: 'Premium fried rice loaded with fresh shrimp'
    },
    {
        id: 5,
        name: 'Beef Fried Rice',
        price: 7.49,
        category: 'chinese',
        icon: '🍚',
        description: 'Fried rice with tender sliced beef and peas'
    },
    {
        id: 6,
        name: 'Pork Fried Rice',
        price: 6.99,
        category: 'chinese',
        icon: '🍚',
        description: 'Fried rice with roasted pork and mixed vegetables'
    },
    {
        id: 7,
        name: 'Combination Fried Rice',
        price: 8.49,
        category: 'chinese',
        icon: '🍚',
        description: 'Fried rice with chicken, shrimp, and beef'
    },
    {
        id: 8,
        name: 'Crab Fried Rice',
        price: 8.99,
        category: 'chinese',
        icon: '🍚',
        description: 'Fried rice with fresh crab meat'
    },
    {
        id: 9,
        name: 'Chow Mein Chicken',
        price: 6.99,
        category: 'chinese',
        icon: '🍜',
        description: 'Stir-fried noodles with chicken and mixed vegetables'
    },
    {
        id: 10,
        name: 'Vegetable Chow Mein',
        price: 5.99,
        category: 'chinese',
        icon: '🍜',
        description: 'Crispy noodles with assorted vegetables'
    },
    {
        id: 11,
        name: 'Shrimp Chow Mein',
        price: 7.99,
        category: 'chinese',
        icon: '🍜',
        description: 'Stir-fried noodles with succulent shrimp'
    },
    {
        id: 12,
        name: 'Beef Chow Mein',
        price: 7.49,
        category: 'chinese',
        icon: '🍜',
        description: 'Stir-fried noodles with tender beef strips'
    },
    {
        id: 13,
        name: 'Pork Chow Mein',
        price: 6.99,
        category: 'chinese',
        icon: '🍜',
        description: 'Crispy noodles with roasted pork'
    },
    {
        id: 14,
        name: 'Combination Chow Mein',
        price: 8.49,
        category: 'chinese',
        icon: '🍜',
        description: 'Chow mein with chicken, shrimp, and beef'
    },
    {
        id: 15,
        name: 'Chow Fun (Wide Rice Noodles)',
        price: 6.99,
        category: 'chinese',
        icon: '🍜',
        description: 'Stir-fried wide rice noodles with chicken and vegetables'
    },
    {
        id: 16,
        name: 'Lo Mein Noodles',
        price: 6.49,
        category: 'chinese',
        icon: '🍜',
        description: 'Soft noodles with chicken and mixed vegetables'
    },
    {
        id: 17,
        name: 'Pad Thai Noodles',
        price: 6.99,
        category: 'chinese',
        icon: '🍜',
        description: 'Thai-style stir-fried rice noodles'
    },
    {
        id: 18,
        name: 'Singapore Mei Fun',
        price: 6.99,
        category: 'chinese',
        icon: '🍜',
        description: 'Thin rice noodles with curry powder'
    },
    {
        id: 19,
        name: 'Spring Rolls (4 pcs)',
        price: 4.99,
        category: 'chinese',
        icon: '🥟',
        description: 'Crispy spring rolls with sweet chili dipping sauce'
    },
    {
        id: 20,
        name: 'Chicken Dumplings (6 pcs)',
        price: 5.49,
        category: 'chinese',
        icon: '🥟',
        description: 'Steamed chicken and vegetable dumplings with soy sauce'
    },
    {
        id: 21,
        name: 'Prawn Dumplings (6 pcs)',
        price: 6.99,
        category: 'chinese',
        icon: '🥟',
        description: 'Steamed prawn and chive dumplings'
    },
    {
        id: 22,
        name: 'Pork Dumplings (6 pcs)',
        price: 5.99,
        category: 'chinese',
        icon: '🥟',
        description: 'Steamed pork and vegetable dumplings'
    },
    {
        id: 23,
        name: 'Vegetable Dumplings (6 pcs)',
        price: 4.99,
        category: 'chinese',
        icon: '🥟',
        description: 'Steamed vegetable dumplings with soy sauce'
    },
    {
        id: 24,
        name: 'Fried Spring Rolls (4 pcs)',
        price: 5.49,
        category: 'chinese',
        icon: '🥟',
        description: 'Golden fried spring rolls'
    },
    {
        id: 25,
        name: 'Fried Wonton (8 pcs)',
        price: 4.99,
        category: 'chinese',
        icon: '🥟',
        description: 'Crispy fried wontons with sweet sauce'
    },
    {
        id: 26,
        name: 'Mongolian Beef',
        price: 8.99,
        category: 'chinese',
        icon: '🥘',
        description: 'Tender beef with onions in a savory sauce'
    },
    {
        id: 27,
        name: 'Kung Pao Chicken',
        price: 7.49,
        category: 'chinese',
        icon: '🥘',
        description: 'Chicken with peanuts and chili peppers'
    },
    {
        id: 28,
        name: 'Sweet & Sour Pork',
        price: 7.99,
        category: 'chinese',
        icon: '🥘',
        description: 'Pork in a tangy sweet and sour sauce with vegetables'
    },
    {
        id: 29,
        name: 'Mapo Tofu',
        price: 6.99,
        category: 'chinese',
        icon: '🥘',
        description: 'Silky tofu in spicy Sichuan sauce'
    },
    {
        id: 30,
        name: 'General Tso Chicken',
        price: 8.49,
        category: 'chinese',
        icon: '🥘',
        description: 'Crispy chicken in a sweet and spicy glaze'
    },
    {
        id: 31,
        name: 'Sesame Chicken',
        price: 8.49,
        category: 'chinese',
        icon: '🥘',
        description: 'Golden fried chicken with sesame seeds'
    },
    {
        id: 32,
        name: 'Orange Chicken',
        price: 8.49,
        category: 'chinese',
        icon: '🥘',
        description: 'Crispy chicken with tangy orange sauce'
    },
    {
        id: 33,
        name: 'Beef with Broccoli',
        price: 7.99,
        category: 'chinese',
        icon: '🥘',
        description: 'Tender beef with fresh broccoli in oyster sauce'
    },
    {
        id: 34,
        name: 'Chicken with Broccoli',
        price: 7.49,
        category: 'chinese',
        icon: '🥘',
        description: 'Tender chicken with fresh broccoli'
    },
    {
        id: 35,
        name: 'Shrimp with Garlic Sauce',
        price: 8.99,
        category: 'chinese',
        icon: '🥘',
        description: 'Succulent shrimp in aromatic garlic sauce'
    },
    {
        id: 36,
        name: 'Shrimp with Lobster Sauce',
        price: 9.49,
        category: 'chinese',
        icon: '🥘',
        description: 'Shrimp in creamy lobster sauce'
    },
    {
        id: 37,
        name: 'Black Pepper Beef',
        price: 8.49,
        category: 'chinese',
        icon: '🥘',
        description: 'Beef with black pepper and vegetables'
    },
    {
        id: 38,
        name: 'Cashew Chicken',
        price: 8.49,
        category: 'chinese',
        icon: '🥘',
        description: 'Chicken with cashews and vegetables'
    },
    {
        id: 39,
        name: 'Mixed Vegetables',
        price: 5.99,
        category: 'chinese',
        icon: '🥘',
        description: 'Assorted stir-fried vegetables'
    },
    {
        id: 40,
        name: 'Eggplant with Garlic Sauce',
        price: 6.49,
        category: 'chinese',
        icon: '🥘',
        description: 'Eggplant in savory garlic sauce'
    },
    {
        id: 41,
        name: 'String Beans with Garlic',
        price: 6.99,
        category: 'chinese',
        icon: '🥘',
        description: 'Fresh string beans with aromatic garlic'
    },
    {
        id: 42,
        name: 'Chow Chow Fun (Beef)',
        price: 7.99,
        category: 'chinese',
        icon: '🍜',
        description: 'Wide rice noodles with beef and sprouts'
    },
    {
        id: 43,
        name: 'Chow Chow Fun (Shrimp)',
        price: 8.49,
        category: 'chinese',
        icon: '🍜',
        description: 'Wide rice noodles with shrimp and bean sprouts'
    },
    {
        id: 44,
        name: 'Crispy Noodle with Soy Sauce',
        price: 5.49,
        category: 'chinese',
        icon: '🍜',
        description: 'Fried crispy noodles with savory soy sauce'
    },
    {
        id: 45,
        name: 'Chow Mein Crispy Noodle Sandwich',
        price: 5.99,
        category: 'chinese',
        icon: '🥪',
        description: 'Crispy noodles served in a soft bun'
    },
    {
        id: 46,
        name: 'Sweet & Sour Chicken',
        price: 7.99,
        category: 'chinese',
        icon: '🥘',
        description: 'Crispy chicken in sweet and sour sauce'
    },
    {
        id: 47,
        name: 'Sweet & Sour Shrimp',
        price: 8.49,
        category: 'chinese',
        icon: '🥘',
        description: 'Shrimp in tangy sweet and sour sauce'
    },
    {
        id: 48,
        name: 'Sweet & Sour Beef',
        price: 8.49,
        category: 'chinese',
        icon: '🥘',
        description: 'Beef in sweet and sour sauce with vegetables'
    },
    {
        id: 49,
        name: 'Chicken Satay (6 pcs)',
        price: 6.99,
        category: 'chinese',
        icon: '🍢',
        description: 'Grilled chicken skewers with peanut sauce'
    },
    {
        id: 50,
        name: 'Beef Satay (6 pcs)',
        price: 7.99,
        category: 'chinese',
        icon: '🍢',
        description: 'Grilled beef skewers with peanut sauce'
    },
    {
        id: 51,
        name: 'Chicken Lettuce Wrap',
        price: 6.49,
        category: 'chinese',
        icon: '🥬',
        description: 'Minced chicken in crispy lettuce leaves'
    },
    {
        id: 52,
        name: 'Shrimp Lettuce Wrap',
        price: 7.49,
        category: 'chinese',
        icon: '🥬',
        description: 'Minced shrimp in crispy lettuce leaves'
    },
    {
        id: 53,
        name: 'Hot & Sour Soup',
        price: 4.99,
        category: 'chinese',
        icon: '🍲',
        description: 'Spicy and tangy soup with tofu and mushrooms'
    },
    {
        id: 54,
        name: 'Wonton Soup',
        price: 5.49,
        category: 'chinese',
        icon: '🍲',
        description: 'Delicate wontons in clear broth'
    },
    {
        id: 55,
        name: 'Egg Drop Soup',
        price: 4.49,
        category: 'chinese',
        icon: '🍲',
        description: 'Silky egg ribbons in clear chicken broth'
    },
    {
        id: 56,
        name: 'Corn & Chicken Soup',
        price: 5.99,
        category: 'chinese',
        icon: '🍲',
        description: 'Sweet corn with tender chicken pieces'
    },
    {
        id: 57,
        name: 'Miso Soup',
        price: 4.99,
        category: 'chinese',
        icon: '🍲',
        description: 'Traditional miso-based soup with tofu'
    },
    {
        id: 58,
        name: 'Peking Duck (Half)',
        price: 14.99,
        category: 'chinese',
        icon: '🦆',
        description: 'Crispy roasted duck with plum sauce'
    },
    {
        id: 59,
        name: 'Roasted Chicken Quarter',
        price: 7.99,
        category: 'chinese',
        icon: '🍗',
        description: 'Fragrant roasted chicken with special spices'
    },
    {
        id: 60,
        name: 'Crispy Whole Fish',
        price: 12.99,
        category: 'chinese',
        icon: '🐟',
        description: 'Whole fried fish with seasonal vegetables'
    },
    {
        id: 61,
        name: 'Honey Glazed Ham',
        price: 8.99,
        category: 'chinese',
        icon: '🍖',
        description: 'Tender ham with honey glaze'
    },
    {
        id: 62,
        name: 'Braised Pork Belly',
        price: 9.49,
        category: 'chinese',
        icon: '🍖',
        description: 'Melt-in-mouth pork belly in soy sauce'
    },
    {
        id: 63,
        name: 'Steamed Rice',
        price: 1.99,
        category: 'chinese',
        icon: '🍚',
        description: 'Fluffy steamed white rice'
    },
    {
        id: 64,
        name: 'Brown Rice',
        price: 2.49,
        category: 'chinese',
        icon: '🍚',
        description: 'Healthy brown rice'
    },
    {
        id: 65,
        name: 'Jasmine Rice',
        price: 2.49,
        category: 'chinese',
        icon: '🍚',
        description: 'Fragrant jasmine rice'
    }
];

// Current filter
let currentFilter = 'all';
let selectedItemId = null;

// Initialize menu on page load
document.addEventListener('DOMContentLoaded', function() {
    renderMenuItems(menuItems);
    setupFilterButtons();
});

// ============================================
// RENDER MENU ITEMS
// ============================================

function renderMenuItems(items) {
    const menuGrid = document.getElementById('menu-grid');
    if (!menuGrid) return;
    
    menuGrid.innerHTML = '';
    
    items.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.className = 'menu-item';
        menuItemElement.innerHTML = `
            <div class="menu-item-image">${item.icon}</div>
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p class="price">$${item.price.toFixed(2)}</p>
                <p class="description">${item.description}</p>
                <button class="btn btn-primary btn-small" onclick="openMenuItemModal(${item.id})">Add to Cart</button>
            </div>
        `;
        menuGrid.appendChild(menuItemElement);
    });
}

// ============================================
// FILTER MENU ITEMS
// ============================================

function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            currentFilter = this.dataset.filter;
            
            // Filter and render items
            if (currentFilter === 'all') {
                renderMenuItems(menuItems);
            } else {
                const filteredItems = menuItems.filter(item => item.category === currentFilter);
                renderMenuItems(filteredItems);
            }
        });
    });
}

// ============================================
// MODAL FOR MENU ITEMS
// ============================================

function openMenuItemModal(itemId) {
    selectedItemId = itemId;
    const item = menuItems.find(i => i.id === itemId);
    
    if (item) {
        const modal = document.getElementById('add-to-cart-modal');
        const modalDetails = document.getElementById('modal-item-details');
        
        if (modal && modalDetails) {
            modalDetails.innerHTML = `
                <div style="text-align: center; margin-bottom: 20px;">
                    <div style="font-size: 3rem; margin-bottom: 10px;">${item.icon}</div>
                    <h3 style="margin: 10px 0; color: #000;">${item.name}</h3>
                    <p style="font-size: 1.2rem; color: #FF8C00; font-weight: bold;">$${item.price.toFixed(2)}</p>
                    <p style="color: #666; margin-top: 10px;">${item.description}</p>
                </div>
            `;
            
            modal.classList.add('show');
            document.getElementById('quantity').value = 1;
        }
    }
}

// ============================================
// ADD TO CART
// ============================================

function addToCart() {
    if (!selectedItemId) return;
    
    const item = menuItems.find(i => i.id === selectedItemId);
    const quantity = parseInt(document.getElementById('quantity').value);
    
    if (item && quantity > 0) {
        const cartItem = {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: quantity,
            icon: item.icon
        };
        
        // Check if item already exists in cart
        const existingItem = cart.find(c => c.id === item.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push(cartItem);
        }
        
        saveCart();
        updateCartCount();
        closeModal();
        showNotification(`${item.name} added to cart!`);
        selectedItemId = null;
    }
}

function saveCart() {
    localStorage.setItem('foodVanCart', JSON.stringify(cart));
}
