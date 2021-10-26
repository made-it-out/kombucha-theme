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
})