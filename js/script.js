// Ambil elemen h1
const h1Element = document.querySelector(".typewriter h1");
const text = h1Element.textContent; // Ambil teks asli
h1Element.textContent = ""; // Kosongkan elemen untuk memulai efek ketikan

let index = 0; // Indeks karakter

// Fungsi untuk mengetik teks
function type() {
    if (index < text.length) {
        h1Element.textContent += text.charAt(index); // Tambahkan satu karakter
        index++;
        setTimeout(type, 100); // Atur kecepatan mengetik (100ms per karakter)
    }
}

// Panggil fungsi ketikan
type();

// Ambil elemen h3
const h3Element = document.querySelector(".typewriter h3");
const text = h1Element.textContent; // Ambil teks asli
h3Element.textContent = ""; // Kosongkan elemen untuk memulai efek ketikan

let index = 0; // Indeks karakter

// Fungsi untuk mengetik teks
function type() {
    if (index < text.length) {
        h1Element.textContent += text.charAt(index); // Tambahkan satu karakter
        index++;
        setTimeout(type, 100); // Atur kecepatan mengetik (100ms per karakter)
    }
}

// Panggil fungsi ketikan
type();
