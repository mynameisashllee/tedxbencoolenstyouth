function toggleSynopsis(element) {
    const synopsis = element.querySelector('.synopsis');
    if (synopsis.classList.contains('hidden')) {
        synopsis.classList.remove('hidden');
    } else {
        synopsis.classList.add('hidden');
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('scroll', () => {
    const scrollToTopButton = document.getElementById('scrollToTop');
    const header = document.querySelector('header');
    if (window.scrollY > header.offsetHeight) {
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
});
