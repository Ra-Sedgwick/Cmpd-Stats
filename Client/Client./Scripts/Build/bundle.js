/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NetworkService__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DemographicSearch__ = __webpack_require__(4);



//NetworkService.getDemographics()
//    .then(data => {
//        console.log("Get All Demographics");
//        console.log(data);
//    })
//    .catch(error => {
//        console.log(error);
//    });


//NetworkService.getDemographic(1)
//    .then(data => {
//        console.log("Get Demographic id = 1");
//        console.log(data);
//    })
//    .catch(error => {
//        console.log(error);
//    });

//NetworkService.getDemographicsOrdered('officerExperience', 'descending')
//    .then(data => {
//        console.log("Order Demographics by experience DESC");
//        console.log(data);
//    })
//    .catch(error => {
//        console.log(error);
//    });


let demoSearch = new __WEBPACK_IMPORTED_MODULE_1__DemographicSearch__["a" /* default */](null, null, null, 26, 26, null, null);
console.log("Search: " + demoSearch.ageMax + ", " + demoSearch.ageMax);
__WEBPACK_IMPORTED_MODULE_0__NetworkService__["a" /* default */].getDemographicsSearch(demoSearch).then(data => {
    console.log("Search Demographics");
    console.log(data);
}).catch(error => {
    console.log(error);
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__APIService__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__APIService___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__APIService__);


// Base URLS
const baseURL = 'http://localhost:55981/api';
const demographics = '/EmployeeDemographics';

const prod = 'http://cmpdstatistics.azurewebsites.net/api/';
const test = 'https://jsonplaceholder.typicode.com/posts';

class NetworkService {

    getDemographics() {
        const url = `${baseURL}/${demographics}`;
        return __WEBPACK_IMPORTED_MODULE_0__APIService___default.a.getData(url);
    }

    getDemographic(id) {
        const url = `${baseURL}/${demographics}/${id}`;
        return __WEBPACK_IMPORTED_MODULE_0__APIService___default.a.getData(url);
    }

    getDemographicsOrdered(action, order) {
        const url = `${baseURL}/${demographics}?action=${action}&order=${order}`;
        return __WEBPACK_IMPORTED_MODULE_0__APIService___default.a.getData(url);
    }

    getDemographicsSearch(options) {
        const queryArguments = [];
        let query = "";

        if (options.title != undefined) queryArguments.push(`title=${options.title}`);

        if (options.experienceMin != undefined) queryArguments.push(`experienceMin=${options.experienceMin}`);

        if (options.experienceMax != undefined) queryArguments.push(`experienceMax=${options.experienceMax}`);

        if (options.ageMin != undefined) queryArguments.push(`ageMin=${options.ageMin}`);

        if (options.ageMax != undefined) queryArguments.push(`ageMax=${options.ageMax}`);

        if (options.gender != undefined) queryArguments.push(`gender=${options.gender}`);

        if (options.race != undefined) queryArguments.push(`race=${options.race}`);

        if (queryArguments.length > 0) {

            query += `/search?${queryArguments.pop()}`;

            if (queryArguments.length > 0) queryArguments.forEach(q => query += `&${q}`);
        }

        const url = `${baseURL}/${demographics}/${query}`;
        console.log(url);
        return __WEBPACK_IMPORTED_MODULE_0__APIService___default.a.getData(url);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (new NetworkService());

/***/ }),
/* 3 */
/***/ (function(module, exports) {

class APIService {

    async getData(endpoint) {

        var request = new Request({
            method: 'GET',
            mode: 'cors',
            redirect: 'follow',
            headers: new Headers({
                'Content-Type': 'application/javascript',
                'Access-Control-Allow-Origin': '*'
            })
        });

        let response = await fetch(endpoint, request);

        if (response.ok) return await response.json();else throw new Error(response.status);
    }

}

module.exports = new APIService();

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class DemographicSearch {
    constructor(_title, _experienceMin, _experienceMax, _ageMin, _ageMax, _gender, _race) {
        this.title = _title;
        this.experienceMin = _experienceMin;
        this.experienceMax = _experienceMax;
        this.ageMin = _ageMin;
        this.ageMax = _ageMax;
        this.gender = _gender;
        this.race = _race;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (DemographicSearch);

/***/ })
/******/ ]);