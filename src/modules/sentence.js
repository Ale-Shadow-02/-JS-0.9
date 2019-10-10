const sentence = () => {
  const sentenceBtn = document.querySelectorAll('.sentence-btn'),
    addSentenceBtn = document.querySelector('.add-sentence-btn'),
    popupDiscount = document.querySelector('.popup-discount'),
    visibleSmBlock = document.querySelector('.visible-sm-block'),
    hidden = document.querySelectorAll('.hidden');

  sentenceBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
      popupDiscount.style.display = 'block';
    });
  });

  popupDiscount.addEventListener('click', ({
    target
  }) => {
    if (target.classList.contains('popup-close')) {
      popupDiscount.style.display = 'none';
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        popupDiscount.style.display = 'none';
      }
    }

  });

  addSentenceBtn.addEventListener('click', () => {
    visibleSmBlock.classList.remove('visible-sm-block');
    hidden.forEach(elem => {
      elem.classList.remove('hidden');
      addSentenceBtn.style.display = 'none';
    });

  });

};

export default sentence;