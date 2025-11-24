// Configuration: REPLACE WITH YOUR NUMBER
const WHATSAPP_NUMBER = "919494793866"; 

function navigateTo(pageId) {
    // 1. Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // 2. Show the clicked page
    document.getElementById(pageId).classList.add('active');

    // 3. Update Bottom Nav
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    
    // Find the button that corresponds to this page (simple index matching)
    // Home=0, Gurus=1, Rates=2, About=3
    const map = { 'home': 0, 'astrologers': 1, 'rates': 2, 'about': 3 };
    if (navItems[map[pageId]]) {
        navItems[map[pageId]].classList.add('active');
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

function contactWhatsApp(message) {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}