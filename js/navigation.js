// Function to toggle dropdown visibility
function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);

  if (!dropdown) {
    console.error(`Dropdown dengan ID ${dropdownId} tidak ditemukan.`);
    return;
  }

  // Toggle the clicked dropdown
  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
  } else {
    // Hide all other dropdowns
    document.querySelectorAll('.dropdown-content').forEach(content => {
      content.style.display = 'none';
    });

    // Show the selected dropdown
    dropdown.style.display = 'block';
  }
}

// Close dropdowns when clicking outside
window.addEventListener('click', function (event) {
  const dropdownBtns = document.querySelectorAll('.dropdown-btn');
  let isDropdownBtn = false;

  dropdownBtns.forEach(btn => {
    if (event.target === btn) {
      isDropdownBtn = true;
    }
  });

  if (!isDropdownBtn) {
    document.querySelectorAll('.dropdown-content').forEach(content => {
      content.style.display = 'none';
    });
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.nav');

  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > 100) {
      // Jika user scroll turun lebih dari 100px
      nav.classList.add('fixed-nav');
    } else {
      nav.classList.remove('fixed-nav');
    }
  });
});

 