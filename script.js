const heartsContainer = document.getElementById('hearts-container');

function createHeart() {
  const emojis = ['❤️', '💖', '😍', '💋'];
  const heart = document.createElement('div');
  heart.className = 'falling-emoji';
  heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (2 + Math.random() * 3) + 's';
  heart.style.fontSize = (24 + Math.random() * 24) + 'px';
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

// Создаём эмодзи каждые 300 мс
setInterval(createHeart, 300);