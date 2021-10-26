window.addEventListener('DOMContentLoaded', () => {
    // Testimonials
    const testimonialsSection = Array.from(document.querySelectorAll('.testimonials'));

    testimonialsSection.forEach(section => {
        const testimonailsSlides = Array.from(section.querySelectorAll('.testimonials__slide'));
        const testimonialsPrev = section.querySelector('.testimonials__previous');
        const testimonialsNext = section.querySelector('.testimonials__next');
    
        let i = 0;
    
        testimonialsNext.addEventListener('click', testimonialsIncrement)
        testimonialsNext.addEventListener('keydown', (e) => {
            if (e.keyCode === 13 || e.keyCode === 32) {
                testimonialsIncrement()
            }
        })
    
        testimonialsPrev.addEventListener('click', testimonialsDecrement)
        testimonialsPrev.addEventListener('keydown', (e) => {
            if (e.keyCode === 13 || e.keyCode === 32) {
                testimonialsDecrement()
            }
        })
    
        function testimonialsIncrement() {
            if (i < testimonailsSlides.length - 1) {
                testimonailsSlides.forEach((slide, index) => {
                    slide.classList.remove('active');
                    slide.style.transform = `translateX(-${(i + 1) * 100}%)`;
                })
                i++
                testimonailsSlides[i].classList.add('active');
                testimonailsSlides[i].style.transform = `translateX(-${i * 100}%)`;
            }
            if (i === testimonailsSlides.length - 1) {
                testimonialsNext.classList.remove('active');
            }
    
            testimonialsPrev.classList.add('active');
        }
        function testimonialsDecrement() {
            if (i > 0) {
                testimonailsSlides.forEach((slide, index) => {
                    slide.classList.remove('active');
                    slide.style.transform = `translateX(-${(i - 1) * 100}%)`;
                })
                i--
                testimonailsSlides[i].classList.add('active');
                testimonailsSlides[i].style.transform = `translateX(-${i * 100}%)`;
            }
            if (i === 0) {
                testimonialsPrev.classList.remove('active');
            }
    
            testimonialsNext.classList.add('active');
        }
    })
})