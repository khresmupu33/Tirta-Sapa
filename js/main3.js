let currentVerticalSlide = 0;
let currentHorizontalSlides = [1, 0]; // Set Meluncur depan as the initial horizontal slide for vSlide1
const verticalSlides = document.querySelectorAll('.slide-container');
const horizontalSlides = [
  document.querySelectorAll('#vSlide1 .slide'),
  document.querySelectorAll('#vSlide3 .slide'),
];

const defaultSpeed = 1.0; // Kecepatan normal
const currentPlaybackRates = {}; // Menyimpan kecepatan untuk setiap video


// Initial setup
verticalSlides[currentVerticalSlide].style.display = 'flex';
horizontalSlides[currentVerticalSlide][currentHorizontalSlides[currentVerticalSlide]].classList.add('active');
updateButtonState();

function scrollSlide(direction) {
  // Handle vertical slide change
  if (direction === 'up') {
    currentVerticalSlide = 1;
    currentHorizontalSlides[currentVerticalSlide] = 0; // reset horizontal slide
  } else if (direction === 'down') {
    currentVerticalSlide = 0;
  } else if (direction === 'left' || direction === 'right') {
    // Handle horizontal slide change
    const change = direction === 'left' ? -1 : 1;
    const slideCount = horizontalSlides[currentVerticalSlide].length;
    currentHorizontalSlides[currentVerticalSlide] = (currentHorizontalSlides[currentVerticalSlide] + change + slideCount) % slideCount;
  }

  // Update slides display
  verticalSlides.forEach((slide, index) => {
    slide.style.display = index === currentVerticalSlide ? 'flex' : 'none';
  });
  horizontalSlides.forEach((slides, index) => {
    slides.forEach((slide, idx) => slide.classList.toggle('active', idx === currentHorizontalSlides[index]));
  });

  // Update button states
  updateButtonState();
}

function updateButtonState() {
  document.getElementById('up-button').disabled = currentVerticalSlide === 1;
  document.getElementById('down-button').disabled = currentVerticalSlide === 0;
  document.getElementById('left-button').disabled = !(currentVerticalSlide === 0 && currentHorizontalSlides[currentVerticalSlide] > 0);
  document.getElementById('right-button').disabled = !(currentVerticalSlide === 0 && currentHorizontalSlides[currentVerticalSlide] < horizontalSlides[currentVerticalSlide].length - 1);

  // Add 'disabled' class for styling
  document.getElementById('up-button').classList.toggle('disabled', currentVerticalSlide === 1);
  document.getElementById('down-button').classList.toggle('disabled', currentVerticalSlide === 0);
  document.getElementById('left-button').classList.toggle('disabled', !(currentVerticalSlide === 0 && currentHorizontalSlides[currentVerticalSlide] > 0));
  document.getElementById('right-button').classList.toggle('disabled', !(currentVerticalSlide === 0 && currentHorizontalSlides[currentVerticalSlide] < horizontalSlides[currentVerticalSlide].length - 1));
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
