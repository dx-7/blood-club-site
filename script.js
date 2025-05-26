
document.addEventListener('DOMContentLoaded', () => {
  const fog = document.querySelector('.fog');
  for (let i = 0; i < 10; i++) {
    let mist = document.createElement('div');
    mist.className = 'mist';
    mist.style.left = `${Math.random() * 100}%`;
    fog.appendChild(mist);
  }
});
