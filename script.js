document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navUl = document.querySelector('nav ul');
    const body = document.body;

    // Check if mobile menu elements exist
    if (mobileMenuIcon && navUl) {
        mobileMenuIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            navUl.classList.toggle('show');
            navUl.classList.toggle('active');
            body.classList.toggle('menu-open');

            // Change icon to close
            if (navUl.classList.contains('show')) {
                mobileMenuIcon.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                mobileMenuIcon.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });

        // Close mobile menu when clicking outside the menu or icon
        document.addEventListener('click', function(event) {
            if (navUl.classList.contains('show')) {
                // Check if click is outside the menu and icon
                if (!mobileMenuIcon.contains(event.target) && !navUl.contains(event.target)) {
                    navUl.classList.remove('show');
                    navUl.classList.remove('active');
                    body.classList.remove('menu-open');
                    mobileMenuIcon.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Close mobile menu if open - remove both show and active classes
                navUl.classList.remove('show');
                navUl.classList.remove('active');
                body.classList.remove('menu-open');
                mobileMenuIcon.innerHTML = '<i class="fas fa-bars"></i>';

                // Smooth scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(45, 45, 45, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.backgroundColor = '#2d2d2d';
            header.style.boxShadow = 'none';
        }
    });

    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
