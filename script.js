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
                if (navUl) {
                    navUl.classList.remove('show');
                    navUl.classList.remove('active');
                }
                body.classList.remove('menu-open');
                if (mobileMenuIcon) {
                    mobileMenuIcon.innerHTML = '<i class="fas fa-bars"></i>';
                }

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
        if (header) {
            if (window.scrollY > 100) {
                header.style.backgroundColor = 'rgba(45, 45, 45, 0.95)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
            } else {
                header.style.backgroundColor = '#2d2d2d';
                header.style.boxShadow = 'none';
            }
        }
    });

    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');

    if (backToTop) {
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
    }

    // ==========================================
    // MENU PAGE REDESIGN LOGIC & DATA
    // ==========================================

    const menuData = [
        // RICE & PULAO -> rice-biryani
        { id: 1, name: 'Plain Rice', category: 'rice-biryani', price: 80, isVeg: true, image: null },
        { id: 2, name: 'Jeera Rice', category: 'rice-biryani', price: 100, isVeg: true, image: null },
        { id: 3, name: 'Veg Fried Rice', category: 'rice-biryani', price: 160, isVeg: true, image: null },
        { id: 4, name: 'Paneer Fried Rice', category: 'rice-biryani', price: 175, isVeg: true, image: null },
        { id: 5, name: 'Egg Fried Rice', category: 'rice-biryani', price: 190, isVeg: false, image: null },
        { id: 6, name: 'Chicken Fried Rice', category: 'rice-biryani', price: 210, isVeg: false, image: null },
        { id: 7, name: 'Mixed Fried Rice', category: 'rice-biryani', price: 240, isVeg: false, image: null },
        { id: 8, name: 'Paneer Triple Rice', category: 'rice-biryani', price: 210, isVeg: true, image: null },
        { id: 9, name: 'Veg Triple Rice', category: 'rice-biryani', price: 190, isVeg: true, image: null },
        { id: 10, name: 'Chicken Triple Rice', category: 'rice-biryani', price: 250, isVeg: false, image: null },
        { id: 11, name: 'Egg Triple Rice', category: 'rice-biryani', price: 230, isVeg: false, image: null },
        { id: 12, name: 'Veg Pulao', category: 'rice-biryani', price: 160, isVeg: true, image: null },
        { id: 13, name: 'Veg Peas Pulao', category: 'rice-biryani', price: 170, isVeg: true, image: null },
        { id: 14, name: 'Kashmiri Pulao', category: 'rice-biryani', price: 250, isVeg: true, image: null },
        { id: 15, name: 'Paneer Pulao', category: 'rice-biryani', price: 190, isVeg: true, image: null },
        { id: 16, name: 'Shahi Pulao', category: 'rice-biryani', price: 250, isVeg: true, image: null },
        { id: 17, name: 'Veg Navratan Pulao', category: 'rice-biryani', price: 240, isVeg: true, image: null },

        // BIRYANI -> rice-biryani
        { id: 18, name: 'Veg Biryani with Raita & Papad', category: 'rice-biryani', price: 220, isVeg: true, image: null },
        { id: 19, name: 'Paneer Biryani with Raita & Papad', category: 'rice-biryani', price: 240, isVeg: true, image: null },
        { id: 20, name: 'Chicken Biryani with Raita & Papad', category: 'rice-biryani', price: 260, isVeg: false, image: null, description: 'Fragrant basmati rice cooked with tender chicken pieces and aromatic spices.' },
        { id: 21, name: 'Veg Handi Biryani with Raita & Papad', category: 'rice-biryani', price: 240, isVeg: true, image: null },
        { id: 22, name: 'Paneer Handi Biryani with Raita & Papad', category: 'rice-biryani', price: 260, isVeg: true, image: null },
        { id: 23, name: 'Chicken Handi Biryani with Raita & Papad', category: 'rice-biryani', price: 280, isVeg: false, image: null },
        { id: 24, name: 'Veg Special Biryani', category: 'rice-biryani', price: 310, isVeg: true, image: null },
        { id: 25, name: 'Chicken Special Biryani', category: 'rice-biryani', price: 330, isVeg: false, image: null },
        { id: 26, name: 'Mutton Biryani', category: 'rice-biryani', price: 250, isVeg: false, image: null },

        // DAL & MAIN COURSE VEG -> main-course
        { id: 27, name: 'Dal Fry', category: 'main-course', price: 130, isVeg: true, image: null },
        { id: 28, name: 'Dal Tarka', category: 'main-course', price: 150, isVeg: true, image: null },
        { id: 29, name: 'Dal Makhni', category: 'main-course', price: 190, isVeg: true, image: null },
        { id: 30, name: 'Dal Jeera', category: 'main-course', price: 100, isVeg: true, image: null },
        { id: 31, name: 'Dal Mughlai', category: 'main-course', price: 220, isVeg: true, image: null },
        { id: 32, name: "Daddy'z Special Paneer", category: 'main-course', price: 450, isVeg: true, image: null },
        { id: 33, name: 'Paneer Panjabi', category: 'main-course', price: 320, isVeg: true, image: null },
        { id: 34, name: 'Paneer Kolhapuri', category: 'main-course', price: 270, isVeg: true, image: null },
        { id: 35, name: 'Paneer Makhni', category: 'main-course', price: 250, isVeg: true, image: null },
        { id: 36, name: 'Paneer Butter Masala', category: 'main-course', price: 280, isVeg: true, image: null },
        { id: 37, name: 'Mix Veg', category: 'main-course', price: 190, isVeg: true, image: null },
        { id: 38, name: 'Mithila Special Thali', category: 'main-course', price: 250, isVeg: true, image: null, description: 'Signature dish with dal, rice, roti, and curries.' },

        // CHICKEN & NON VEG MAIN COURSE -> main-course
        { id: 39, name: 'Chicken Do Pyaza', category: 'main-course', price: 320, isVeg: false, image: null },
        { id: 40, name: 'Chicken Curry', category: 'main-course', price: 'H ₹310 / F ₹590', isVeg: false, image: null },
        { id: 41, name: 'Chicken Butter Masala', category: 'main-course', price: 'H ₹360 / F ₹650', isVeg: false, image: null },
        { id: 42, name: "Daddy'z Special Chicken", category: 'main-course', price: 750, isVeg: false, image: null },
        { id: 43, name: 'Mutton Curry', category: 'main-course', price: '4PC ₹380 / 8PC ₹700', isVeg: false, image: null },
        { id: 44, name: 'Egg Do Pyaza', category: 'main-course', price: 160, isVeg: false, image: null },

        // STARTERS -> starters
        { id: 45, name: 'Crispy Chilli Baby Corn', category: 'starters', price: 210, isVeg: true, image: null },
        { id: 46, name: 'Veg Spring Roll', category: 'starters', price: 170, isVeg: true, image: null },
        { id: 47, name: 'Paneer Tikka', category: 'starters', price: 260, isVeg: true, image: null },
        { id: 48, name: 'Chicken 65', category: 'starters', price: 250, isVeg: false, image: null },
        { id: 49, name: 'Chicken Lollipop (6 PC)', category: 'starters', price: 250, isVeg: false, image: null },
        { id: 50, name: 'Tandoori Chicken', category: 'starters', price: 'H ₹280 / F ₹540', isVeg: false, image: null },

        // CHINESE -> chinese
        { id: 51, name: 'Paneer Chilli', category: 'chinese', price: 230, isVeg: true, image: null },
        { id: 52, name: 'Veg Manchurian', category: 'chinese', price: 200, isVeg: true, image: null },
        { id: 53, name: 'Chicken Manchurian', category: 'chinese', price: 240, isVeg: false, image: null },
        { id: 54, name: 'Veg Chowmin', category: 'chinese', price: 150, isVeg: true, image: null },
        { id: 55, name: 'Chicken Chowmin', category: 'chinese', price: 190, isVeg: false, image: null },
        { id: 56, name: 'Veg Hot & Sour Soup', category: 'chinese', price: 99, isVeg: true, image: null },
        { id: 57, name: 'Chicken Manchow Soup', category: 'chinese', price: 130, isVeg: false, image: null },

        // INDIAN BREADS -> indian-breads
        { id: 58, name: 'Plain Naan', category: 'indian-breads', price: 18, isVeg: true, image: null },
        { id: 59, name: 'Butter Naan', category: 'indian-breads', price: 20, isVeg: true, image: null },
        { id: 60, name: 'Tandoori Roti', category: 'indian-breads', price: 50, isVeg: true, image: null },
        { id: 61, name: 'Garlic Naan', category: 'indian-breads', price: 70, isVeg: true, image: null },
        { id: 62, name: 'Paneer Kulcha', category: 'indian-breads', price: 70, isVeg: true, image: null },
        { id: 63, name: 'Laccha Paratha', category: 'indian-breads', price: 60, isVeg: true, image: null },

        // SALAD & SIDES -> salad-sides
        { id: 64, name: 'Green Salad', category: 'salad-sides', price: 60, isVeg: true, image: null },
        { id: 65, name: 'Mix Raita', category: 'salad-sides', price: 80, isVeg: true, image: null },
        { id: 66, name: 'Masala Papad', category: 'salad-sides', price: 50, isVeg: true, image: null },

        // DESSERTS -> desserts
        { id: 67, name: 'Gulab Jamun', category: 'desserts', price: 60, isVeg: true, image: null },
        { id: 68, name: 'Hot Gulab Jamun with Ice Cream', category: 'desserts', price: 99, isVeg: true, image: null },
        { id: 69, name: 'Brownie with Ice Cream', category: 'desserts', price: 149, isVeg: true, image: null },
        { id: 70, name: 'Vanilla Ice Cream', category: 'desserts', price: 70, isVeg: true, image: null },

        // BEVERAGES -> beverages
        { id: 71, name: 'Cappuccino', category: 'beverages', price: 109, isVeg: true, image: null },
        { id: 72, name: 'Masala Tea', category: 'beverages', price: 59, isVeg: true, image: null },
        { id: 73, name: 'Chocolate Shake', category: 'beverages', price: 109, isVeg: true, image: null },
        { id: 74, name: 'Kit Kat Oreo Milk Shake', category: 'beverages', price: 129, isVeg: true, image: null },
        { id: 75, name: "Daddy'z Special Walnut Brownie Shake", category: 'beverages', price: 179, isVeg: true, image: null }
    ];

    const menuGrid = document.getElementById('menu-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('menu-sort');

    // Create view more button
    const viewMoreContainer = document.createElement('div');
    viewMoreContainer.className = 'view-more-container';
    viewMoreContainer.innerHTML = '<button class="view-more-btn" id="view-more-btn">View More</button>';
    const menuSection = document.getElementById('menu');
    menuSection.appendChild(viewMoreContainer);
    const viewMoreBtn = document.getElementById('view-more-btn');

    // Category navigation scroll logic
    const categoryWrapper = document.getElementById('category-wrapper');
    const scrollLeftBtn = document.getElementById('scroll-left');
    const scrollRightBtn = document.getElementById('scroll-right');

    if (categoryWrapper && scrollLeftBtn && scrollRightBtn) {
        const updateArrowVisibility = () => {
            const scrollLeft = categoryWrapper.scrollLeft;
            const scrollWidth = categoryWrapper.scrollWidth;
            const clientWidth = categoryWrapper.clientWidth;

            // Left arrow visibility
            if (scrollLeft <= 5) {
                scrollLeftBtn.classList.add('disabled');
            } else {
                scrollLeftBtn.classList.remove('disabled');
            }

            // Right arrow visibility
            if (scrollLeft + clientWidth >= scrollWidth - 5) {
                scrollRightBtn.classList.add('disabled');
            } else {
                scrollRightBtn.classList.remove('disabled');
            }
        };

        scrollLeftBtn.addEventListener('click', () => {
            categoryWrapper.scrollBy({ left: -200, behavior: 'smooth' });
        });

        scrollRightBtn.addEventListener('click', () => {
            categoryWrapper.scrollBy({ left: 200, behavior: 'smooth' });
        });

        categoryWrapper.addEventListener('scroll', updateArrowVisibility);

        // Check visibility on load and on resize
        window.addEventListener('resize', updateArrowVisibility);
        // Initial check
        setTimeout(updateArrowVisibility, 100);
    }

    let currentCategory = 'all';
    let currentSort = 'popular';
    let visibleItems = 8; // Default for desktop
    let allItems = []; // Store all filtered items

    function detectScreenSize() {
        return window.innerWidth <= 768 ? 4 : 8;
    }

    function updateVisibleItems() {
        visibleItems = detectScreenSize();
    }

    // Adjust visible items on resize
    window.addEventListener('resize', () => {
        updateVisibleItems();
        renderMenu();
    });
    function renderMenu() {
        if (!menuGrid) return;

        // 1. Filter
        allItems = menuData.filter(item => {
            if (currentCategory === 'all') return true;
            return item.category === currentCategory;
        });

        // 2. Sort
        allItems.sort((a, b) => {
            if (currentSort === 'price-low') {
                let pA = typeof a.price === 'number' ? a.price : parseInt(a.price) || 0;
                let pB = typeof b.price === 'number' ? b.price : parseInt(b.price) || 0;
                return pA - pB;
            } else if (currentSort === 'price-high') {
                let pA = typeof a.price === 'number' ? a.price : parseInt(a.price) || 0;
                let pB = typeof b.price === 'number' ? b.price : parseInt(b.price) || 0;
                return pB - pA;
            } else if (currentSort === 'name-asc') {
                return a.name.localeCompare(b.name);
            }
            // Default "popular" uses array insertion order
            return a.id - b.id;
        });

        // 3. Render
        menuGrid.innerHTML = '';

        // Determine how many items to show
        let itemsToShow;
        if (currentCategory === 'all') {
            // For "All Menu", use pagination
            itemsToShow = allItems.slice(0, visibleItems);

        } else {
            // For individual categories, show all items
            itemsToShow = allItems;
            viewMoreBtn.style.display = 'none';
        }

        // Ensure visibleItems matches current screen size
        updateVisibleItems();
        // Update view more button based on current state
        if (currentCategory === 'all') {
            if (allItems.length > visibleItems) {
                viewMoreBtn.style.display = 'block';
                viewMoreBtn.textContent = 'View More';
            } else if (allItems.length > 0) {
                viewMoreBtn.style.display = 'block';
                viewMoreBtn.textContent = 'Show Less';
            } else {
                viewMoreBtn.style.display = 'none';
            }
        } else {
            viewMoreBtn.style.display = 'none';
        }

        if (itemsToShow.length === 0) {
            menuGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">No items found in this category.</p>';
            return;
        }

        itemsToShow.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-card';

            const priceDisplay = typeof item.price === 'number' ? `₹${item.price}` : item.price;
            const vegBadgeClass = item.isVeg ? 'veg' : 'non-veg';
            const vegBadgeText = item.isVeg ? 'Veg' : 'Non-Veg';

            const categoryNameFormatted = item.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

            card.innerHTML = `
                <div class="card-image-placeholder">
                    ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ''}
                </div>
                <div class="card-content">
                    <div class="card-header">
                        <h3>${item.name}</h3>
                        <span class="card-price">${priceDisplay}</span>
                    </div>
                    ${item.description ? `<p class="card-description">${item.description}</p>` : ''}
                    <div class="card-badges">
                        <span class="badge ${vegBadgeClass}">${vegBadgeText}</span>
                        <span class="badge">${categoryNameFormatted}</span>
                    </div>
                    <div class="card-actions">
                        <div class="quantity-control">
                            <button class="qty-btn minus">-</button>
                            <span class="qty-val">1</span>
                            <button class="qty-btn plus">+</button>
                        </div>
                        <button class="add-to-cart-btn">
                            <i class="fas fa-shopping-cart"></i> Add to cart
                        </button>
                    </div>
                </div>
            `;

            // Quantity buttons logic
            const minusBtn = card.querySelector('.minus');
            const plusBtn = card.querySelector('.plus');
            const qtyVal = card.querySelector('.qty-val');

            if (minusBtn && plusBtn && qtyVal) {
                minusBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    let current = parseInt(qtyVal.textContent);
                    if (current > 1) {
                        qtyVal.textContent = current - 1;
                    }
                });

                plusBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    let current = parseInt(qtyVal.textContent);
                    qtyVal.textContent = current + 1;
                });
            }

            // Add to cart click
            const addToCartBtn = card.querySelector('.add-to-cart-btn');
            if (addToCartBtn) {
                addToCartBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    alert(`Added ${qtyVal.textContent} x ${item.name} to cart!`);
                });
            }

            menuGrid.appendChild(card);
        });
    }

    // Event listener for view more button
    viewMoreBtn.addEventListener('click', () => {
        if (currentCategory === 'all') {
            // For "All Menu", implement pagination
            if (visibleItems < allItems.length) {
                // Show more items
                visibleItems += detectScreenSize();
                renderMenu();
            } else {
                // Show less items (reset to initial)
                visibleItems = detectScreenSize();
                viewMoreBtn.textContent = 'View More';
                renderMenu();
            }
        }
    });

    // Filter event listeners
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-category');
            // Reset visible items when changing category
            visibleItems = detectScreenSize();
            renderMenu();
        });
    });

    // Sort event listener
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderMenu();
        });
    }

    // Initial render
    renderMenu();
});
