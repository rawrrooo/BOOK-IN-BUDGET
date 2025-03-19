document.addEventListener('DOMContentLoaded', (event) => {
    // Handling the 'Let's get booking!' button click
    const bookingButton = document.querySelector('.bt a');
    bookingButton.addEventListener('click', (event) => {
      event.preventDefault();
      alert("Let's get booking!");
      window.location.href = bookingButton.getAttribute('href');
    });
  
    const locationSelect = document.querySelector('.selectoption');
    const budgetSelect = document.querySelector('.selectoption1');
  
    locationSelect.addEventListener('change', () => {
      console.log(`Selected location: ${locationSelect.value}`);
    });
  
    budgetSelect.addEventListener('change', () => {
      console.log(`Selected budget: ${budgetSelect.value}`);
    });
  
    // Adding smooth scroll to navbar links
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Fix navbar at the top of the page when scrolling
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    });
  });
  