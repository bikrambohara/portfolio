document.addEventListener('DOMContentLoaded', function() {
    let menuIcone = document.querySelector('#menu-icone');
    let navbar = document.querySelector('.navebar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100; 
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    let targetLink = document.querySelector(`header nav a[href="#${id}"]`);
                    if (targetLink) targetLink.classList.add('active');
                });
            }
        });
    };

    menuIcone.onclick = () => {
        menuIcone.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
});

