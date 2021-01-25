/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/__some/some.scss":
/*!*************************************!*\
  !*** ./src/blocks/__some/some.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/choice/choice.scss":
/*!***************************************!*\
  !*** ./src/blocks/choice/choice.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/collection/collection.scss":
/*!***********************************************!*\
  !*** ./src/blocks/collection/collection.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/contacts/contacts.scss":
/*!*******************************************!*\
  !*** ./src/blocks/contacts/contacts.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/footer/footer.scss":
/*!***************************************!*\
  !*** ./src/blocks/footer/footer.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/mission/mission.scss":
/*!*****************************************!*\
  !*** ./src/blocks/mission/mission.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/navbar/navbar.scss":
/*!***************************************!*\
  !*** ./src/blocks/navbar/navbar.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/registration/registration.scss":
/*!***************************************************!*\
  !*** ./src/blocks/registration/registration.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/fonts/montserrat/montserrat.css":
/*!*********************************************!*\
  !*** ./src/fonts/montserrat/montserrat.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/fonts/playfairDisplay/playfairDisplay.css":
/*!*******************************************************!*\
  !*** ./src/fonts/playfairDisplay/playfairDisplay.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks sync recursive \\.js$":
/*!********************************!*\
  !*** ./src/blocks/ sync \.js$ ***!
  \********************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => [];
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./src/blocks sync recursive \\.js$";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./src/blocks sync recursive \\.s?css$":
/*!***********************************!*\
  !*** ./src/blocks/ sync \.s?css$ ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./__some/some.scss": "./src/blocks/__some/some.scss",
	"./choice/choice.scss": "./src/blocks/choice/choice.scss",
	"./collection/collection.scss": "./src/blocks/collection/collection.scss",
	"./contacts/contacts.scss": "./src/blocks/contacts/contacts.scss",
	"./footer/footer.scss": "./src/blocks/footer/footer.scss",
	"./mission/mission.scss": "./src/blocks/mission/mission.scss",
	"./navbar/navbar.scss": "./src/blocks/navbar/navbar.scss",
	"./registration/registration.scss": "./src/blocks/registration/registration.scss"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/blocks sync recursive \\.s?css$";

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

requireAll(__webpack_require__("./src/fonts sync recursive \\.css$")); 

requireAll(__webpack_require__("./src/blocks sync recursive \\.s?css$")); 
requireAll(__webpack_require__("./src/blocks sync recursive \\.js$")); 

/***/ }),

/***/ "./src/fonts sync recursive \\.css$":
/*!********************************!*\
  !*** ./src/fonts/ sync \.css$ ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./montserrat/montserrat.css": "./src/fonts/montserrat/montserrat.css",
	"./playfairDisplay/playfairDisplay.css": "./src/fonts/playfairDisplay/playfairDisplay.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/fonts sync recursive \\.css$";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/entry.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vdXItZmFtaWx5Ly4vc3JjL2Jsb2Nrcy9fX3NvbWUvc29tZS5zY3NzIiwid2VicGFjazovL291ci1mYW1pbHkvLi9zcmMvYmxvY2tzL2Nob2ljZS9jaG9pY2Uuc2Nzcz81MTVmIiwid2VicGFjazovL291ci1mYW1pbHkvLi9zcmMvYmxvY2tzL2NvbGxlY3Rpb24vY29sbGVjdGlvbi5zY3NzPzg0MzUiLCJ3ZWJwYWNrOi8vb3VyLWZhbWlseS8uL3NyYy9ibG9ja3MvY29udGFjdHMvY29udGFjdHMuc2Nzcz8yZTM4Iiwid2VicGFjazovL291ci1mYW1pbHkvLi9zcmMvYmxvY2tzL2Zvb3Rlci9mb290ZXIuc2Nzcz9kZjRmIiwid2VicGFjazovL291ci1mYW1pbHkvLi9zcmMvYmxvY2tzL21pc3Npb24vbWlzc2lvbi5zY3NzPzYyY2EiLCJ3ZWJwYWNrOi8vb3VyLWZhbWlseS8uL3NyYy9ibG9ja3MvbmF2YmFyL25hdmJhci5zY3NzPzk2NjEiLCJ3ZWJwYWNrOi8vb3VyLWZhbWlseS8uL3NyYy9ibG9ja3MvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5zY3NzPzExZjEiLCJ3ZWJwYWNrOi8vb3VyLWZhbWlseS8uL3NyYy9mb250cy9tb250c2VycmF0L21vbnRzZXJyYXQuY3NzP2M3YTgiLCJ3ZWJwYWNrOi8vb3VyLWZhbWlseS8uL3NyYy9mb250cy9wbGF5ZmFpckRpc3BsYXkvcGxheWZhaXJEaXNwbGF5LmNzcz85YTcxIiwid2VicGFjazovL291ci1mYW1pbHkvLi9zcmMvc3R5bGUuc2Nzcz9iYzNiIiwid2VicGFjazovL291ci1mYW1pbHkvLi9zcmMvYmxvY2tzfHN5bmN8Ly5qcyQiLCJ3ZWJwYWNrOi8vb3VyLWZhbWlseS8uL3NyYy9ibG9ja3N8c3luY3wvLnMiLCJ3ZWJwYWNrOi8vb3VyLWZhbWlseS8uL3NyYy9lbnRyeS5qcyIsIndlYnBhY2s6Ly9vdXItZmFtaWx5Ly4vc3JjL2ZvbnRzfHN5bmN8Ly5jc3MkIiwid2VicGFjazovL291ci1mYW1pbHkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb3VyLWZhbWlseS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL291ci1mYW1pbHkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vdXItZmFtaWx5L3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDOzs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RDs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyx5REFBd0MsRTtBQUM3QjtBQUN0QixXQUFXLDREQUEyQyxFO0FBQ3RELFdBQVcseURBQXdDLEU7Ozs7Ozs7Ozs7QUNQbkQ7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RDs7Ozs7O1VDdkJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSAoKSA9PiBbXTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL3NyYy9ibG9ja3Mgc3luYyByZWN1cnNpdmUgXFxcXC5qcyRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5Q29udGV4dDsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vX19zb21lL3NvbWUuc2Nzc1wiOiBcIi4vc3JjL2Jsb2Nrcy9fX3NvbWUvc29tZS5zY3NzXCIsXG5cdFwiLi9jaG9pY2UvY2hvaWNlLnNjc3NcIjogXCIuL3NyYy9ibG9ja3MvY2hvaWNlL2Nob2ljZS5zY3NzXCIsXG5cdFwiLi9jb2xsZWN0aW9uL2NvbGxlY3Rpb24uc2Nzc1wiOiBcIi4vc3JjL2Jsb2Nrcy9jb2xsZWN0aW9uL2NvbGxlY3Rpb24uc2Nzc1wiLFxuXHRcIi4vY29udGFjdHMvY29udGFjdHMuc2Nzc1wiOiBcIi4vc3JjL2Jsb2Nrcy9jb250YWN0cy9jb250YWN0cy5zY3NzXCIsXG5cdFwiLi9mb290ZXIvZm9vdGVyLnNjc3NcIjogXCIuL3NyYy9ibG9ja3MvZm9vdGVyL2Zvb3Rlci5zY3NzXCIsXG5cdFwiLi9taXNzaW9uL21pc3Npb24uc2Nzc1wiOiBcIi4vc3JjL2Jsb2Nrcy9taXNzaW9uL21pc3Npb24uc2Nzc1wiLFxuXHRcIi4vbmF2YmFyL25hdmJhci5zY3NzXCI6IFwiLi9zcmMvYmxvY2tzL25hdmJhci9uYXZiYXIuc2Nzc1wiLFxuXHRcIi4vcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5zY3NzXCI6IFwiLi9zcmMvYmxvY2tzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uc2Nzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9ibG9ja3Mgc3luYyByZWN1cnNpdmUgXFxcXC5zP2NzcyRcIjsiLCJmdW5jdGlvbiByZXF1aXJlQWxsKHJlcXVpcmVDb250ZXh0KSB7XHJcbiAgICByZXR1cm4gcmVxdWlyZUNvbnRleHQua2V5cygpLm1hcChyZXF1aXJlQ29udGV4dCk7XHJcbn1cclxuXHJcbnJlcXVpcmVBbGwocmVxdWlyZS5jb250ZXh0KCdGb250cycsIHRydWUsIC9cXC5jc3MkLykpOyBcclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5yZXF1aXJlQWxsKHJlcXVpcmUuY29udGV4dCgnQmxvY2tzJywgdHJ1ZSwgL1xcLnM/Y3NzJC8pKTsgXHJcbnJlcXVpcmVBbGwocmVxdWlyZS5jb250ZXh0KCdCbG9ja3MnLCB0cnVlLCAvXFwuanMkLykpOyAiLCJ2YXIgbWFwID0ge1xuXHRcIi4vbW9udHNlcnJhdC9tb250c2VycmF0LmNzc1wiOiBcIi4vc3JjL2ZvbnRzL21vbnRzZXJyYXQvbW9udHNlcnJhdC5jc3NcIixcblx0XCIuL3BsYXlmYWlyRGlzcGxheS9wbGF5ZmFpckRpc3BsYXkuY3NzXCI6IFwiLi9zcmMvZm9udHMvcGxheWZhaXJEaXNwbGF5L3BsYXlmYWlyRGlzcGxheS5jc3NcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvZm9udHMgc3luYyByZWN1cnNpdmUgXFxcXC5jc3MkXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZW50cnkuanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9