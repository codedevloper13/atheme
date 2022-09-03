/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/helpers/strip-tags.js":
/*!*********************************************!*\
  !*** ./src/assets/js/helpers/strip-tags.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var strip_tags = function strip_tags(input, allowed) {
  allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)

  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
      commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
  return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
    return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (strip_tags);

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = jQuery;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!********************************************!*\
  !*** ./src/assets/js/customize-preview.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_strip_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/strip-tags */ "./src/assets/js/helpers/strip-tags.js");
/**
 * File customizcustomizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */


wp.customize('_themename_site_info', function (value) {
  value.bind(function (to) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-site-info__text').html((0,_helpers_strip_tags__WEBPACK_IMPORTED_MODULE_1__["default"])(to, '<a>'));
  });
});
wp.customize('blogname', function (value) {
  value.bind(function (to) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-header__blogname').html(to);
  });
}); // Theme Accent Color Customizer 
// wp.customize('_themename_accent_color' ,(value)=>{
//     value.bind((to)=>{
//         let inline_css=``;
//         let inline_css_obj =_themename['inline-css'];
//         for(let selector in inline_css_obj ){
//             inline_css +=`${selector} { `;
//             for (let prop in inline_css_obj[selector] ) {
//                 let val= inline_css_obj[selector][prop];
//                  inline_css +=`${prop}: ${wp.customize(val).get()}`;
//             }
//              inline_css +=`}`;
//              console.log('hello');
//         }
//         $('#_themename-stylesheet-inline-css').html(inline_css);
//     })
// })

wp.customize('_themename_accent_color', function (value) {
  value.bind(function (to) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#_themename-stylesheet-inline-css').html("\n        a{\n        color: ".concat(to, "\n            }\n            \n            :focus{\n                outline-color: ").concat(to, "\n            }\n            .c-post.sticky{\n            border-left-color: ").concat(to, "\n            }\n            button, input[type='submit'] { \n                background-color:").concat(to, "\n            }\n            .header-nav .menu > .menu-item:not(.mega) .sub-menu .menu-item:hover > a {\n                background: ").concat(to, "\n            }\n            .header-nav .menu > .menu-item.mega > .sub-menu > .menu-item > .sub-menu a:hover {\n            color: ").concat(to, "\n            }\n            .header-nav .menu > .menu-item.mega > .sub-menu > .menu-item > a:hover {\n            color: ").concat(to, "\n            }\n        "));
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9taXplLXByZXZpZXcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7RUFDbkNBLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQ0EsT0FBTyxJQUFJLEVBQVosSUFBa0IsRUFBbkIsRUFDVkMsV0FEVSxHQUVWQyxLQUZVLENBRUosbUJBRkksS0FFb0IsRUFGckIsRUFHVEMsSUFIUyxDQUdKLEVBSEksQ0FBVixDQURtQyxDQUl4Qjs7RUFDWCxJQUFJQyxJQUFJLEdBQUcsZ0NBQVg7RUFBQSxJQUNBQyxrQkFBa0IsR0FBRywwQ0FEckI7RUFFQSxPQUFPTixLQUFLLENBQUNPLE9BQU4sQ0FBY0Qsa0JBQWQsRUFBa0MsRUFBbEMsRUFDTkMsT0FETSxDQUNFRixJQURGLEVBQ1EsVUFBU0csRUFBVCxFQUFhQyxFQUFiLEVBQWlCO0lBQzlCLE9BQU9SLE9BQU8sQ0FBQ1MsT0FBUixDQUFnQixNQUFNRCxFQUFFLENBQUNQLFdBQUgsRUFBTixHQUF5QixHQUF6QyxJQUFnRCxDQUFDLENBQWpELEdBQXFETSxFQUFyRCxHQUEwRCxFQUFqRTtFQUNELENBSE0sQ0FBUDtBQUlILENBWEQ7O0FBYUEsaUVBQWVULFVBQWY7Ozs7Ozs7Ozs7QUNiQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUFhLEVBQUUsQ0FBQ0MsU0FBSCxDQUFhLHNCQUFiLEVBQXFDLFVBQUNDLEtBQUQsRUFBUztFQUMxQ0EsS0FBSyxDQUFDQyxJQUFOLENBQVcsVUFBQ0MsRUFBRCxFQUFNO0lBQ2JMLDZDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3Qk0sSUFBeEIsQ0FBNkJsQiwrREFBVSxDQUFDaUIsRUFBRCxFQUFJLEtBQUosQ0FBdkM7RUFDSCxDQUZEO0FBR0gsQ0FKRDtBQU1BSixFQUFFLENBQUNDLFNBQUgsQ0FBYSxVQUFiLEVBQXlCLFVBQUNDLEtBQUQsRUFBUztFQUM5QkEsS0FBSyxDQUFDQyxJQUFOLENBQVcsVUFBQ0MsRUFBRCxFQUFNO0lBQ2JMLDZDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5Qk0sSUFBekIsQ0FBOEJELEVBQTlCO0VBQ0gsQ0FGRDtBQUdILENBSkQsR0FRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBSixFQUFFLENBQUNDLFNBQUgsQ0FBYSx5QkFBYixFQUF3QyxVQUFDQyxLQUFELEVBQVM7RUFDN0NBLEtBQUssQ0FBQ0MsSUFBTixDQUFXLFVBQUNDLEVBQUQsRUFBTTtJQUNiTCw2Q0FBQyxDQUFDLG1DQUFELENBQUQsQ0FBdUNNLElBQXZDLHdDQUVTRCxFQUZULGdHQU15QkEsRUFOekIsMEZBU3lCQSxFQVR6Qiw0R0FZMkJBLEVBWjNCLGtKQWVzQkEsRUFmdEIsaUpBa0JhQSxFQWxCYix1SUFxQmFBLEVBckJiO0VBd0JILENBekJEO0FBMEJILENBM0JELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdGhlbWUvLi9zcmMvYXNzZXRzL2pzL2hlbHBlcnMvc3RyaXAtdGFncy5qcyIsIndlYnBhY2s6Ly9hdGhlbWUvZXh0ZXJuYWwgdmFyIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vYXRoZW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2F0aGVtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hdGhlbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2F0aGVtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2F0aGVtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2F0aGVtZS8uL3NyYy9hc3NldHMvanMvY3VzdG9taXplLXByZXZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3RyaXBfdGFncyA9IChpbnB1dCwgYWxsb3dlZCkgPT4ge1xuICAgIGFsbG93ZWQgPSAoKChhbGxvd2VkIHx8ICcnKSArICcnKVxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLm1hdGNoKC88W2Etel1bYS16MC05XSo+L2cpIHx8IFtdKVxuICAgIC5qb2luKCcnKTsgLy8gbWFraW5nIHN1cmUgdGhlIGFsbG93ZWQgYXJnIGlzIGEgc3RyaW5nIGNvbnRhaW5pbmcgb25seSB0YWdzIGluIGxvd2VyY2FzZSAoPGE+PGI+PGM+KVxuICAgIHZhciB0YWdzID0gLzxcXC8/KFthLXpdW2EtejAtOV0qKVxcYltePl0qPi9naSxcbiAgICBjb21tZW50c0FuZFBocFRhZ3MgPSAvPCEtLVtcXHNcXFNdKj8tLT58PFxcPyg/OnBocCk/W1xcc1xcU10qP1xcPz4vZ2k7XG4gICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoY29tbWVudHNBbmRQaHBUYWdzLCAnJylcbiAgICAucmVwbGFjZSh0YWdzLCBmdW5jdGlvbigkMCwgJDEpIHtcbiAgICAgIHJldHVybiBhbGxvd2VkLmluZGV4T2YoJzwnICsgJDEudG9Mb3dlckNhc2UoKSArICc+JykgPiAtMSA/ICQwIDogJyc7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmlwX3RhZ3M7IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxuICogRmlsZSBjdXN0b21pemN1c3RvbWl6ZXIuanMuXG4gKlxuICogVGhlbWUgQ3VzdG9taXplciBlbmhhbmNlbWVudHMgZm9yIGEgYmV0dGVyIHVzZXIgZXhwZXJpZW5jZS5cbiAqXG4gKiBDb250YWlucyBoYW5kbGVycyB0byBtYWtlIFRoZW1lIEN1c3RvbWl6ZXIgcHJldmlldyByZWxvYWQgY2hhbmdlcyBhc3luY2hyb25vdXNseS5cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHN0cmlwX3RhZ3MgZnJvbSAnLi9oZWxwZXJzL3N0cmlwLXRhZ3MnO1xuXG53cC5jdXN0b21pemUoJ190aGVtZW5hbWVfc2l0ZV9pbmZvJyAsKHZhbHVlKT0+e1xuICAgIHZhbHVlLmJpbmQoKHRvKT0+e1xuICAgICAgICAkKCcuYy1zaXRlLWluZm9fX3RleHQnKS5odG1sKHN0cmlwX3RhZ3ModG8sJzxhPicpKTtcbiAgICB9KVxufSlcblxud3AuY3VzdG9taXplKCdibG9nbmFtZScgLCh2YWx1ZSk9PntcbiAgICB2YWx1ZS5iaW5kKCh0byk9PntcbiAgICAgICAgJCgnLmMtaGVhZGVyX19ibG9nbmFtZScpLmh0bWwodG8pO1xuICAgIH0pXG59KVxuXG5cblxuLy8gVGhlbWUgQWNjZW50IENvbG9yIEN1c3RvbWl6ZXIgXG5cbi8vIHdwLmN1c3RvbWl6ZSgnX3RoZW1lbmFtZV9hY2NlbnRfY29sb3InICwodmFsdWUpPT57XG4vLyAgICAgdmFsdWUuYmluZCgodG8pPT57XG4vLyAgICAgICAgIGxldCBpbmxpbmVfY3NzPWBgO1xuLy8gICAgICAgICBsZXQgaW5saW5lX2Nzc19vYmogPV90aGVtZW5hbWVbJ2lubGluZS1jc3MnXTtcbi8vICAgICAgICAgZm9yKGxldCBzZWxlY3RvciBpbiBpbmxpbmVfY3NzX29iaiApe1xuLy8gICAgICAgICAgICAgaW5saW5lX2NzcyArPWAke3NlbGVjdG9yfSB7IGA7XG4vLyAgICAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGlubGluZV9jc3Nfb2JqW3NlbGVjdG9yXSApIHtcbi8vICAgICAgICAgICAgICAgICBsZXQgdmFsPSBpbmxpbmVfY3NzX29ialtzZWxlY3Rvcl1bcHJvcF07XG4vLyAgICAgICAgICAgICAgICAgIGlubGluZV9jc3MgKz1gJHtwcm9wfTogJHt3cC5jdXN0b21pemUodmFsKS5nZXQoKX1gO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgIGlubGluZV9jc3MgKz1gfWA7XG5cbi8vICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaGVsbG8nKTtcbiAgICAgICAgICBcbi8vICAgICAgICAgfVxuLy8gICAgICAgICAkKCcjX3RoZW1lbmFtZS1zdHlsZXNoZWV0LWlubGluZS1jc3MnKS5odG1sKGlubGluZV9jc3MpO1xuLy8gICAgIH0pXG4vLyB9KVxuXG53cC5jdXN0b21pemUoJ190aGVtZW5hbWVfYWNjZW50X2NvbG9yJyAsKHZhbHVlKT0+e1xuICAgIHZhbHVlLmJpbmQoKHRvKT0+e1xuICAgICAgICAkKCcjX3RoZW1lbmFtZS1zdHlsZXNoZWV0LWlubGluZS1jc3MnKS5odG1sKGBcbiAgICAgICAgYXtcbiAgICAgICAgY29sb3I6ICR7dG99XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDpmb2N1c3tcbiAgICAgICAgICAgICAgICBvdXRsaW5lLWNvbG9yOiAke3RvfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmMtcG9zdC5zdGlja3l7XG4gICAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogJHt0b31cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbiwgaW5wdXRbdHlwZT0nc3VibWl0J10geyBcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiR7dG99XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVhZGVyLW5hdiAubWVudSA+IC5tZW51LWl0ZW06bm90KC5tZWdhKSAuc3ViLW1lbnUgLm1lbnUtaXRlbTpob3ZlciA+IGEge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dG99XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVhZGVyLW5hdiAubWVudSA+IC5tZW51LWl0ZW0ubWVnYSA+IC5zdWItbWVudSA+IC5tZW51LWl0ZW0gPiAuc3ViLW1lbnUgYTpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogJHt0b31cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWFkZXItbmF2IC5tZW51ID4gLm1lbnUtaXRlbS5tZWdhID4gLnN1Yi1tZW51ID4gLm1lbnUtaXRlbSA+IGE6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICR7dG99XG4gICAgICAgICAgICB9XG4gICAgICAgIGApO1xuICAgIH0pXG59KSJdLCJuYW1lcyI6WyJzdHJpcF90YWdzIiwiaW5wdXQiLCJhbGxvd2VkIiwidG9Mb3dlckNhc2UiLCJtYXRjaCIsImpvaW4iLCJ0YWdzIiwiY29tbWVudHNBbmRQaHBUYWdzIiwicmVwbGFjZSIsIiQwIiwiJDEiLCJpbmRleE9mIiwiJCIsIndwIiwiY3VzdG9taXplIiwidmFsdWUiLCJiaW5kIiwidG8iLCJodG1sIl0sInNvdXJjZVJvb3QiOiIifQ==