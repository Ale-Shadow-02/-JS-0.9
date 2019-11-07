const calc2 = () => {
  const accordion = document.getElementById('accordion'),
    panel = accordion.querySelectorAll('.panel'),
    panelCollapse = document.querySelectorAll('#accordion .panel > .panel-collapse'),
    constructBtn = document.querySelectorAll('.construct-btn');

  const toggleTabContent = (index) => {
    for (let i = 0; i < panelCollapse.length; i++) {
      if (index == i) {
        panelCollapse[i].classList.add('in');
      } else {
        panelCollapse[i].classList.remove('in');
      }
    }
  };

  panel.forEach((item, i) => {
    item.dataset.index = i;
  });
  accordion.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    target = target.closest('.panel');
    if (target) {
      toggleTabContent(target.dataset.index);
    }
  });

  constructBtn.forEach(elem => {
    elem.addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault(); 
      let target = event.target;
      target = target.closest('.panel');
      if (target) {
        toggleTabContent(parseInt(target.dataset.index) + 1);
      }
    });
  });






};
export default calc2;