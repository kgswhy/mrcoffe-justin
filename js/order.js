// Menu Items Data
const menuItems = [
    {
        id: 1,
        name: 'Classic Espresso',
        price: 'Rp 25.000',
        image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=500',
        description: 'Rich and bold espresso shot'
    },
    {
        id: 2,
        name: 'Caramel Frappuccino',
        price: 'Rp 35.000',
        image: 'https://images.unsplash.com/photo-1620303044792-44de5cc7fec3?w=500',
        description: 'Blended coffee with caramel sauce'
    },
    {
        id: 3,
        name: 'Cappuccino',
        price: 'Rp 30.000',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500',
        description: 'Espresso with steamed milk and foam'
    },
    {
        id: 4,
        name: 'Croissant',
        price: 'Rp 20.000',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500',
        description: 'Buttery, flaky pastry'
    }
];

// Add-ons Data
const addons = {
    'extra-shot': { name: 'Extra Shot', price: 5000 },
    'whipped-cream': { name: 'Whipped Cream', price: 3000 },
    'caramel-syrup': { name: 'Caramel Syrup', price: 4000 }
};

// Load Menu Items
function loadMenuItems() {
    const menuItemsContainer = document.querySelector('.menu-items');
    if (!menuItemsContainer) return;

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item-select';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 4px;">
            <h4>${item.name}</h4>
            <p>Rp ${item.price.toLocaleString()}</p>
        `;
        menuItem.dataset.id = item.id;
        menuItem.dataset.price = item.price;
        menuItem.addEventListener('click', () => toggleMenuItem(menuItem));
        menuItemsContainer.appendChild(menuItem);
    });
}

// Toggle Menu Item Selection
function toggleMenuItem(menuItem) {
    menuItem.classList.toggle('selected');
    updateOrderSummary();
}

// Update Order Summary
function updateOrderSummary() {
    const summaryItems = document.querySelector('.summary-items');
    const totalPriceElement = document.getElementById('totalPrice');
    if (!summaryItems || !totalPriceElement) return;

    let total = 0;
    summaryItems.innerHTML = '';

    // Add selected menu items
    document.querySelectorAll('.menu-item-select.selected').forEach(item => {
        const price = parseInt(item.dataset.price);
        total += price;
        const summaryItem = document.createElement('div');
        summaryItem.className = 'summary-item';
        summaryItem.innerHTML = `
            <span>${item.querySelector('h4').textContent}</span>
            <span>Rp ${price.toLocaleString()}</span>
        `;
        summaryItems.appendChild(summaryItem);
    });

    // Add selected add-ons
    document.querySelectorAll('input[name="addons"]:checked').forEach(checkbox => {
        const addon = addons[checkbox.value];
        total += addon.price;
        const summaryItem = document.createElement('div');
        summaryItem.className = 'summary-item';
        summaryItem.innerHTML = `
            <span>${addon.name}</span>
            <span>Rp ${addon.price.toLocaleString()}</span>
        `;
        summaryItems.appendChild(summaryItem);
    });

    totalPriceElement.textContent = `Rp ${total.toLocaleString()}`;
}

// Form Validation
function validateForm() {
    let isValid = true;
    const form = document.getElementById('orderForm');
    const formGroups = form.querySelectorAll('.form-group');

    // Reset previous errors
    formGroups.forEach(group => group.classList.remove('error'));

    // Validate name
    const name = form.querySelector('#name');
    if (!name.value.trim()) {
        showError(name, 'Name is required');
        isValid = false;
    } else if (name.value.trim().length < 3) {
        showError(name, 'Name must be at least 3 characters long');
        isValid = false;
    }

    // Validate email
    const email = form.querySelector('#email');
    if (!email.value.trim()) {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }

    // Validate phone
    const phone = form.querySelector('#phone');
    if (!phone.value.trim()) {
        showError(phone, 'Phone number is required');
        isValid = false;
    } else if (!isValidPhone(phone.value)) {
        showError(phone, 'Please enter a valid phone number');
        isValid = false;
    }

    // Validate address
    const address = form.querySelector('#address');
    if (!address.value.trim()) {
        showError(address, 'Address is required');
        isValid = false;
    } else if (address.value.trim().length < 10) {
        showError(address, 'Please enter a complete address');
        isValid = false;
    }

    // Validate menu items
    const selectedItems = document.querySelectorAll('.menu-item-select.selected');
    if (selectedItems.length === 0) {
        const menuItemsGroup = form.querySelector('.menu-items').parentElement;
        showError(menuItemsGroup, 'Please select at least one item');
        isValid = false;
    }

    return isValid;
}

// Show Error Message
function showError(element, message) {
    const formGroup = element.closest('.form-group');
    formGroup.classList.add('error');
    
    let errorMessage = formGroup.querySelector('.error-message');
    if (!errorMessage) {
        errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        formGroup.appendChild(errorMessage);
    }
    errorMessage.textContent = message;
}

// Validate Email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate Phone
function isValidPhone(phone) {
    const phoneRegex = /^[0-9]{10,13}$/;
    return phoneRegex.test(phone);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    loadMenuItems();

    // Add-ons change handler
    document.querySelectorAll('input[name="addons"]').forEach(checkbox => {
        checkbox.addEventListener('change', updateOrderSummary);
    });

    // Form submission
    const form = document.getElementById('orderForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Here you would typically send the order to a server
            alert('Order placed successfully! Thank you for choosing MR.COFFEE.');
            form.reset();
            document.querySelectorAll('.menu-item-select').forEach(item => {
                item.classList.remove('selected');
            });
            updateOrderSummary();
        }
    });
}); 