// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    init();
});

function init() {
    // Add any initialization code here
    console.log('Application initialized');
    
    // Example: Add event listeners
    setupEventListeners();
}

function setupEventListeners() {
    // Example: Add click event listener to document
    document.addEventListener('click', function(event) {
        // Handle click events
        console.log('Click event detected');
    });
}

// Example utility function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
} 