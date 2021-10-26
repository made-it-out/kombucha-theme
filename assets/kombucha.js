window.addEventListener('DOMContentLoaded', () => {
    // Header
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');
    const headerToggle = document.querySelector('.header__toggle');

    headerToggle.addEventListener('click', toggleClick);
    headerToggle.addEventListener('keydown', toggleKeyDown);

    function toggleClick(e) {
        header.classList.toggle('nav-shown');
        nav.classList.toggle('shown');
        document.body.classList.toggle('modal-open');
    }

    function toggleKeyDown(e) {
        if (e.keyCode === 13 || e.keyCode === 32) {
            header.classList.toggle('nav-shown');
            nav.classList.toggle('shown');
            document.body.classList.toggle('modal-open');
        }
    }

    window.addEventListener('resize', () => {
        if(window.innerWidth >= 768){
            header.classList.remove('nav-shown');
            nav.classList.remove('shown');
            document.body.classList.remove('modal-open')
        }
    })

    // Testimonials
    const testimonailsSlides = Array.from(document.querySelectorAll('.testimonials__slide'));
    const testimonialsPrev = document.querySelector('.testimonials__previous');
    const testimonialsNext = document.querySelector('.testimonials__next');

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

    // Animations on scroll
    const animateOptions = {
        threshold: 0.5
    }

    const animateOnScroll = new IntersectionObserver(function (entries, animateOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('animate');
                animateOnScroll.unobserve(entry.target)
            }
        })
    }, animateOptions)

    const fadeSlideUp = Array.from(document.querySelectorAll('.fade-slide-up'))
    fadeSlideUp.forEach(element => {
        animateOnScroll.observe(element)
    })

    const popIn = Array.from(document.querySelectorAll('.pop-in'))
    popIn.forEach(element => {
        animateOnScroll.observe(element)
    })

    const fadeFromLeft = Array.from(document.querySelectorAll('.fade-from-left'))
    fadeFromLeft.forEach(element => {
        animateOnScroll.observe(element)
    })

    const fadeFromRight = Array.from(document.querySelectorAll('.fade-from-right'))
    fadeFromRight.forEach(element => {
        animateOnScroll.observe(element)
    })
})