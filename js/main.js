// Navbar scroll effect
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-open');
        const hamburger = mobileMenuBtn.querySelector('.hamburger');
        
        if (navLinks.classList.contains('mobile-open')) {
            hamburger.style.background = 'transparent';
            hamburger.style.transform = 'rotate(45deg)';
            const before = window.getComputedStyle(hamburger, '::before');
            const after = window.getComputedStyle(hamburger, '::after');
        } else {
            hamburger.style.background = 'var(--foreground)';
            hamburger.style.transform = 'none';
        }
    });
}

// Set current year in footer
const yearElement = document.getElementById('currentYear');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Set active nav link based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinkElements = document.querySelectorAll('.nav-link');

navLinkElements.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate-fade-up, .animate-slide-in-left, .animate-slide-in-right');
    animatedElements.forEach(el => observer.observe(el));
});

// Form submission handler
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show success message (you can customize this)
        alert('Form submitted successfully! We\'ll contact you soon.');
        
        // Reset form
        form.reset();
    });
});

// Smooth scroll for anchor links
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
    });
});


ScrollReveal({ 
     reset: true,
     distance: '60px',
     duration: 2500,
     delay:400     
});




ScrollReveal().reveal('.hero-text h1', { delay: 200, origin: 'bottom'});
ScrollReveal().reveal('.hero-img', { delay: 200, origin: 'right'});
ScrollReveal().reveal('h2', { delay: 200, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('p', { delay: 100, origin: 'left', interval: 200 });
ScrollReveal().reveal('.about-image', { delay: 500, origin: 'left'});
ScrollReveal().reveal('.client-img', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.service-img', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.doctor-image', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.facility-image', { delay: 200, origin: 'left' });