import faq from './modules/faq';

window.addEventListener('DOMContentLoaded', () => {
     faq({
          faqItemsSelector: '.faq__item',
          faqBtnsSelector: '.question__open',
          faqAnswersSelector: '.answer',
          activeClass: 'faq__active',
          closeClass: 'question__close',
          showClass: 'answer__show',
          fadeClass: 'answer__fade'
     });
});