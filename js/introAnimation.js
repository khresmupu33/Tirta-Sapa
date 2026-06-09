let intro = document.querySelector('.intro');
let logosSpan = document.querySelectorAll('.logos');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logosSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400); // Animasi logo
        });

        setTimeout(() => {
            logosSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade'); // Animasi logo selesai
                }, (idx + 1) * 50);
            });
        }, 10000);  // Tunggu logo selesai animasi

        // Menambahkan transisi latar belakang menjadi putih
        setTimeout(() => {
            intro.classList.add('white-out'); // Background berubah jadi putih
        }, 2300);

        // Mulai pergeseran elemen intro ke atas setelah background berubah
        setTimeout(() => {
            intro.classList.add('slide-up'); // Intro bergerak ke atas
        }, 3000);

    }, 100);  // Waktu delay untuk memastikan animasi logo berjalan dengan baik

    // Halaman berpindah setelah animasi selesai
    setTimeout(function() {
        window.location.href = "home.html"; // Pindah ke halaman home
    }, 5000);  // Tunggu hingga intro selesai animasi dan berpindah halaman
});
