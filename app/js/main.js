import slider from './modules/slider';
import faq from './modules/faq';
import phoneValidator from './modules/phone';
import registerValidator from './modules/register';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {
     slider({
          sliderContainerSelector: '.all__courses__row',
          sliderCardsSelector: '.all__courses__card',
          previousBtnSelector: '#prev__btn',
          nextBtnSelector: '#next__btn' 
     });
     faq({
          faqItemsSelector: '.faq__item',
          faqBtnsSelector: '.question__open',
          faqAnswersSelector: '.answer',
          activeClass: 'faq__active',
          closeClass: 'question__close',
          showClass: 'answer__show',
          fadeClass: 'answer__fade'
     });
     phoneValidator({
          inputSelector: '#phone__input'
     });
     registerValidator({
          closeBtnsSelector: '.close__btn',
          lessonPopUpSelector: '#lesson__modal',
          formSelector: '.form',
          formInputsSelector: 'input[type="text"], textarea, input[type="tel"]'
     });
     tabs({
          tabsBtnsSelector: '.testimonials__slider__dot',
          tabsListsSelector: '.testimonials__slider__item'
     });
});