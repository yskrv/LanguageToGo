function faq({
     faqItemsSelector,
     faqBtnsSelector,
     faqAnswersSelector,
     activeClass,
     closeClass,
     showClass,
     fadeClass
}){
     const faqItems = document.querySelectorAll(faqItemsSelector);
     const faqBtns = document.querySelectorAll(faqBtnsSelector);
     const faqAnswers = document.querySelectorAll(faqAnswersSelector);
     function changeFaqBtn(btn){
          if (btn.classList.contains(closeClass)) {
               btn.textContent = '-';
          } else {
               btn.textContent = '+';
          }
     }
     function closeFaq(){
          faqItems.forEach(item => {
               item.classList.remove(activeClass);
          });
          faqBtns.forEach(btn => {
               btn.classList.remove(closeClass);
          });
          faqAnswers.forEach(answer => {
               answer.classList.remove(showClass, fadeClass);
          });
     }
     function openFaq(index){
          faqItems[index].classList.add(activeClass);   
          faqBtns[index].classList.add(closeClass);   
          faqAnswers[index].classList.add(showClass, fadeClass);
     }
     faqBtns.forEach((faqBtn, index) => {
          faqBtn.addEventListener('click', function(){
               if (faqBtn.classList.contains(closeClass)){
                    closeFaq(index);
                    changeFaqBtn(faqBtns[index]);
               } else {
                    for(let i = 0; i < faqBtns.length; i++) {
                         closeFaq();
                    }
                    openFaq(index);
                    faqBtns.forEach(btn => {
                         changeFaqBtn(btn);
                    });
               }
          });
     });
} 
export default faq;