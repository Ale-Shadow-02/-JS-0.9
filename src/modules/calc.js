const calc = () => {
  const accordion = document.getElementById('accordion'),
    panel = accordion.querySelectorAll('.panel'),
    panelCollapse = document.querySelectorAll('#accordion .panel > .panel-collapse'),
    constructBtn = document.querySelectorAll('.construct-btn');
    console.log('constructBtn: ', constructBtn);

    const toggleTabContent = (index) => {
      for (let i = 0; i < panelCollapse.length; i++) {
        if (index === i) {
          panelCollapse[i].classList.add('in');
        } else {
          panelCollapse[i].classList.remove('in');
        }
      }
    };
  
      
    accordion.addEventListener('click', (event) => {
      event.preventDefault();
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

    constructBtn.forEach(elem => {
      elem.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        let target = event.target;
        target = target.closest('.panel');
        if (target) {
          panel.forEach((item, i) => {
            if (item === target) {
              toggleTabContent(i + 1);
            }
          });
        } 
      });
    });
  

    
        
    

};
export default calc;