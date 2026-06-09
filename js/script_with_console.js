
let intro = document.querySelector('.intro');
let logos = document.querySelector('.logos-header');
let logosSpan = document.querySelectorAll('.logos');

// Menampilkan NodeList di console
console.log('NodeList logosSpan:', logosSpan);


window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    logosSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add('active');
      }, (idx + 1) * 150);
    });

    setTimeout(() => {
      logosSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 50);
      });
    }, 3000);

    setTimeout(() => {
      intro.style.top = '-100vh'; // Gunakan tanda '=' untuk assignment
    }, 3000);
  });
});

