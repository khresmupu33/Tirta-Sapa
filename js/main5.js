// Ambil elemen dengan id "nav-check" dan elemen navigasi
const navCheck = document.getElementById("nav-check");
const navMenu = document.querySelector("nav ul"); // Navigasi utama

// Fungsi untuk membuka navigasi dengan animasi
function openNav() {
    navMenu.style.left = "0"; // Menu muncul
    navMenu.style.transition = "left 0.3s ease-in-out"; // Tambahkan animasi
}

// Fungsi untuk menutup navigasi dengan animasi
function closeNav() {
    navMenu.style.left = "-100%"; // Menu tersembunyi
    navMenu.style.transition = "left 0.3s ease-in-out"; // Tambahkan animasi
}

// Event listener untuk menutup navigasi jika klik di luar menu
document.addEventListener("click", (event) => {
    const isClickInsideNav = navMenu.contains(event.target) || navCheck.contains(event.target);
    if (!isClickInsideNav && navCheck.checked) {
        closeNav();
        navCheck.checked = false; // Uncheck checkbox
    }
});

// Event listener untuk toggle navigasi saat checkbox berubah
navCheck.addEventListener("change", () => {
    if (navCheck.checked) {
        openNav();
    } else {
        closeNav();
    }
});


function scrollFeatureCards(dir) {
  const el = document.getElementById("featureCardsScroll");
  if (el) {
    el.scrollBy({
      left: dir * 320,
      behavior: "smooth"
    });
  }
}


function scrollVideoSlider(dir) {
  const el = document.getElementById("videoSlider");
  if (el) {
    el.scrollBy({
      left: dir * 320,
      behavior: "smooth"
    });
  }
}
