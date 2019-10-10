const gauging = () => {
  const gaugingButton = document.querySelector('.gauging-button'),
  popupCheck = document.querySelector('.popup-check');

  gaugingButton.addEventListener('click', () => {
    popupCheck.style.display = 'block';
  });

  popupCheck.addEventListener('click', ({
    target
  }) => {
    if (target.classList.contains('popup-close')) {
      popupCheck.style.display = 'none';
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        popupCheck.style.display = 'none';
      }
    }
  });
};
export default gauging;