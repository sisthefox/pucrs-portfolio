// JavaScript code for the Fibonacci Tool site
console.log('App loaded');

// Accordion logic
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.accordion-btn');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const panel = btn.nextElementSibling;
      panel.style.maxHeight = panel.style.maxHeight
        ? null
        : panel.scrollHeight + 'px';
    });
  });
});