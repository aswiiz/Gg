// 1. Initialize the professional scroll animations (AOS)
if (typeof AOS !== 'undefined') {
  AOS.init({
    once: true, 
    offset: 50, 
  });
}

// 2. Initialize Lottie Animation in Hero Section
if (typeof lottie !== 'undefined') {
  lottie.loadAnimation({
    container: document.getElementById('lottie-hero-container'), 
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json' // Beautiful tech/developer animation
  });
}

// 3. Initialize Counter Animation on Scroll
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  const speed = 200; // Lower number = faster counting

  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.parentElement.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };

  // Use Intersection Observer to only animate when scrolling into view
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

  const statsSection = document.querySelector('.stats-grid');
  if(statsSection) {
      counterObserver.observe(statsSection);
  }
});

// Placeholder for Newsletter subscription functionality
function subscribeNewsletter() {
  const emailInput = document.getElementById('nlEmail');
  const successMessage = document.getElementById('nlSuccess');
  
  if(emailInput && emailInput.value.trim() !== "") {
    if(successMessage) {
      successMessage.style.display = 'block';
      emailInput.value = '';
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 4000);
    }
  }
}

