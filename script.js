// Premium Interactive JavaScript - Pre-Landing Platform

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Header Scroll Shadow Transition
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Sticky Mobile CTA Banner Behavior
    const stickyCta = document.querySelector('.sticky-mobile-cta');
    const heroBtn = document.querySelector('.hero-actions');
    
    if (stickyCta && heroBtn) {
        window.addEventListener('scroll', () => {
            const heroBottom = heroBtn.getBoundingClientRect().bottom + window.scrollY;
            if (window.scrollY > heroBottom) {
                stickyCta.classList.add('visible');
            } else {
                stickyCta.classList.remove('visible');
            }
        });
    }

    // 3. Scroll Reveal Animation (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target); // Animate once
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(el => revealOnScroll.observe(el));

    // 4. Live Leaderboard Activity Simulation
    const leaderboardItems = document.querySelectorAll('.leaderboard-item');
    const firstNames = ['Markus', 'Elena', 'Julian', 'Sophia', 'Lukas', 'Laura', 'Maximilian', 'Sarah', 'Tobias', 'Emma'];
    const codes = ['X', 'Alpha', 'Beta', 'Omega', 'V', 'Z', 'Prime', 'Zero', 'Gamer', 'Pro'];
    
    function generateMockUser() {
        const name = firstNames[Math.floor(Math.random() * firstNames.length)];
        const code = codes[Math.floor(Math.random() * codes.length)];
        return `${name}_${code}`;
    }

    if (leaderboardItems.length > 0) {
        setInterval(() => {
            // Select a random row to update
            const randomIndex = Math.floor(Math.random() * leaderboardItems.length);
            const item = leaderboardItems[randomIndex];
            
            // Apply scale animation out
            item.style.transform = 'scale(0.96)';
            item.style.opacity = '0.5';
            
            setTimeout(() => {
                const nameEl = item.querySelector('.user-info h5');
                const pointsEl = item.querySelector('.user-points');
                
                // Set new random values
                nameEl.textContent = generateMockUser();
                
                const currentPoints = parseInt(pointsEl.textContent.replace('+', '').replace(' pts', '').replace('.', ''), 10);
                const addedPoints = Math.floor(Math.random() * 400) + 100;
                const newPoints = currentPoints + addedPoints;
                
                pointsEl.textContent = `+${newPoints.toLocaleString('de-DE')} pts`;
                pointsEl.style.color = '#10B981'; // Green accent flash
                
                // Animate back in
                item.style.transform = 'scale(1)';
                item.style.opacity = '1';
                
                setTimeout(() => {
                    pointsEl.style.color = ''; // Restore default
                }, 1000);
            }, 300);
            
        }, 4000);
    }

    // 5. Interactive Reels Mockup Simulation (Phone Mockup)
    const slotItems = document.querySelectorAll('.slot-item');
    const slotSymbols = [
        // Lightning SVG path
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #3B82F6;"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
        // Shield SVG path
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #10B981;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
        // Gem/Diamond SVG path
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #8B5CF6;"><path d="M6 3h12l4 6-10 13L2 9z"></path></svg>`,
        // Star SVG path
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #F59E0B;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
        // Activity SVG path
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #EC4899;"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`
    ];

    if (slotItems.length > 0) {
        // Spin trigger or automatic rolling
        setInterval(() => {
            const luckyIndex = Math.floor(Math.random() * slotItems.length);
            const chosenItem = slotItems[luckyIndex];
            
            // Trigger animation spin class
            chosenItem.style.transform = 'scale(0.85)';
            chosenItem.style.opacity = '0.3';
            
            setTimeout(() => {
                // Change SVGs randomly
                chosenItem.innerHTML = slotSymbols[Math.floor(Math.random() * slotSymbols.length)];
                chosenItem.style.transform = 'scale(1.05)';
                chosenItem.style.opacity = '1';
                
                // Highlight winning combinations subtly
                if (Math.random() > 0.4) {
                    chosenItem.classList.add('highlighted');
                    setTimeout(() => {
                        chosenItem.classList.remove('highlighted');
                        chosenItem.style.transform = 'scale(1)';
                    }, 800);
                } else {
                    setTimeout(() => {
                        chosenItem.style.transform = 'scale(1)';
                    }, 200);
                }
            }, 300);
        }, 2500);
    }

    // 6. Hamburger Mobile Menu Toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('open');
            mobileMenu.classList.toggle('open');
            body.classList.toggle('menu-open');
        });

        // Close menu when clicking on a link
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('open');
                mobileMenu.classList.remove('open');
                body.classList.remove('menu-open');
            });
        });
    }
});
