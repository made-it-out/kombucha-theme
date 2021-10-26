// window.addEventListener('DOMContentLoaded', () => {
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
// })