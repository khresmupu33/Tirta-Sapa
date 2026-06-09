// Ambil semua elemen konten
const contents = document.querySelectorAll('.content');

// Fungsi untuk memeriksa apakah elemen berada dalam viewport
function checkScroll() {
    const triggerBottom = window.innerHeight / 5 * 4; // 80% dari viewport

    contents.forEach(content => {
        const box = content.getBoundingClientRect(); // Mendapatkan posisi elemen

        if (box.top < triggerBottom) {
            content.classList.add('show'); // Tambahkan kelas show
        } else {
            content.classList.remove('show'); // Hapus kelas show jika keluar dari viewport
        }
    });
}

// Periksa saat pengguna menggulir
window.addEventListener('scroll', checkScroll);

// Periksa saat halaman pertama kali dimuat
checkScroll();