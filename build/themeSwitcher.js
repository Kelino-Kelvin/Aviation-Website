// I kind hope this works :)

const root = document.documentElement;
const toggleButtons = document.querySelectorAll('.toggle-theme');

// Load saved theme (if any)
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
} else {
  root.setAttribute('data-theme', 'dark');
}

// toggle theme function
function toggleTheme() {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';

  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);

  updateButtons(next);
}

// Update button icons/states
function updateButtons(theme) {
  toggleButtons.forEach(btn => {
    btn.setAttribute('data-theme-active', theme);
  });
}

// Button Triggers - pew pew
toggleButtons.forEach(btn => {
  btn.addEventListener('click', toggleTheme);
});

// Initialize button state on page load
updateButtons(savedTheme || 'dark');

