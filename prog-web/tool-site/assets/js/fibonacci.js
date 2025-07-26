
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("fibo-container");
// Create Fibonacci numbers
  const numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233];
  const elements = [];
// Create divs for each Fibonacci number
  numbers.forEach((num, i) => {
    const div = document.createElement("div");
    div.className = "fibo-number";
    div.innerText = num;
    container.appendChild(div);
    elements.push(div);
  });
// Randomize and spiral functions
  function randomize() {
    elements.forEach(el => {
      el.style.top = Math.floor(Math.random() * 70 + 10) + "vh";
      el.style.left = Math.floor(Math.random() * 80 + 5) + "vw";
    });
  }
// Organize elements in a spiral
  function spiral() {
    const angleStep = Math.PI / 6;
    const radiusStep = 3;
    elements.forEach((el, i) => {
      const angle = i * angleStep;
      const radius = i * radiusStep;
      const x = 50 + radius * Math.cos(angle);
      const y = 50 + radius * Math.sin(angle);
      el.style.left = `${x}vw`;
      el.style.top = `${y}vh`;
    });
  }
  
// Add event listeners to buttons
  window.shuffleNumbers = randomize;
  window.organizeSpiral = spiral;

// Initial randomization
  randomize(); // inicial
});