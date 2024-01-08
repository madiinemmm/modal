const openPopup = document.getElementById('open-popup');
const modal = document.getElementById('modal');
const closePopup = document.getElementById('close-popup');
const overlay = document.getElementById('overlay');
const card = document.getElementById('card');

openPopup.addEventListener('click', () => {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
  modal.style.transitionAll = '0.5s'
});

closePopup.addEventListener('click', () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
  });
  const addHidden = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
  };
  const removeHidden = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
  };

  openPopup.addEventListener('click', removeHidden);
  closePopup.addEventListener('click', addHidden);
  overlay.addEventListener('click', addHidden);

  

