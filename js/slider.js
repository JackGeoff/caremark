// Hero Slider functionality
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicatorsContainer = document.getElementById('sliderIndicators');

let currentSlide = 0;
let autoSlideInterval;

// Create indicators
slides.forEach((_, index) => {
    const indicator = document.createElement('button');
    indicator.classList.add('slider-indicator');
    if (index === 0) indicator.classList.add('active');
    indicator.setAttribute('aria-label', `Go to slide ${index + 1}`);
    indicator.addEventListener('click', () => goToSlide(index));
    indicatorsContainer.appendChild(indicator);
});

const indicators = document.querySelectorAll('.slider-indicator');

function goToSlide(index) {
    // Remove active class from current slide
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    // Update current slide
    currentSlide = index;
    
    // Add active class to new slide
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
    
    // Reset auto slide
    resetAutoSlide();
}

function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next);
}

function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prev);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Event listeners
if (prevBtn) prevBtn.addEventListener('click', prevSlide);
if (nextBtn) nextBtn.addEventListener('click', nextSlide);

// Start auto slide
if (slides.length > 0) {
    startAutoSlide();
}

// Pause auto slide on hover
const sliderContainer = document.querySelector('.hero-slider');
if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    
    sliderContainer.addEventListener('mouseleave', () => {
        startAutoSlide();
    });
}
