// script.js

const heartsContainer = document.querySelector('.hearts-container');

const emojis = ['❤️', '💖', '🥳', '🎉', '😍', '💘'];

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  heart.style.position = 'absolute';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 24 + 16 + 'px';
  heart.style.top = '-20px';
  heart.style.animation = `fall ${Math.random() * 3 + 2}s linear`;

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
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
