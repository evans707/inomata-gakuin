document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('js-menu-toggle');
    const headerNav = document.getElementById('js-header-nav');

    if (menuToggle && headerNav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('is-active'); 
            headerNav.classList.toggle('is-open');   
        });

        const navLinks = headerNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');

                if (href.startsWith('#') && href !== '#') {
                    e.preventDefault();

                    const targetElement = document.querySelector(href);
                    if (targetElement) {
                        const header = document.querySelector('.site-header');
                        const headerHeight = header ? header.offsetHeight : 0;

                        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }

                menuToggle.classList.remove('is-active');
                headerNav.classList.remove('is-open');
            });
        });
    }
});