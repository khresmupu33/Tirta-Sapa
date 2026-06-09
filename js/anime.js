document.addEventListener('DOMContentLoaded', function () {
  // Pilih semua elemen yang memiliki atribut href
  document.querySelectorAll('[href]').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault(); // Mencegah pindah halaman langsung

      const targetUrl = button.getAttribute('href'); // Ambil URL tujuan
      if (targetUrl) {
        // Tambahkan kelas 'animating' pada body untuk memulai animasi latar belakang
        document.body.classList.add('animating');

        // Tampilkan overlay
        const overlay = document.getElementById('overlay');
        overlay.classList.add('overlay-visible');

        // Tunggu animasi selesai sebelum pindah halaman
        setTimeout(() => {
          window.location.href = targetUrl; // Pindahkan halaman setelah animasi selesai
        }, 1000); // Waktu delay yang sama dengan durasi animasi (1 detik)
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  // Pilih elemen label dengan id 'logo-label'
  const logoLabel = document.getElementById('logo-label');

  logoLabel.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah pindah halaman langsung

    // Tambahkan kelas 'animating' pada body untuk memulai animasi latar belakang
    document.body.classList.add('animating');

    // Tampilkan overlay
    const overlay = document.getElementById('overlay');
    overlay.classList.add('overlay-visible');

    // Tunggu animasi selesai sebelum pindah halaman
    const targetUrl = 'home.html'; // Halaman tujuan
    if (targetUrl) {
      setTimeout(() => {
        window.location.href = targetUrl; // Pindahkan halaman setelah animasi selesai
      }, 1000); // Waktu delay yang sama dengan durasi animasi (1 detik)
    }
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const mainContents = document.querySelectorAll(".main-content, .main-content-2, .main-content-3, .main-content-4");

  const observerOptions = {
    threshold: 0.5, // Elemen mulai bereaksi ketika 50% terlihat
  };

  let lastScrollY = window.scrollY; // Posisi scroll terakhir

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const isScrollingDown = window.scrollY > lastScrollY;

      if (entry.isIntersecting) {
        // Jika elemen terlihat, tambahkan kelas "show"
        entry.target.classList.add("show");
        entry.target.classList.remove("hide");

        // Munculkan elemen fitur satu per satu jika ada
        const features = entry.target.querySelectorAll(".features > *"); // Ambil semua elemen anak di dalam .features
        if (features.length > 0) {
          features.forEach((feature, index) => {
            setTimeout(() => {
              feature.classList.add("show");
              feature.classList.remove("hide");
            }, index * 200); // Jedanya 200ms
          });
        }
      } else if (!isScrollingDown) {
        // Jika menggulir ke atas, sembunyikan elemen lebih cepat
        entry.target.classList.remove("show");
        entry.target.classList.add("hide");

        // Sembunyikan elemen fitur jika keluar dari viewport
        const features = entry.target.querySelectorAll(".features > *");
        if (features.length > 0) {
          features.forEach((feature) => {
            feature.classList.remove("show");
            feature.classList.add("hide");
          });
        }
      }
    });

    // Update posisi scroll terakhir
    lastScrollY = window.scrollY;
  }, observerOptions);

  // Awalnya sembunyikan semua elemen
  mainContents.forEach((content) => {
    content.classList.add("hide");
    observer.observe(content);
  });
});