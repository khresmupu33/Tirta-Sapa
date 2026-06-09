// Ambil elemen yang diperlukan
const sidebarToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const sidebarList = document.querySelector(".sidebar ul");

// Debugging untuk memeriksa elemen
console.log("Sidebar Element:", sidebar);
console.log("Sidebar Toggle Element:", sidebarToggle);
console.log("Sidebar List (ul):", sidebarList);

// Fungsi untuk membuka sidebar
function openSidebar() {
    sidebar.classList.add("active"); // Tambahkan kelas aktif
    sidebar.style.right = "0"; // Sidebar muncul
    console.log("Sidebar opened"); // Debugging: Sidebar dibuka
}

// Fungsi untuk menutup sidebar
function closeSidebar() {
    sidebar.classList.remove("active"); // Hapus kelas aktif
    sidebar.style.right = "-100%"; // Sidebar tersembunyi
    console.log("Sidebar closed"); // Debugging: Sidebar ditutup
}

// Event listener untuk toggle sidebar
sidebarToggle.addEventListener("click", (e) => {
    e.stopPropagation(); // Mencegah klik pada tombol memicu dokumen
    console.log("Sidebar Toggle Clicked"); // Debugging: Tombol diklik
    if (sidebar.classList.contains("active")) {
        closeSidebar(); // Tutup sidebar jika sudah aktif
    } else {
        openSidebar(); // Buka sidebar jika tidak aktif
    }
});

// Tutup sidebar jika klik di luar area sidebar
document.addEventListener("click", (event) => {
    const isClickInsideSidebar =
        sidebar.contains(event.target) || sidebarToggle.contains(event.target);
    if (!isClickInsideSidebar && sidebar.classList.contains("active")) {
        closeSidebar();
        console.log("Clicked outside sidebar, sidebar closed"); // Debugging
    }
});

// Debugging tambahan: Periksa jika elemen sidebar memiliki elemen ul dan li
if (sidebarList) {
    console.log("Sidebar contains a list:", sidebarList);
    const listItems = sidebarList.querySelectorAll("li");
    console.log(`Number of list items: ${listItems.length}`);
    // Debugging tambahan: List semua elemen li
    listItems.forEach((item, index) => {
        console.log(`List item ${index + 1}:`, item.textContent.trim());
    });
} else {
    console.log("Sidebar does not contain a list (ul element is missing)");
}
