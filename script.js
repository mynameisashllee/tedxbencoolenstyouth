// Toggle visibility of synopsis on speaker cards
function toggleSynopsis(element) {
  const synopsis = element.querySelector('.synopsis');
  if (synopsis.classList.contains('hidden')) {
      synopsis.classList.remove('hidden');
  } else {
      synopsis.classList.add('hidden');
  }
  element.classList.toggle('expanded');
}

// Scroll to the top of the page
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show the scroll-to-top button when scrolling past the header
document.addEventListener('scroll', () => {
  const scrollToTopButton = document.getElementById('scrollToTop');
  const header = document.querySelector('header');
  if (window.scrollY > header.offsetHeight) {
      scrollToTopButton.classList.add('visible');
  } else {
      scrollToTopButton.classList.remove('visible');
  }
});

const targetDate = new Date('January 1, 2026 00:00:00').getTime();

// Update the countdown every second
const interval = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();

    // Find the distance between now and the target date
    const distance = targetDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the HTML with the countdown values
    document.getElementById('days').children[0].textContent = days < 10 ? '0' + days : days;
    document.getElementById('hours').children[0].textContent = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').children[0].textContent = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').children[0].textContent = seconds < 10 ? '0' + seconds : seconds;
}, 1000);
