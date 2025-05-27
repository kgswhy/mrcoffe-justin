// Reward Button Click Handler
function handleRewardClick() {
    const rewardButtons = document.querySelectorAll('.reward-button');
    
    rewardButtons.forEach(button => {
        button.addEventListener('click', () => {
            const rewardType = button.getAttribute('data-reward');
            showRewardModal(rewardType);
        });
    });
}

// Show Reward Modal
function showRewardModal(rewardType) {
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'reward-modal';
    
    // Get reward details based on type
    const rewardDetails = getRewardDetails(rewardType);
    
    // Set modal content
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>${rewardDetails.title}</h2>
            <p>${rewardDetails.message}</p>
            <div class="app-download-prompt">
                <p>Download our app to claim this reward!</p>
                <div class="app-buttons">
                    <a href="#" class="app-button">
                        <img src="assets/app-store.png" alt="Download on App Store">
                    </a>
                    <a href="#" class="app-button">
                        <img src="assets/play-store.png" alt="Get it on Google Play">
                    </a>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.appendChild(modal);
    
    // Show modal with animation
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    // Close modal when clicking close button or outside modal
    const closeButton = modal.querySelector('.close-modal');
    closeButton.addEventListener('click', () => {
        closeModal(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
}

// Close Modal
function closeModal(modal) {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.remove();
    }, 300);
}

// Get Reward Details
function getRewardDetails(rewardType) {
    const rewards = {
        welcome: {
            title: 'Welcome Bonus',
            message: 'Congratulations! You\'ve earned 100 points for joining MR.COFFEE Rewards.'
        },
        birthday: {
            title: 'Birthday Treat',
            message: 'Happy Birthday! Enjoy a free drink on us.'
        },
        double: {
            title: 'Double Points Weekend',
            message: 'Earn double points on all your purchases this weekend!'
        },
        pastry: {
            title: 'Free Pastry',
            message: 'Enjoy a free pastry with any coffee purchase.'
        },
        master: {
            title: 'Coffee Master Status',
            message: 'Congratulations! You\'ve achieved Coffee Master status.'
        }
    };
    
    return rewards[rewardType] || {
        title: 'Reward',
        message: 'Thank you for being a loyal MR.COFFEE customer!'
    };
}



// Initialize
document.addEventListener('DOMContentLoaded', () => {
    handleRewardClick();
    addModalStyles();
}); 