// Most Ordered Products Data
const mostOrderedProducts = [
    {
        name: 'Classic Espresso',
        price: 'Rp 25.000',
        image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=500',
        description: 'Rich and bold espresso shot'
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

// Main functionality
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });

    // Product card hover effects
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = 'var(--shadow-lg)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'var(--shadow-md)';
        });
    });

    // Add loading animation to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    });

    // Smooth reveal for sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('animate-on-scroll');
    });

    // Add parallax effect to banner
    const banner = document.querySelector('.banner');
    if (banner) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            banner.style.backgroundPositionY = `${scrolled * 0.5}px`;
        });
    }

    // Add active state to current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Add hover effect to buttons
    const buttons = document.querySelectorAll('.cta-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });
}); 