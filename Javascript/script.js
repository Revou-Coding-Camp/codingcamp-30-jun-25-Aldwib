// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu if open
        mobileMenu.classList.add('hidden');
    });
});

// Name input and greeting
const nameInput = document.getElementById('name');
const userNameSpan = document.getElementById('user-name');

nameInput.addEventListener('input', function() {
    const name = this.value.trim();
    if (name) {
        userNameSpan.textContent = name;
    } else {
        userNameSpan.textContent = 'There!';
    }
});

// Form validation and submission
const contactForm = document.getElementById('contact-form');
const successModal = document.getElementById('success-modal');
const closeModal = document.getElementById('close-modal');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Reset previous errors
    document.querySelectorAll('.text-red-500').forEach(error => {
        error.classList.add('hidden');
    });
    
    let isValid = true;
    
    // Validate name
    if (!name) {
        document.getElementById('name-error').classList.remove('hidden');
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        document.getElementById('email-error').classList.remove('hidden');
        isValid = false;
    }
    
    // Validate phone
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phone || !phoneRegex.test(phone)) {
        document.getElementById('phone-error').classList.remove('hidden');
        isValid = false;
    }
    
    // Validate message
    if (!message) {
        document.getElementById('message-error').classList.remove('hidden');
        isValid = false;
    }
    
    if (isValid) {
        // Show success modal
        successModal.classList.remove('hidden');
        
        // Clear form
        contactForm.reset();
        userNameSpan.textContent = 'There!';
        
        // In a real application, you would send the data to a server here
        console.log('Form submitted:', { name, email, phone, message });
    }
});

closeModal.addEventListener('click', () => {
    successModal.classList.add('hidden');
});

// Close modal when clicking outside
successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
        successModal.classList.add('hidden');
    }
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white', 'navbar-shadow');
    } else {
        navbar.classList.remove('navbar-shadow');
    }
});