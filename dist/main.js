/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://dash/./src/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\r\n\r\n\t\t\tfunction getParameterByName(name) {\r\n\t\t\t\tname = name.replace(/[\\[]/, \"\\\\[\").replace(/[\\]]/, \"\\\\]\");\r\n\t\t\t\tvar regex = new RegExp(\"[\\\\?&]\" + name + \"=([^&#]*)\"),\r\n\t\t\t\tresults = regex.exec(location.search);\r\n\t\t\t\treturn results === null ? \"\" : decodeURIComponent(results[1].replace(/\\+/g, \" \"));\r\n\t\t\t}\t\t\r\n\t\t\tfunction updateRoleName(){\r\n                var prefs = gadgets.views.getParams(); console.log(prefs);\r\n\t\t\t\tvar userId = prefs.sabaContext.userId; console.log(userId);\r\n\t\t\t\tvar userName = prefs.sabaContext.userName; console.log(userName);\r\n                var apiCertificate = prefs.sabaContext.apiCertificate; console.log(apiCertificate);\r\n\t\t\t\tvar certificate=prefs.sabaContext.certificate; console.log(certificate);\r\n\t\t\t\tvar sabaLocale=prefs.sabaContext.sabaLocale; console.log(sabaLocale);\r\n\t\t\t\tvar urlHost = parent.location;  console.log(urlHost);\r\n\t\t\t\turlHost=urlHost.toString(); \r\n\t\t\t\tvar n= urlHost.indexOf(\".\"); \r\n\t\t\t\tvar prefix=urlHost.substring(0,n);\r\n\t\t\t\tvar m=urlHost.indexOf('/Saba');\r\n\t\t\t\tvar postfix=urlHost.substring(n,m);\r\n\t\t\t\tvar url=prefix+\"-api\"+postfix+\"/v1/people/\"+userId; console.log(url);\r\n\t\t\t\tvar params = {};\t\t\r\n\r\n\t\t\t\tvar headers = {\t\"SabaCertificate\":apiCertificate };\r\n\t\t\t\tparams[gadgets.io.RequestParameters.HEADERS] = headers;\r\n\t\t\t\tparams[gadgets.io.RequestParameters.CONTENT_TYPE] = \"application/json;charset=UTF-8\";\r\n\t\t\t\tparams[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.GET; \r\n\t\t\t\t\tconsole.log(params);\r\n              \t\tgadgets.io.makeRequest(url, result, params);\r\n console.log(url);\r\n\r\n};\r\n   \r\nfunction result(obj) {\r\n\tconst res = JSON.parse(obj.text);\r\n\t\tconsole.log(res);\r\n\r\nif (res.is_manager === true) {\r\n\tvar item = document.createElement(\"div\");\r\n\titem.setAttribute(\"id\",\"Team\");\r\n item.innerHTML = \"<p>I'm a Leader</p>\";\r\ndocument.getElementById(\"Completed\").appendChild(item);\r\n\r\n\tvar prefs = gadgets.views.getParams(); console.log(prefs);\r\n\t\t\t\tvar userId = prefs.sabaContext.userId; console.log(userId);\r\n\t\t\t\tvar userName = prefs.sabaContext.userName; console.log(userName);\r\n                var apiCertificate = prefs.sabaContext.apiCertificate; console.log(apiCertificate);\r\n\t\t\t\tvar certificate=prefs.sabaContext.certificate; console.log(certificate);\r\n\t\t\t\tvar sabaLocale=prefs.sabaContext.sabaLocale; console.log(sabaLocale);\r\n\t\t\t\tvar urlHost = parent.location;  console.log(urlHost);\r\n\t\t\t\turlHost=urlHost.toString(); \r\n\t\t\t\tvar n= urlHost.indexOf(\".\"); \r\n\t\t\t\tvar prefix=urlHost.substring(0,n);\r\n\t\t\t\tvar m=urlHost.indexOf('/Saba');\r\n\t\t\t\tvar postfix=urlHost.substring(n,m);\r\n\t\t\t\tvar url=prefix+\"-api\"+postfix+\"/v1/people?type=internal&q=(manager_id%3D%3D\"+userId+\",status%3D%3DActive)&includeDetails=true\"; console.log(url);\r\n\t\t\t\tvar params = {};\t\t\r\n\r\n\t\t\t\tvar headers = {\t\"SabaCertificate\":apiCertificate };\r\n\t\t\t\tparams[gadgets.io.RequestParameters.HEADERS] = headers;\r\n\t\t\t\tparams[gadgets.io.RequestParameters.CONTENT_TYPE] = \"application/json;charset=UTF-8\";\r\n\t\t\t\tparams[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.GET; \r\n\t\t\t\t\tconsole.log(params);\r\n              \t\tgadgets.io.makeRequest(url, tms, params);\r\n console.log(url);\r\n\t\r\n\tfunction tms(x) {\r\n\t\tconst Tm = JSON.parse(x.text);\r\n\t\t\tconsole.log(Tm);\r\n\t\t\tvar arr = Tm.results;\r\n\t\tconsole.log(arr);\r\n\t\tarr.forEach(result);\r\n\t\r\n//creates html div card for each results\r\n\t\t\r\n\t\tfunction result(currentValue, index) {\r\n\t\t\tvar item = document.createElement(\"ul\");\r\n\t\t\titem.innerHTML =\"<li><a href='https://drive.rockfin.com/LeaderGoal?TeamMemberCommonId=\"+currentValue.username+\"&viewType=AllGoals' target='_blank'>\"+currentValue.fname+\" \"+currentValue.lname+\"</a></li>\";\r\n\t\t\tdocument.getElementById(\"Team\").appendChild(item);\r\n}};\r\n\t\r\n}\r\n\r\nelse {\r\n\tvar item = document.createElement(\"div\");\r\n \titem.innerHTML = \"<p>I'm a Team Member</p>\";\r\ndocument.getElementById(\"Completed\").appendChild(item);\r\n}\r\n\r\n/*\tvar arr = res.results;\r\n\t\tconsole.log(arr);\r\n\tarr.forEach(result);\r\n\t\r\n//creates html div card for each results\r\n\t\t\r\n\t\tfunction result(currentValue, index) {\r\n\t\t\tvar item = document.createElement(\"div\");\r\n\t\t\titem.setAttribute(\"class\",\"sprk-o-Stack__item sprk-o-Stack__item--flex@l sprk-c-Card sprk-o-Stack\");\r\n\t\t\titem.innerHTML =\"<a href='#nogo' class='sprk-o-Stack__item'><img class='sprk-c-Card__media' alt='Learn more' src='https://spark-assets.netlify.app/desktop.jpg'></a><div class='sprk-o-Stack__item sprk-c-Card__content sprk-o-Stack sprk-o-Stack--large'><h3 class='sprk-b-TypeDisplayFive sprk-o-Stack__item'>\"+currentValue.offering_temp_id.displayName+\"</h3><p class='sprk-b-TypeBodyTwo sprk-o-Stack__item'><b>Completed On:</b>\"+currentValue.completion_date+\"</p><div class='sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--end-column'><a href='https://quickenloanssb.sabacloud.com/Saba/Web_spf/NA6T1SNB076/app/me/learningeventdetail/\"+currentValue.offering_temp_id.id+\"' class='sprk-o-Stack__item sprk-b-Link sprk-b-Link--has-icon'>Review<svg class='sprk-c-Icon' viewBox='0 0 64 64'><use xlink:href='#arrow-right' /></svg></a></div></div>\";\r\n\t\t\tdocument.getElementById(\"Completed\").appendChild(item);\r\n\t\t\t\t\r\n\t\t\tconsole.log(\"Index in array is: \"+index+\" :: Value is: \" +currentValue.offering_temp_id.displayName);\r\n\r\n\t\r\n}\r\n*/\t\r\n};\r\n\r\n(document); \n\n//# sourceURL=webpack://dash/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;