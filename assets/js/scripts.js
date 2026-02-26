document.getElementById("year").textContent = new Date().getFullYear();

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

document.querySelectorAll('.js-toggle').forEach(btn => {
  btn.onclick = function(e) {
    const parentLi = this.parentElement;
    const submenu = parentLi.querySelector('.sidebar-submenu');
    
    if (submenu) {
      e.preventDefault();
      parentLi.classList.toggle('active');
      submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
    }
  };
});

// Sync close button inside menu with main hamburger
document.getElementById('close-menu-internal').onclick = function() {
  document.getElementById('toggle-main-menu-mobile').click();
};