let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;

const spiderman = document.querySelector('.spiderman-hero');
const panels = document.querySelectorAll('.panel');
const bg = document.querySelector('.bg-ny');

const rotations = [-5, 4, -4, 5, -6, 3, -3, 5];

document.addEventListener('mousemove', (e) => {
  // Posição do cursor relativa ao centro da tela (-1 a 1)
  const normX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
  const normY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);

  // Define os alvos de translação
  targetX = normX * 35;
  targetY = normY * 35;
});

function animate() {
  // Fator 0.04 deixa a transição extremamente fluida e aveludada
  currentX += (targetX - currentX) * 0.04;
  currentY += (targetY - currentY) * 0.04;

  // Direção oposta para criar sensação de controle de câmera/perspectiva
  if (spiderman) {
    spiderman.style.transform = `translate3d(${-currentX * 1.1}px, ${-currentY * 1.1}px, 0)`;
  }

  panels.forEach((panel, index) => {
    const depth = (index % 3 + 1) * 0.5;
    const rot = rotations[index] || 0;
    panel.style.transform = `translate3d(${-currentX * depth}px, ${-currentY * depth}px, 0) rotate(${rot}deg)`;
  });

  // Fundo se move suavemente na mesma direção para dar profundidade de campo
  if (bg) {
    bg.style.transform = `translate3d(${currentX * 0.25}px, ${currentY * 0.25}px, 0)`;
  }

  requestAnimationFrame(animate);
}

animate();