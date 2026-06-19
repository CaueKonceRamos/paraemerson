const btnNo = document.getElementById('btnNo');
const btnYes = document.getElementById('btnYes');
const scheduleCard = document.getElementById('scheduleCard');
const heroImage = document.querySelector('.hero-image');
const timeButtons = document.querySelectorAll('.time-btn');
const buttonGroup = document.getElementById('buttonGroup');

const title = document.querySelector('h1');

const showSchedule = () => {
  heroImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFMB6lH1kasv2ItRo4407Ad8WXUJpQEUUHg&s';
  scheduleCard.classList.remove('hidden');
  buttonGroup.classList.add('hidden');
  title.classList.add('hidden');
  btnYes.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

const handleNoClick = (event) => {
  event.preventDefault();
  alert('Não é uma opção');
  btnNo.textContent = 'Sim';
  btnNo.classList.remove('btn-nao');
  btnNo.classList.add('btn-sim');
  btnNo.removeEventListener('click', handleNoClick);
  btnNo.removeEventListener('mouseover', moveNoButton);
  btnNo.addEventListener('click', showSchedule);
  btnNo.style.position = 'static';
  btnNo.style.left = 'auto';
  btnNo.style.top = 'auto';
  btnNo.style.transform = 'none';
};

const moveNoButton = () => {
  const buttonRect = btnNo.getBoundingClientRect();
  const isMobile = window.innerWidth <= 420;

  if (isMobile) {
    const maxX = Math.max(window.innerWidth - buttonRect.width - 24, 0);
    const maxY = Math.max(window.innerHeight - buttonRect.height - 24, 0);
    const randomX = Math.floor(Math.random() * (maxX + 1));
    const randomY = Math.floor(Math.random() * (maxY + 1));
    btnNo.style.position = 'fixed';
    btnNo.style.left = `${randomX}px`;
    btnNo.style.top = `${randomY}px`;
    btnNo.style.right = 'auto';
    btnNo.style.bottom = 'auto';
    btnNo.style.width = 'auto';
    btnNo.style.transform = 'none';
    btnNo.style.transition = 'left 0.2s ease, top 0.2s ease';
  } else {
    btnNo.style.position = 'absolute';
    btnNo.style.left = 'auto';
    btnNo.style.top = 'auto';
    btnNo.style.right = '0';
    btnNo.style.bottom = 'auto';
    const container = buttonGroup.getBoundingClientRect();
    const maxX = Math.max(container.width - buttonRect.width, 0);
    const maxY = Math.max(container.height - buttonRect.height, 0);
    const randomX = Math.floor(Math.random() * (maxX + 1));
    const randomY = Math.floor(Math.random() * (maxY + 1));
    btnNo.style.transform = `translate(${randomX}px, ${randomY}px)`;
    btnNo.style.transition = 'transform 0.25s ease';
  }
};

btnNo.addEventListener('mouseover', moveNoButton);
btnNo.addEventListener('click', handleNoClick);
btnYes.addEventListener('click', showSchedule);

const phoneNumber = '5571987065796';
const place = 'Shopping da Bahia';

const sendMessage = (time) => {
  const messageText = time === 'outro'
    ? `Claro meu amor, quero sair com você amanhã no ${place}. Vamos às: `
    : `Claro meu amor, quero sair com você amanhã às ${time} no ${place}. Você me deixa todo feliz! 😍`;
  const message = encodeURIComponent(messageText);
  window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
};

timeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    sendMessage(button.dataset.time);
  });
});
