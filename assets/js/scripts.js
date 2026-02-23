var body = document.querySelector('body');
var header = document.querySelector('.header'); // Ensure your header has this class
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');
var overlay = document.querySelector('.sidebar-overlay'); // Dark background behind sidebar

// 1. Sidebar Toggle (Open/Close)
menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active');
    body.classList.toggle('lock-scroll');
    if (overlay) overlay.classList.toggle('is-visible');
};

// 2. Sticky Header Transition (Transparent to Solid)
// Mimics the Madhuvan look
window.onscroll = function() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

// 3. Accordion Logic for Sub-links
// Mimics the "Ongoing/Completed" nested lists
var accordionToggles = document.querySelectorAll('.toggle-icon');

accordionToggles.forEach(function(icon) {
    icon.onclick = function(e) {
        e.preventDefault();
        var parentLi = icon.closest('li');
        var submenu = parentLi.querySelector('.sidebar-submenu');

        // Toggle the 'active' class to rotate the arrow and show/hide menu
        if (parentLi.classList.contains('active')) {
            parentLi.classList.remove('active');
            submenu.style.display = 'none';
        } else {
            parentLi.classList.add('active');
            submenu.style.display = 'block';
        }
    };
});

document.querySelectorAll('.toggle-icon-mobile-menu').forEach(function(icon) {
    icon.onclick = function(e) {
        e.preventDefault();
        var parentLi = icon.closest('li');
        var submenu = parentLi.querySelector('.sidebar-submenu');
        
        parentLi.classList.toggle('active');
        if (submenu) {
            submenu.style.display = (submenu.style.display === 'none') ? 'block' : 'none';
        }
    };
});