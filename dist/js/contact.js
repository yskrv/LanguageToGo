/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!***************************!*\
  !*** ./app/js/contact.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_phone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/phone */ "./app/js/modules/phone.js");
/* harmony import */ var _modules_register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/register */ "./app/js/modules/register.js");



window.addEventListener('DOMContentLoaded', () => {
     (0,_modules_phone__WEBPACK_IMPORTED_MODULE_0__["default"])({
          inputSelector: '#phone__input'
     });
     (0,_modules_register__WEBPACK_IMPORTED_MODULE_1__["default"])({
          closeBtnsSelector: '.close__btn',
          lessonPopUpSelector: '#support__modal',
          formSelector: '.form',
          formInputsSelector: 'input[type="text"], textarea, input[type="tel"]'
     });
});
})();

/******/ })()
;
//# sourceMappingURL=contact.js.map