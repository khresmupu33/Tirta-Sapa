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

