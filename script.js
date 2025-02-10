function toggleMenu() {
  const menuLinks = document.getElementById("menu-links");
  menuLinks.classList.toggle("active");
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

const targetDate = new Date('March 22, 2025 14:00:00').getTime();

const interval = setInterval(function() {
    const now = new Date().getTime();

    // Find the distance between now and the target date
    const distance = targetDate - now;

    // Time calculations for days, hours, minutes, and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days < 0) {
      days = 0;
    }
    if (hours < 0) {
      hours = 0;
    }
    if (minutes < 0) {
      minutes = 0;
    }
    if (seconds < 0) {
      seconds = 0;
    }
    

    // Update the HTML with the countdown values
    document.getElementById('days').children[0].textContent = days < 10 ? '0' + days : days;
    document.getElementById('hours').children[0].textContent = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').children[0].textContent = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').children[0].textContent = seconds < 10 ? '0' + seconds : seconds;
}, 1000);

let i = 0;
let isDeleting = false; // Tracks if we are deleting text
let txt = 'Muse'; // The text to type and delete
let speed = 200; // Typing speed
let deleteSpeed = 200; // Deleting speed
let pauseTime = 1000; // Pause before deleting/typing again

function typeWriter() {
  const typedTextElement = document.getElementById("typedtext");

  if (!isDeleting && i <= txt.length) {
    // Typing phase
    typedTextElement.innerHTML = txt.slice(0, i);
    i++;
    setTimeout(typeWriter, speed);
  } else if (isDeleting && i >= 0) {
    // Deleting phase
    typedTextElement.innerHTML = txt.slice(0, i);
    i--;
    setTimeout(typeWriter, deleteSpeed);
  } else if (!isDeleting && i > txt.length) {
    // Pause before deleting
    isDeleting = true;
    setTimeout(typeWriter, pauseTime);
  } else if (isDeleting && i < 0) {
    // Reset and start typing again
    isDeleting = false;
    i = 0;
    setTimeout(typeWriter, pauseTime);
  }
}

typeWriter();

function toggleInfo(logoNumber) {
  const selectedBox = document.getElementById(`info-box-${logoNumber}`);

  // Toggle the visibility of the clicked info box
  if (selectedBox.style.display === 'block') {
      selectedBox.style.display = 'none';
  } else {
      // Hide all other boxes first
      document.querySelectorAll('.info-box').forEach(box => box.style.display = 'none');
      selectedBox.style.display = 'block';
  }
}

function openModal(name, topic, imgSrc, bio, description) {
  document.getElementById('modalName').innerText = name;
  document.getElementById('modalTopic').innerText = topic;
  document.getElementById('modalImage').src = imgSrc;
  document.getElementById('modalBio').textContent = bio;
  document.getElementById('modalDescription').textContent = description;
  document.getElementById('speakerModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('speakerModal').style.display = 'none';
}

function toggleContent(type) {
  let bio = document.getElementById('modalBio');
  let description = document.getElementById('modalDescription');
  
  if (type === 'bio') {
      bio.classList.toggle('hidden');
      description.classList.add('hidden');
  } else {
      description.classList.toggle('hidden');
      bio.classList.add('hidden');
  }
}