const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('shadow-md');
        const menuItems = navbar.querySelectorAll('ul li a');
        menuItems.forEach(item => {
            item.classList.add('text-slate-800');
        });
    } else {
        navbar.classList.remove('shadow-md');
        const menuItems = navbar.querySelectorAll('ul li a');
        menuItems.forEach(item => {
            item.classList.remove('text-slate-800');
        });
    }
});