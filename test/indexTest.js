// index.js

let dodger;

function moveDodgerLeft() {
  // Example implementation: Move the dodger 10 pixels to the left
  const currentLeft = parseInt(dodger.style.left) || 0;
  dodger.style.left = `${currentLeft - 10}px`;
}

function moveDodgerRight() {
  // Example implementation: Move the dodger 10 pixels to the right
  const currentLeft = parseInt(dodger.style.left) || 0;
  dodger.style.left = `${currentLeft + 10}px`;
}

// For Node.js testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    moveDodgerLeft,
    moveDodgerRight,
  };
}
