const dropdownTriggers=document.querySelectorAll('.dropdown > a');

dropdownTriggers.forEach((trigger) => {
    trigger.addEventListener('click',(e) => {
        e.preventDefault();
        const menu =trigger.nextElementSibling;
        menu.classList.toggle('open');
    });
});
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
    const menu = dropdown.querySelector('.dropdown-menu');

    dropdown.addEventListener('mouseenter', () => {
        dropdowns.forEach((d) => d.querySelector('.dropdown-menu').classList.remove('open'));
        menu.classList.add('open');
    });

    dropdown.addEventListener('mouseleave', () => {
        menu.classList.remove('open');
    });
});
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    } 
});

// New code — add this below
const setActiveNav = () => {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.classList.remove("active");
    });

    const directLinks = document.querySelectorAll(".nav-links > a");
    directLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const dropdowns = document.querySelectorAll('.dropdown');

  // Toggle main mobile menu
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Handle dropdown toggles (Services, Insights) on mobile
  dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('a');

    trigger.addEventListener('click', (e) => {
      // Only intercept on mobile widths — desktop uses hover via CSS
      if (window.innerWidth <= 768) {
        e.preventDefault();
        e.stopPropagation();

        // Close any other open dropdowns first
        dropdowns.forEach(d => {
          if (d !== dropdown) d.classList.remove('active');
        });

        dropdown.classList.toggle('active');
      }
    });
  });

  // Close menu when a real link (not a dropdown trigger) is clicked
  navLinks.querySelectorAll('a:not([href="#"])').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
      dropdowns.forEach(d => d.classList.remove('active'));
    });
  });

  // Close menu when clicking outside of it
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
      dropdowns.forEach(d => d.classList.remove('active'));
    }
  });

  // Reset state on resize to desktop (prevents stuck mobile state)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
      dropdowns.forEach(d => d.classList.remove('active'));
    }
  });
});
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach((dropdown) => {
        const trigger = dropdown.querySelector("a");
        const subLinks = dropdown.querySelectorAll(".dropdown-menu a");
        let dropdownHasActiveChild = false;

        subLinks.forEach((subLink) => {
            if (subLink.getAttribute("href") === currentPath) {
                subLink.classList.add("active");
                dropdownHasActiveChild = true;
            }
        });

        if (dropdownHasActiveChild) {
            trigger.classList.add("active");
        }
    });
};

setActiveNav();

document.querySelectorAll('.sticky-button').forEach((btn) => {
    btn.addEventListener('click', () => {
        window.location.href = 'contact.html#contact';
    });
});

document.querySelectorAll('.explore-service-btn').forEach(button=>{
  button.addEventListener('click', ()=>{
    window.location.href='about.html#services';
    });
});

document.querySelectorAll('.talk-btn').forEach(button=>{
  button.addEventListener('click', ()=>{
    window.location.href='contact.html#contact';
    });
});

document.querySelectorAll('.message-btn').forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'mailto:hello@radzdesigns.com?subject=Project%20Enquiry';
    });
});

document.querySelectorAll('.portfolio-btn').forEach(button => {
    button.addEventListener('click', () => {
         window.open('https://iris-studios.online/#work-proof', '_blank');;
    });
});

document.querySelectorAll('.cx-learn-more-btn').forEach(button=>{
  button.addEventListener('click', ()=>{
    window.location.href='cx.html#cx-intro';
    });
});

document.querySelectorAll('.home-btn').forEach(button=>{
  button.addEventListener('click', ()=>{
    window.location.href='index.html';
    });
});

document.querySelectorAll('.test-btn').forEach(button=>{
  button.addEventListener('click', ()=>{
    window.location.href='../../../contact.html#contact';
    });
});
const tooltip = document.getElementById('site-tooltip');
document.addEventListener('mouseover', (e) => {
    // STOP the function if the screen is mobile (less than 768px)
    if (window.innerWidth < 1024) return;
    if (!window.matchMedia('(hover: hover)').matches) return;
    const target = e.target.closest('[data-tooltip]');
    if (target) {
        const message = target.getAttribute('data-tooltip');
        tooltip.textContent = message;
        tooltip.style.display = 'block';
    }
});
document.addEventListener('mousemove', (e) => {
    // Only move if the tooltip is actually visible
    if (tooltip.style.display === 'block') {
        tooltip.style.left = e.pageX + 15 + 'px';
        tooltip.style.top = e.pageY + 15 + 'px';
    }
});

document.addEventListener('mouseout', (e) => {
    // Always allow hiding to ensure it doesn't get "stuck" visible
    if (e.target.closest('[data-tooltip]')) {
        tooltip.style.display = 'none';
    }
});
document.querySelectorAll('.what-is-cx, .why-cx').forEach((box) => {
    const heading = box.querySelector('.subsection-heading');
    heading.addEventListener('click', () => {
        box.classList.toggle('active');
    });
});
document.querySelectorAll('.web-service-buyer, .web-service-reason').forEach((box) => {
    const subheading = box.querySelector('.subsection-subheading');
    subheading.addEventListener('click', () => {
        box.classList.toggle('active');
    });
});
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach((el) => el.classList.remove('active'));
        if (!isActive) {
            item.classList.add('active');
        }
    });
});
document.querySelectorAll('.segment-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
        const parent = btn.closest('.capability-segment');
        parent.classList.toggle('active');
    });
});

const revealSections = document.querySelectorAll('section');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, {
    threshold: 0.15
});

revealSections.forEach((section) => revealObserver.observe(section));

const form = document.querySelector('form');
if(form){
// We add 'async' here so we can use 'await' inside the function
    form.addEventListener('submit', async function(e) {
        e.preventDefault(); // Stops the page from refreshing immediately
        
        let isValid = true;

        // --- 1. VALIDATION LOGIC (Your Gatekeeper) ---
        // Clear previous errors
        document.querySelectorAll('.error-message').forEach(msg => msg.remove());
        document.querySelectorAll('.input-error').forEach(input => input.classList.remove('input-error'));

        // Name validation
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            showError(name, 'Please enter your name');
            isValid = false;
        }

        // Email validation
        const email = document.getElementById('email');
        if (email.value.trim() === '') {
            showError(email, 'Please enter your email');
            isValid = false;
        } else if (!email.validity.valid) {
            showError(email, 'Please enter a valid email');
            isValid = false;
        }
        const message = document.getElementById('message');
        if (message.value.trim() === '') {
            showError(message, 'Please enter your message');
            isValid = false;
        }

        // --- 2. ASYNC SUBMISSION LOGIC (The Advanced Part) ---
        if (isValid) {
            // Prepare the data to be sent
            const formData = new FormData(form);

            try {
                // 'await' tells the browser: "Pause here until the server answers"
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Success path
                    alert('Form submitted successfully!'); 
                    window.location.href = 'thank-you.html';
                    // In a real funnel, you'd use: window.location.href = "thank-you.html";
                } else {
                    // Server-side error (e.g., Formspree is down)
                    alert('Something went wrong. Please try again.');
                }
            } catch (error) {
                // Network error (e.g., User lost internet connection)
                alert('Network error. Please check your connection.');
            }
        }
    });
         // Error display function
    function showError(input, message) {
    input.classList.add('input-error');
    const error = document.createElement('span');
    error.classList.add('error-message');
    error.textContent = message;
    input.parentNode.insertBefore(error, input.nextSibling);
}
}
