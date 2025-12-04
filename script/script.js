//zufällige Neigung und Animationsverzögerung
function setupPolaroids() {
  const polaroids = document.querySelectorAll(".polaroid");
  polaroids.forEach((polaroid) => {
    const rotation = Math.random() * 10 - 5;
    polaroid.style.transform = `rotate(${rotation}deg)`;

    const delay = Math.random() * 0.5;
    const img = polaroid.querySelector("img");
    if (img) {
      img.style.animationDelay = `${delay}s`;
    }
  });
}

// Event Listener nach dem Laden des DOMs hinzufügen, um die Funktion aufzurufen
document.addEventListener("DOMContentLoaded", function () {
  setupPolaroids();
});
