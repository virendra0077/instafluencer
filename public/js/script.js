(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  // Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Add no-transition class to prevent flash on load
  document.body.classList.add('no-transition');
  
  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  // Remove no-transition class after a brief delay
  setTimeout(() => {
    document.body.classList.remove('no-transition');
  }, 100);
  
  // Create theme toggle button if it doesn't exist
  createThemeToggle();
  
  // Update toggle button state
  updateToggleButton(currentTheme);
});

function createThemeToggle() {
  // Check if toggle already exists
  if (document.querySelector('.theme-toggle')) return;
  
  // Find navbar nav section
  const navbarNav = document.querySelector('.navbar-nav.ms-auto');
  if (!navbarNav) return;
  
  // Create toggle button
  const toggleButton = document.createElement('button');
  toggleButton.className = 'theme-toggle nav-link';
  toggleButton.setAttribute('aria-label', 'Toggle theme');
  toggleButton.innerHTML = `
    <i class="fas fa-moon theme-icon-dark"></i>
    <i class="fas fa-sun theme-icon-light" style="display: none;"></i>
  `;
  
  // Add click event
  toggleButton.addEventListener('click', toggleTheme);
  
  // Insert before login/logout buttons
  navbarNav.insertBefore(toggleButton, navbarNav.firstChild);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  updateToggleButton(newTheme);
}

function updateToggleButton(theme) {
  const darkIcon = document.querySelector('.theme-icon-dark');
  const lightIcon = document.querySelector('.theme-icon-light');
  
  if (!darkIcon || !lightIcon) return;
  
  if (theme === 'dark') {
    darkIcon.style.display = 'none';
    lightIcon.style.display = 'inline';
  } else {
    darkIcon.style.display = 'inline';
    lightIcon.style.display = 'none';
  }
}

// Existing script.js functionality (if any) below
// Add your other JavaScript here