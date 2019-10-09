const togglePopup = () => {
  const callBtn = document.querySelectorAll('.call-btn'),
    popupCall = document.querySelector('.popup-call'),
    popupClose = document.querySelector('.popup-close');

  callBtn.forEach((elem) => {
    
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      popupCall.style.display = 'block';
    });
  });

  popupCall.addEventListener('click', ({
    target
  }) => {
    if (target.classList.contains('popup-close')) {
      popupCall.style.display = 'none';
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        popupCall.style.display = 'none';
      }
    }

  });
};

export default togglePopup;