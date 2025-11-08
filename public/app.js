const toggleDance = kitty => kitty.classList.toggle('dancing');

const clamp = (value, limit) => {
  const max = Math.max(limit, 0);
  return Math.min(Math.max(value, -max), max);
};

const resetPupils = () => {
  document.querySelectorAll('.eye .pupil').forEach(pupil => {
    pupil.style.transform = 'translate(-50%, -50%)';
  });
};

const movePupils = (clientX, clientY) => {
  document.querySelectorAll('.eye').forEach(eye => {
    const pupil = eye.querySelector('.pupil');
    if (!pupil) return;

    const rect = eye.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = clientX - centerX;
    const dy = clientY - centerY;

    const maxShift = Math.min(rect.width, rect.height) * 0.25;
    const offsetX = clamp(dx / (rect.width / 2), 1) * maxShift;
    const offsetY = clamp(dy / (rect.height / 2), 1) * maxShift;

    pupil.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
  });
};

const handlePointerMove = event => {
  const { clientX, clientY } = event;
  if (typeof clientX !== 'number' || typeof clientY !== 'number') return;
  movePupils(clientX, clientY);
};

const handleTouchMove = event => {
  const touch = event.touches[0];
  if (!touch) return;
  movePupils(touch.clientX, touch.clientY);
};

document.querySelectorAll('.kitty').forEach(kitty => {
  kitty.addEventListener('click', () => toggleDance(kitty));
});

window.addEventListener('pointermove', handlePointerMove);
window.addEventListener('pointerleave', resetPupils);
window.addEventListener('touchmove', handleTouchMove, { passive: true });
window.addEventListener('touchend', resetPupils);
window.addEventListener('resize', resetPupils);
