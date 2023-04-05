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
/*!***********************!*\
  !*** ./app/js/faq.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_faq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/faq */ "./app/js/modules/faq.js");


window.addEventListener('DOMContentLoaded', () => {
     (0,_modules_faq__WEBPACK_IMPORTED_MODULE_0__["default"])({
          faqItemsSelector: '.faq__item',
          faqBtnsSelector: '.question__open',
          faqAnswersSelector: '.answer',
          activeClass: 'faq__active',
          closeClass: 'question__close',
          showClass: 'answer__show',
          fadeClass: 'answer__fade'
     });
});
})();

/******/ })()
;
//# sourceMappingURL=faq.js.map