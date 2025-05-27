// Menu Items Data
const menuItems = [
    {
        name: 'Classic Espresso',
        price: 'Rp 25.000',
        image: '/assets/espresso.jpeg',
        description: 'Rich and bold espresso shot',
        category: 'coffee'
    },
    {
        name: 'Caramel Frappuccino',
        price: 'Rp 35.000',
        image: '/assets/caramel.jpg',
        description: 'Blended coffee with caramel sauce',
        category: 'coffee'
    },
    {
        name: 'Cappuccino',
        price: 'Rp 30.000',
        image: '/assets/cappucino.jpeg',
        description: 'Espresso with steamed milk and foam',
        category: 'coffee'
    },
    {
        name: 'Croissant',
        price: 'Rp 20.000',
        image: '/assets/croisant.jpeg',
        description: 'Buttery, flaky pastry',
        category: 'pastry'
    },
    {
        name: 'Iced Latte',
        price: 'Rp 32.000',
        image: '/assets/latte.jpg',
        description: 'Espresso with cold milk',
        category: 'coffee'
    },
    {
        name: 'Mocha Frappuccino',
        category: 'frappe',
        price: 'Rp 38.000',
        image: '/assets/mocha.jpg',
        description: 'Blended coffee with chocolate sauce'
    },
    {
        name: 'Pour Over Coffee',
        category: 'brewed',
        price: 'Rp 28.000',
        image: '/assets/pourover.jpg',
        description: 'Hand-brewed coffee with care'
    },
    {
        name: 'Chocolate Croissant',
        category: 'bread',
        price: 'Rp 22.000',
        image: '/assets/chocolate.jpg',
        description: 'Croissant filled with chocolate'
    },
    {
        name: 'Vanilla Latte',
        price: 'Rp 33.000',
        image: '/assets/vanilla.jpg',
        description: 'Espresso with vanilla syrup and steamed milk',
        category: 'coffee'
    },
    {
        name: 'Matcha Green Tea Latte',
        price: 'Rp 35.000',
        image: '/assets/matcha.jpg',
        description: 'Premium matcha with steamed milk',
        category: 'tea'
    },
    {
        name: 'Blueberry Muffin',
        price: 'Rp 25.000',
        image: '/assets/BlueberryMuffin.jpg',
        description: 'Fresh baked muffin with blueberries',
        category: 'pastry'
    },
    {
        name: 'Cold Brew',
        price: 'Rp 34.000',
        image: '/assets/ColdBrew.jpg',
        description: 'Smooth cold brewed coffee',
        category: 'brewed'
    },
    {
        name: 'Tiramisu',
        price: 'Rp 28.000',
        image: '/assets/Tiramisu.jpg',
        description: 'Classic Italian coffee-flavored dessert',
        category: 'dessert'
    },
    {
        name: 'Caramel Macchiato',
        price: 'Rp 36.000',
        image: '/assets/caramel.jpg',
        description: 'Espresso with vanilla and caramel',
        category: 'coffee'
    },
    {
        name: 'Chocolate Chip Cookie',
        price: 'Rp 18.000',
        image: '/assets/ChocolateChipCookie.jpg',
        description: 'Fresh baked chocolate chip cookie',
        category: 'pastry'
    },
    {
        name: 'Hazelnut Latte',
        price: 'Rp 34.000',
        image: '/assets/HazelnutLatte.jpg',
        description: 'Espresso with hazelnut syrup and milk',
        category: 'coffee'
    },
    
    {
        name: 'Chocolate Cake',
        price: 'Rp 32.000',
        image: '/assets/ChocolateCake.jpg',
        description: 'Rich chocolate cake with ganache',
        category: 'dessert'
    },
    {
        name: 'Cinnamon Roll',
        price: 'Rp 26.000',
        image: '/assets/CinnamonRoll.jpg',
        description: 'Fresh baked cinnamon roll with icing',
        category: 'pastry'
    }
];

// Load Menu Items
function loadMenuItems(category = 'all') {
    const menuGrid = document.querySelector('.menu-grid');
    if (!menuGrid) return;

    // Clear existing items
    menuGrid.innerHTML = '';

    // Filter items based on category
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);

    // Create and append menu items
    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p class="description">${item.description}</p>
                <p class="price">${item.price}</p>
                <a href="order.html" class="cta-button">Order Now</a>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });
}

// Filter Button Click Handler
function handleFilterClick() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get category and load items
            const category = button.getAttribute('data-category');
            loadMenuItems(category);
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadMenuItems();
    handleFilterClick();
}); 