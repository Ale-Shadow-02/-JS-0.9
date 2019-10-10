const sentence = () => {
  const sentenceBtn = document.querySelectorAll('.sentence-btn'),
        addSentenceBtn = document.querySelector('.add-sentence-btn'),
        popupCall = document.querySelector('.popup-call'),
        visibleSmBlock = document.querySelector('.visible-sm-block'),
        hidden = document.querySelectorAll('.hidden');
        console.log(addSentenceBtn);
        console.log(visibleSmBlock);

  sentenceBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
      popupCall.style.display = 'block';
    });
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