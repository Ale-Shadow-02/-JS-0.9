const tabPanel = () => {

  const accordionTwo = document.getElementById('accordion-two'),
    panel = accordionTwo.querySelectorAll('.panel'),
    panelCollapse = document.querySelectorAll('#accordion-two .panel > .panel-collapse');

  const toggleTabContent = (index) => {
    for (let i = 0; i < panelCollapse.length; i++) {
      if (index === i) {
        panelCollapse[i].classList.add('in');
      } else {
        panelCollapse[i].classList.remove('in');
      }
    }
  };
  //toggleTabContent(2);
  accordionTwo.addEventListener('click', (event) => {
    let target = event.target;
    target = target.closest('.panel');
    if (target) {
      panel.forEach((item, i) => {
        if (item === target) {
          toggleTabContent(i);
        }
      });
    }
  });

};

export default tabPanel;