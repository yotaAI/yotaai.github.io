
const toggleBtn = document.getElementById('toggle-theme');
const icon = document.getElementById('theme-icon');
const body = document.body;

toggleBtn.addEventListener('click', () => {
// Toggle dark mode class
body.classList.toggle('dark-mode');

// Toggle between sun and moon icons
if (icon.classList.contains('fa-sun')) {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
} else {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}
});



function openModal(id) {
    document.getElementById(id).style.display = "block";
  }

  function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }

  // Close modal when clicking outside
  window.onclick = function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  };