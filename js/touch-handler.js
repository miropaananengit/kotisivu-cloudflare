/**
 * Mobile Touch Handler for Cards
 * 
 * This script adds touch support for cards with hover effects on mobile devices
 * It toggles the active class on/off when a card is tapped
 */
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on a touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        // Find all cards that might have hover effects
        const cards = document.querySelectorAll('.skill-card, .benefit-card, .step-card');
        
        // Remove any persistent active states on page load
        cards.forEach(card => card.classList.remove('active'));
        
        // Add touch event listeners to each card
        cards.forEach(card => {
            card.addEventListener('click', function(e) {
                // If the card has an overlay, handle the toggle
                if (card.querySelector('.card-overlay')) {
                    e.preventDefault();
                    
                    // Check if this card is already active
                    const isActive = card.classList.contains('active');
                    
                    // First remove active class from all cards
                    cards.forEach(c => c.classList.remove('active'));
                    
                    // If the clicked card wasn't active, make it active (true toggle behavior)
                    if (!isActive) {
                        card.classList.add('active');
                    }
                }
            });
        });
        
        // Handle clicks outside of cards to close them
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.skill-card, .benefit-card, .step-card')) {
                cards.forEach(card => card.classList.remove('active'));
            }
        });
    }
});
