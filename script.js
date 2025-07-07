// script.js

const heartsContainer = document.querySelector('.hearts-container');

function createFallingEmojis(emojis = ['❤️', '😍', '💋']) {
  const container = document.querySelector('.emoji-container');

  setInterval(() => {
    const emoji = document.createElement('div');
    emoji.className = 'falling-emoji';
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = (2 + Math.random() * 3) + 's';
    emoji.style.fontSize = (24 + Math.random() * 24) + 'px';
    container.appendChild(emoji);

    setTimeout(() => {
      emoji.remove();
    }, 5000);
  }, 300);
}

setInterval(createHeart, 300);

const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(100vh);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);
