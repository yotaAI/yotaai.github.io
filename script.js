
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


// Get the button
const goTopBtn = document.getElementById("goTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        goTopBtn.style.display = "block"; // Show the button
    } else {
        goTopBtn.style.display = "none"; // Hide the button
    }
}

// When the user clicks on the button, scroll to the top of the document
goTopBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior (jumping directly)
    scrollToTop();
});

function scrollToTop() {
    // For a smooth scroll effect
    window.scrollTo({
        top: 0,
        behavior: "smooth" // This makes the scroll smooth
    });
}