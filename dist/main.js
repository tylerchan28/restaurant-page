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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _siteModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./siteModule.js */ \"./src/siteModule.js\");\n\n\n(0,_siteModule_js__WEBPACK_IMPORTED_MODULE_0__.startSite)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menuModule.js":
/*!***************************!*\
  !*** ./src/menuModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuModule\": () => (/* binding */ menuModule)\n/* harmony export */ });\nfunction makeMenu() {\n    const menu = document.createElement(`div`);\n    menu.classList.add(`menu`);\n\n    menu.appendChild(addItem(\"Weenie Weenie\", `Two 6 oz. weenies with your choice of toppings`));\n    menu.appendChild(addItem(\"Mega Weenie\", `14 oz. weenie with your choice of toppings`));\n    menu.appendChild(addItem(\"Monster Weenie\", `36 oz weenie with your choice of toppings`));\n    \n    const options = document.createElement(`p`);\n    options.textContent = `Weenie options too big? Come to Super Weenie Hut Jr's for smaller weenies!`\n    options.classList.add(`options`);\n    menu.appendChild(options);\n    \n    return menu;\n}\n\nfunction addItem(name, description) {\n    const foodItem = document.createElement(`div`);\n\n    const itemName = document.createElement(`h1`);\n    itemName.textContent = name;\n\n    const itemDescription = document.createElement(`h3`);\n    itemDescription.textContent = description;\n    itemDescription.style.color = \"#ff7f7f\";\n    itemDescription.textContent = description;\n    \n    const itemImage = document.createElement(`img`);\n    itemImage.src = `./images/${name}.png`;\n    itemImage.style.height = `200px`;\n    itemImage.style.width = `300px`;\n    itemImage.classList.add(`food-item`);\n    \n    foodItem.appendChild(itemName);\n    foodItem.appendChild(itemDescription);\n    foodItem.appendChild(itemImage);\n\n    return foodItem;\n}\n\nfunction menuModule() {\n    const mainContent = document.getElementById(`main`);\n    mainContent.textContent = \"\";\n    mainContent.appendChild(makeMenu());\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menuModule.js?");

/***/ }),

/***/ "./src/onLoadModule.js":
/*!*****************************!*\
  !*** ./src/onLoadModule.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onLoadModules\": () => (/* binding */ onLoadModules)\n/* harmony export */ });\nfunction onLoadFunctions() {\n    const homePage = document.createElement(`div`);\n    \n    const pageImage = document.createElement(`img`);\n    pageImage.src = `./images/weenie.png`;\n    \n    \n    homePage.classList.add(`home-page`)\n    pageImage.classList.add(`page-image`);\n    \n    homePage.appendChild(pageImage);\n    homePage.appendChild(pageText(`Welcome to Weenie Hut Jr's!`));\n    homePage.appendChild(pageText(`Est. 2002`));\n    homePage.appendChild(pageText(`Only in Bikini Bottom`));\n    return homePage;\n\n}\n\nfunction pageText(words) {\n    const text = document.createElement(`p`);\n    text.textContent = words;\n    return text;\n}\n\nfunction onLoadModules() {\n    const mainContent = document.getElementById(`main`);\n    mainContent.textContent = \"\";\n    mainContent.appendChild(onLoadFunctions());\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/onLoadModule.js?");

/***/ }),

/***/ "./src/siteModule.js":
/*!***************************!*\
  !*** ./src/siteModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startSite\": () => (/* binding */ startSite)\n/* harmony export */ });\n/* harmony import */ var _onLoadModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onLoadModule.js */ \"./src/onLoadModule.js\");\n/* harmony import */ var _specialsModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./specialsModule.js */ \"./src/specialsModule.js\");\n/* harmony import */ var _menuModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuModule.js */ \"./src/menuModule.js\");\n\n\n\n\nfunction makeHeader() {\n    const siteHeader = document.createElement(`header`);\n    siteHeader.classList.add(`site-header`);\n\n    const siteName = document.createElement(`h1`);\n    siteName.classList.add(`name`);\n    siteName.textContent = `Weenie Hut Jr's`;\n\n    siteHeader.appendChild(siteName);\n    siteHeader.appendChild(makeTabs());\n\n    return siteHeader;\n}\n\nfunction makeMain() {\n    const main = document.createElement(`div`);\n    main.setAttribute(`id`, `main`);\n    return main;\n}\n\nfunction makeTabs() {\n    const tabs = document.createElement(`div`);\n    tabs.classList.add(`tabs-container`);\n\n    const homePageButton = document.createElement(`button`);\n    homePageButton.classList.add(`header-buttons`);\n    homePageButton.textContent = `Home`;\n    homePageButton.addEventListener(`click`, _onLoadModule_js__WEBPACK_IMPORTED_MODULE_0__.onLoadModules);\n\n    \n    const menuButton = document.createElement(`button`);\n    menuButton.classList.add(`header-buttons`);\n    menuButton.textContent = `Menu`;\n    menuButton.addEventListener(`click`, _menuModule_js__WEBPACK_IMPORTED_MODULE_2__.menuModule);\n\n    const specialsButton = document.createElement(`button`);\n    specialsButton.classList.add(`header-buttons`);\n    specialsButton.textContent = `Specials`;\n    specialsButton.addEventListener(`click`, _specialsModule_js__WEBPACK_IMPORTED_MODULE_1__.specialsModule);\n\n    tabs.appendChild(homePageButton);\n    tabs.appendChild(menuButton);\n    tabs.appendChild(specialsButton);\n\n    return tabs;\n}\n\nfunction startSite() {\n    const contentDiv = document.getElementById(`content`);\n\n    contentDiv.appendChild(makeHeader());\n    contentDiv.appendChild(makeMain());\n\n    (0,_onLoadModule_js__WEBPACK_IMPORTED_MODULE_0__.onLoadModules)();\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/siteModule.js?");

/***/ }),

/***/ "./src/specialsModule.js":
/*!*******************************!*\
  !*** ./src/specialsModule.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"specialsModule\": () => (/* binding */ specialsModule)\n/* harmony export */ });\nfunction addSpecials() {\n    const specialDiv = document.createElement(`div`);\n    specialDiv.classList.add(`special-div`);\n    \n    specialDiv.appendChild(addText(`Monster Weenie Monday`, `Free upgrade to a Monster Weenie!`));\n    specialDiv.appendChild(addText(`Double Weenie Wednesday`, `Buy one weenie, get a second free!`));\n    specialDiv.appendChild(addText(`Mega Weenie Sunday`, `Mega Weenies half off!`));\n\n    return specialDiv;\n}\n\nfunction addText(words, description) {\n    const newSpecial = document.createElement(`p`);\n    newSpecial.textContent = words;\n\n    const itemDescription = document.createElement(`h1`);\n    itemDescription.textContent = description;\n    itemDescription.style.fontSize = \"18px\";\n    itemDescription.style.textAlign = \"center\";\n    itemDescription.style.color = \"#ff7f7f\";\n\n    newSpecial.appendChild(itemDescription);\n    \n    return newSpecial;\n}\n\nfunction specialsModule() {\n    const mainContent = document.getElementById(`main`);\n    mainContent.textContent = ``;\n    mainContent.appendChild(addSpecials());\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/specialsModule.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;