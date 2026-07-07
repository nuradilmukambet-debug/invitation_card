function openInvitation() {
  const overlay = document.getElementById("overlay");
  const mainContent = document.getElementById("main-content");
  const sealButton = document.getElementById("seal-button");
  const envelopeWrapper = document.querySelector(".envelope-wrapper");

  if (overlay.classList.contains("opening")) return;

  // 1. Ломаем печать
  sealButton.classList.add("seal-breaking");
  createSealParticles();

  // 2. Сгибаем треугольник (envelope_up.png) наверх
  setTimeout(() => {
    envelopeWrapper.classList.add("open-flap");
  }, 300);

  // 3. Выталкиваем письмо вверх из основы (envelope.png)
  setTimeout(() => {
    envelopeWrapper.classList.add("open-letter");
  }, 700);

  // 4. Плавно растворяем заставку
  setTimeout(() => {
    overlay.classList.add("opening");
  }, 1800);

  // 5. Показываем основной сайт
  setTimeout(() => {
    overlay.style.display = "none";
    mainContent.classList.remove("hidden");
    mainContent.classList.add("visible");
    createPetals();
  }, 2800);
}

function createSealParticles() {
  const container = document.querySelector(".seal-particles");
  if (!container) return;
  const colors = ["#a82020", "#8b1a1a", "#c93030", "#6b1515"];

  for (let i = 0; i < 16; i++) {
    const particle = document.createElement("span");
    particle.className = "seal-particle animate";

    const angle = (i / 16) * Math.PI * 2;
    const distance = 40 + Math.random() * 40;
    
    particle.style.setProperty("--tx", `${Math.cos(angle) * distance}px`);
    particle.style.setProperty("--ty", `${Math.sin(angle) * distance}px`);
    particle.style.background = colors[i % colors.length];
    particle.style.width = `${4 + Math.random() * 4}px`;
    particle.style.height = particle.style.width;
    
    particle.style.left = "0px";
    particle.style.top = "0px";
    particle.style.animationDelay = `${Math.random() * 0.1}s`;

    container.appendChild(particle);
    setTimeout(() => particle.remove(), 600);
  }
}

function createPetals() {
  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      const petal = document.createElement("div");
      petal.className = "petal";
      petal.style.left = `${Math.random() * 100}vw`;
      petal.style.animationDuration = `${8 + Math.random() * 6}s`;
      petal.style.animationDelay = `${Math.random() * 2}s`;
      petal.style.opacity = `${0.2 + Math.random() * 0.3}`;
      document.body.appendChild(petal);

      setTimeout(() => petal.remove(), 16000);
    }, i * 400);
  }
}
