function registerValidator({
     closeBtnsSelector,
     lessonPopUpSelector,
     formSelector,
     formInputsSelector
}){
     const closeBtns = document.querySelectorAll(closeBtnsSelector),
           lessonModal = document.querySelector(lessonPopUpSelector),
           form = document.querySelector(formSelector),
           formInputs = form.querySelectorAll(formInputsSelector);
     const openModal = (modal) => {
          modal.style.display = 'flex';
          document.body.style.overflowY = 'hidden';
     };
     const closeModal = () => {
          document.body.style.overflowY = 'auto';
          lessonModal.style.display = 'none';
     };
     closeBtns.forEach(btn => {
          btn.addEventListener('click', closeModal);
     });
     form.addEventListener('submit', (e) => {
     let formChecker = 0;
     e.preventDefault();
     for (let i = 0; i < formInputs.length; i++) {
          if(formInputs[i].value === '') {
               formChecker++;
               formInputs[i].style.border = '1px solid #E42125';
          } else {
               formInputs[i].style.border = 'none';
          }
     }
     if (formChecker === 0) {
          closeModal();
          openModal(lessonModal);
          form.reset();
     }
     });
}

export default registerValidator;