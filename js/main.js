// Most Ordered Products Data
const mostOrderedProducts = [
    {
        name: 'Classic Espresso',
        price: 'Rp 25.000',
        image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=500',
        description: 'Rich and bold espresso shot'
    },
    {
        name: 'Caramel Frappuccino',
        price: 'Rp 35.000',
        image: 'https://images.unsplash.com/photo-1620303044792-44de5cc7fec3?w=500',
        description: 'Blended coffee with caramel sauce'
    },
    {
        name: 'Cappuccino',
        price: 'Rp 30.000',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500',
        description: 'Espresso with steamed milk and foam'
    },
    {
        name: 'Croissant',
        price: 'Rp 20.000',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500',
        description: 'Buttery, flaky pastry'
    },
    {
        name: 'Iced Latte',
        price: 'Rp 32.000',
        image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500',
        description: 'Espresso with cold milk'
    }
];

// Load Most Ordered Products
function loadMostOrderedProducts() {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return;

    mostOrderedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <a href="menu.html" class="cta-button">View Menu</a>
        `;
        productGrid.appendChild(productCard);
    });
}

// Smooth Scroll for Navigation Links
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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadMostOrderedProducts();
});

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll); 