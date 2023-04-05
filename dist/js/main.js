/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/js/modules/faq.js":
/*!*******************************!*\
  !*** ./app/js/modules/faq.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (faq);

/***/ }),

/***/ "./app/js/modules/phone.js":
/*!*********************************!*\
  !*** ./app/js/modules/phone.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function phoneValidator({
     inputSelector
}){
     const phoneInput = document.querySelector(inputSelector);
     let phoneString = '+7(___)___-__-__';
     const regExp = /_/g;
     const changePhoneString = (index, val) => {
          let tempPhoneArray = phoneString.split('');
          tempPhoneArray[index] = val;
          phoneString = tempPhoneArray.join('');
          phoneInput.value = phoneString;
     };
     const phoneIndexes = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
     const phoneValuesIndexes = [3, 4, 5, 7, 8, 9, 11, 12, 14, 15];
     
     
     phoneInput.addEventListener('input', (e) => {
          console.log(phoneString.match(regExp).length);
          if (phoneString.match(regExp) === null) {
               changePhoneString(15, '_');
          } 
          else {
               if(e.data === null) {
                    for (let i = 0; i < phoneIndexes.length; i++) {
                         if (phoneString.match(regExp).length == phoneIndexes[i] - 1) {
                              changePhoneString(phoneValuesIndexes[i], '_');
                              break;
                         }
                    }
               } else {
                    for (let i = 0; i < phoneIndexes.length; i++) {
                         if (phoneString.match(regExp).length == phoneIndexes[i]) {
                              changePhoneString(phoneValuesIndexes[i], e.data);
                              break;
                         }
                    }
               }
          }
     });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (phoneValidator);

/***/ }),

/***/ "./app/js/modules/register.js":
/*!************************************!*\
  !*** ./app/js/modules/register.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerValidator);

/***/ }),

/***/ "./app/js/modules/slider.js":
/*!**********************************!*\
  !*** ./app/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({
     sliderContainerSelector, 
     sliderCardsSelector, 
     previousBtnSelector, 
     nextBtnSelector
}){
     const windowWidth = window.screen.width;
     const sliderContainer = document.querySelector(sliderContainerSelector);
     const sliderCards = document.querySelectorAll(sliderCardsSelector);
     const prevBtn = document.querySelector(previousBtnSelector);
     const nextBtn = document.querySelector(nextBtnSelector);
     let sliderGap = 40;
     if (windowWidth <= 660) {
          sliderGap = 20;
     } else if (windowWidth <= 1440) {
          sliderGap = 30;
     }
     let sliderCardWidth = window.getComputedStyle(sliderCards[0]).width.slice(0, -2); 
     let sliderOffset = 0;
     let maxOffset = 3;
     if (windowWidth <= 660) {
          maxOffset = 5;
     } else if (windowWidth <= 1200) {
          maxOffset = 4;
     }
     prevBtn.addEventListener('click', () => {
          if (sliderOffset != 0) {
               sliderOffset--;
               moveSlider(sliderOffset, sliderCardWidth);
          }
     });
     nextBtn.addEventListener('click', () => {
          if (sliderOffset !== maxOffset) {
               sliderOffset++;
               moveSlider(sliderOffset, sliderCardWidth);
          }
     });
     const moveSlider = (offset, width) => {
          const moveWidth = (Number(sliderGap) + Number(width)) * offset;
          console.log(moveWidth);
          sliderContainer.style.transform = `translateX(-${moveWidth}px)`;
     };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./app/js/modules/tabs.js":
/*!********************************!*\
  !*** ./app/js/modules/tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs({
     tabsBtnsSelector,
     tabsListsSelector
}){
     const tabsBtns = document.querySelectorAll(tabsBtnsSelector);
     const tabsLists = document.querySelectorAll(tabsListsSelector);
     tabsBtns.forEach((element, index) => {
          element.addEventListener('click', function(){
               tabsBtns.forEach((element, i) => {
                    element.classList.remove('active__dot');
                    tabsLists[i].classList.remove('show', 'fade');
               });
               element.classList.add('active__dot');
               tabsLists[index].classList.add('show', 'fade');
          });
     });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./app/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./app/js/modules/slider.js");
/* harmony import */ var _modules_faq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/faq */ "./app/js/modules/faq.js");
/* harmony import */ var _modules_phone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/phone */ "./app/js/modules/phone.js");
/* harmony import */ var _modules_register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/register */ "./app/js/modules/register.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ "./app/js/modules/tabs.js");






window.addEventListener('DOMContentLoaded', () => {
     (0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])({
          sliderContainerSelector: '.all__courses__row',
          sliderCardsSelector: '.all__courses__card',
          previousBtnSelector: '#prev__btn',
          nextBtnSelector: '#next__btn' 
     });
     (0,_modules_faq__WEBPACK_IMPORTED_MODULE_1__["default"])({
          faqItemsSelector: '.faq__item',
          faqBtnsSelector: '.question__open',
          faqAnswersSelector: '.answer',
          activeClass: 'faq__active',
          closeClass: 'question__close',
          showClass: 'answer__show',
          fadeClass: 'answer__fade'
     });
     (0,_modules_phone__WEBPACK_IMPORTED_MODULE_2__["default"])({
          inputSelector: '#phone__input'
     });
     (0,_modules_register__WEBPACK_IMPORTED_MODULE_3__["default"])({
          closeBtnsSelector: '.close__btn',
          lessonPopUpSelector: '#lesson__modal',
          formSelector: '.form',
          formInputsSelector: 'input[type="text"], textarea, input[type="tel"]'
     });
     (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__["default"])({
          tabsBtnsSelector: '.testimonials__slider__dot',
          tabsListsSelector: '.testimonials__slider__item'
     });
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map