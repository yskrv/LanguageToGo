import phoneValidator from './modules/phone';
import registerValidator from './modules/register';

window.addEventListener('DOMContentLoaded', () => {
     phoneValidator({
          inputSelector: '#phone__input'
     });
     registerValidator({
          closeBtnsSelector: '.close__btn',
          lessonPopUpSelector: '#support__modal',
          formSelector: '.form',
          formInputsSelector: 'input[type="text"], textarea, input[type="tel"]'
     });
});