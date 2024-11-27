function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu.classList.contains('hidden')) {
        navMenu.classList.remove('hidden');
    } else {
        navMenu.classList.add('hidden');
    }
}
