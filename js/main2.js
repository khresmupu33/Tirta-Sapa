let currentVerticalSlide = 0;
let currentHorizontalSlides = [0, 0, 0];
const verticalSlides = document.querySelectorAll('.slide-container');
const horizontalSlides = [
  document.querySelectorAll('#vSlide1 .slide'),
  document.querySelectorAll('#vSlide2 .slide'),
  document.querySelectorAll('#vSlide3 .slide'),
];

const defaultSpeed = 1.0; // Kecepatan normal
const currentPlaybackRates = {}; // Menyimpan kecepatan untuk setiap video

// Initialize the first vertical slide and horizontal slide
verticalSlides[currentVerticalSlide].style.display = 'flex';
horizontalSlides[currentVerticalSlide][currentHorizontalSlides[currentVerticalSlide]].classList.add('active');

// Function to scroll through slides
function scrollSlide(direction) {
  if (direction === 'up') {
    currentVerticalSlide = (currentVerticalSlide - 1 + verticalSlides.length) % verticalSlides.length;
  } else if (direction === 'down') {
    currentVerticalSlide = (currentVerticalSlide + 1) % verticalSlides.length;
  } else if (direction === 'left') {
    currentHorizontalSlides[currentVerticalSlide] = (currentHorizontalSlides[currentVerticalSlide] - 1 + horizontalSlides[currentVerticalSlide].length) % horizontalSlides[currentVerticalSlide].length;
  } else if (direction === 'right') {
    currentHorizontalSlides[currentVerticalSlide] = (currentHorizontalSlides[currentVerticalSlide] + 1) % horizontalSlides[currentVerticalSlide].length;
  }

  // Show the selected vertical slide
  verticalSlides.forEach((slide, index) => {
    slide.style.display = index === currentVerticalSlide ? 'flex' : 'none';
  });

  // Show the current horizontal slide in the active vertical slide
  horizontalSlides[currentVerticalSlide].forEach((slide, index) => {
    slide.classList.remove('active');
  });
  horizontalSlides[currentVerticalSlide][currentHorizontalSlides[currentVerticalSlide]].classList.add('active');

  // Update button states
  updateButtonState();
}

// Function to update button states based on the current slide
function updateButtonState() {
  // Enable all buttons first
  const buttons = ['up-button', 'down-button', 'left-button', 'right-button'];
  buttons.forEach(buttonId => {
    const button = document.getElementById(buttonId);
    button.disabled = false;
    button.classList.remove('disabled'); // Remove disabled styling
  });

  // Set button states for specific slides
  if (currentVerticalSlide === 0) {
    // Slide utama (vSlide1) - Semua tombol aktif
  } else if (currentVerticalSlide === 1) {
    // Slide bawah (vSlide2)
    document.getElementById('down-button').disabled = true;
    document.getElementById('left-button').disabled = true;
    document.getElementById('right-button').disabled = true;

    // Add disabled styling
    document.getElementById('down-button').classList.add('disabled');
    document.getElementById('left-button').classList.add('disabled');
    document.getElementById('right-button').classList.add('disabled');
  } else if (currentVerticalSlide === 2) {
    // Slide atas (vSlide3)
    document.getElementById('up-button').disabled = true;
    document.getElementById('left-button').disabled = true;
    document.getElementById('right-button').disabled = true;

    // Add disabled styling
    document.getElementById('up-button').classList.add('disabled');
    document.getElementById('left-button').classList.add('disabled');
    document.getElementById('right-button').classList.add('disabled');
  }
}

// Function to change video speed
function changeSpeed(change) {
  const videoElements = document.querySelectorAll('video'); // Select all videos
  videoElements.forEach((video) => {
    const slideId = video.parentElement.id; // Get the slide ID
    const currentRate = currentPlaybackRates[slideId] || defaultSpeed; // Get the current rate or default
    const newPlaybackRate = Math.max(0.1, currentRate + change); // Prevent speed from going below 0.1
    video.playbackRate = newPlaybackRate; // Set new playback rate
    currentPlaybackRates[slideId] = newPlaybackRate; // Store the new playback rate
    console.log(`Playback speed for ${slideId} set to:`, newPlaybackRate); // Debugging line
  });
}

// Function to reset video speed to normal
function resetSpeed() {
  const videoElements = document.querySelectorAll('video'); // Select all videos
  videoElements.forEach((video) => {
    video.playbackRate = defaultSpeed; // Reset to default speed
  });
  Object.keys(currentPlaybackRates).forEach(slideId => {
    currentPlaybackRates[slideId] = defaultSpeed; // Reset the stored rate
  });
  console.log('Playback speed reset to normal'); // Debugging line
}

let currentVerticalSlide_kupu = 0;
let currentHorizontalSlides_kupu = [0, 0, 0];
const verticalSlides_kupu = document.querySelectorAll('.slide-container-kupu');
const horizontalSlides_kupu = [
  document.querySelectorAll('#kupuSlide1 .slide-kupu'),
  document.querySelectorAll('#kupuSlide2 .slide-kupu'),
  document.querySelectorAll('#kupuSlide3 .slide-kupu'),
];

// Initialize the first vertical slide and horizontal slide
verticalSlides_kupu[currentVerticalSlide_kupu].style.display = 'flex';
horizontalSlides_kupu[currentVerticalSlide_kupu][currentHorizontalSlides_kupu[currentVerticalSlide_kupu]].classList.add('active');

// Function to scroll through slides
function scrollSlideKupu(direction) {
  if (direction === 'up') {
    currentVerticalSlide_kupu = (currentVerticalSlide_kupu - 1 + verticalSlides_kupu.length) % verticalSlides_kupu.length;
  } else if (direction === 'down') {
    currentVerticalSlide_kupu = (currentVerticalSlide_kupu + 1) % verticalSlides_kupu.length;
  } else if (direction === 'left') {
    currentHorizontalSlides_kupu[currentVerticalSlide_kupu] = (currentHorizontalSlides_kupu[currentVerticalSlide_kupu] - 1 + horizontalSlides_kupu[currentVerticalSlide_kupu].length) % horizontalSlides_kupu[currentVerticalSlide_kupu].length;
  } else if (direction === 'right') {
    currentHorizontalSlides_kupu[currentVerticalSlide_kupu] = (currentHorizontalSlides_kupu[currentVerticalSlide_kupu] + 1) % horizontalSlides_kupu[currentVerticalSlide_kupu].length;
  }

  // Show the selected vertical slide
  verticalSlides_kupu.forEach((slide, index) => {
    slide.style.display = index === currentVerticalSlide_kupu ? 'flex' : 'none';
  });

  // Show the current horizontal slide in the active vertical slide
  horizontalSlides_kupu[currentVerticalSlide_kupu].forEach((slide, index) => {
    slide.classList.remove('active');
  });
  horizontalSlides_kupu[currentVerticalSlide_kupu][currentHorizontalSlides_kupu[currentVerticalSlide_kupu]].classList.add('active');

  // Update button states
  updateButtonStateKupu();
}

// Function to update button states based on the current slide
function updateButtonStateKupu() {
  // Enable all buttons first
  const buttons = ['up-kupu', 'down-kupu', 'left-kupu', 'right-kupu'];
  buttons.forEach(buttonId => {
    const button = document.getElementById(buttonId);
    button.disabled = false;
    button.classList.remove('disabled-kupu'); // Remove disabled styling
  });

  // Set button states for specific slides
  if (currentVerticalSlide_kupu === 0) {
    // Slide utama (kupuSlide1) - Semua tombol aktif
  } else if (currentVerticalSlide_kupu === 1) {
    // Slide bawah (kupuSlide2)
    document.getElementById('down-kupu').disabled = true;
    document.getElementById('left-kupu').disabled = true;
    document.getElementById('right-kupu').disabled = true;

    document.getElementById('down-kupu').classList.add('disabled-kupu');
    document.getElementById('left-kupu').classList.add('disabled-kupu');
    document.getElementById('right-kupu').classList.add('disabled-kupu');
  } else if (currentVerticalSlide_kupu === 2) {
    // Slide atas (kupuSlide3)
    document.getElementById('up-kupu').disabled = true;
    document.getElementById('left-kupu').disabled = true;
    document.getElementById('right-kupu').disabled = true;

    document.getElementById('up-kupu').classList.add('disabled-kupu');
    document.getElementById('left-kupu').classList.add('disabled-kupu');
    document.getElementById('right-kupu').classList.add('disabled-kupu');
  }
}

const defaultSpeed_kupu = 1.0;
const currentPlaybackRatesKupu = {}; // WAJIB!

function changeSpeedKupu(change) {
  const videoElements = document.querySelectorAll('#versi-kupu video');
  videoElements.forEach((video) => {
    const slideId = video.parentElement.id || 'default';
    const currentRate = currentPlaybackRatesKupu[slideId] || defaultSpeed_kupu;
    const newRate = Math.max(0.1, currentRate + change);
    video.playbackRate = newRate;
    currentPlaybackRatesKupu[slideId] = newRate;
    console.log(`Video di ${slideId} dipercepat ke ${newRate}`);
  });
}

function resetSpeedKupu() {
  const videoElements = document.querySelectorAll('#versi-kupu video');
  videoElements.forEach((video) => {
    video.playbackRate = defaultSpeed_kupu;
  });
  Object.keys(currentPlaybackRatesKupu).forEach(id => {
    currentPlaybackRatesKupu[id] = defaultSpeed_kupu;
  });
  console.log('Kecepatan dikembalikan ke normal');
}
function changeSpeedKupu(change) {
  const videoElements = document.querySelectorAll('#versi-kupu video');
  // hanya akan ubah video versi kupu
}


function showVersi1() {
  document.getElementById("versi1-container").classList.add("aktif");
  document.getElementById("versi2-container").classList.remove("aktif");

  // Tambah class aktif ke tombol versi 1
  document.getElementById("versi1-btn").classList.add("aktif-versi");
  document.getElementById("versi2-btn").classList.remove("aktif-versi");
}

function showVersi2() {
  document.getElementById("versi1-container").classList.remove("aktif");
  document.getElementById("versi2-container").classList.add("aktif");

  // Tambah class aktif ke tombol versi 2
  document.getElementById("versi1-btn").classList.remove("aktif-versi");
  document.getElementById("versi2-btn").classList.add("aktif-versi");
}

function toggleVideoDetail(button) {
  const container = button.nextElementSibling;

  if (container.style.display === "block") {
    container.style.display = "none";
    button.innerHTML = '<i class="fas fa-play"></i> Tampilkan Video Penjelas';
  } else {
    container.style.display = "block";
    button.innerHTML = '<i class="fas fa-times"></i> Sembunyikan Video';
  }
}