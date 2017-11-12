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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TrafficSearch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ShootingSearch__ = __webpack_require__(6);





//NetworkService.getOfficerShootingsOrdered('date', 'descending')
//    .then(data => {
//        console.log("Get Stops ordered by date");
//        console.log(data);
//    })
//    .catch(error => {
//        console.log(error);
//    });

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__APIService__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__APIService___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__APIService__);


// Base URLS
const baseURL = 'http://localhost:55981/api';
const demographics = '/EmployeeDemographics';
const stops = '/TrafficStops';
const shootings = '/OfficerShootings';

const prod = 'http://cmpdstatistics.azurewebsites.net/api/';
const test = 'https://jsonplaceholder.typicode.com/posts';

class NetworkService {

    async getDemographics() {
        const url = `${baseURL}/${demographics}`;
        return await __WEBPACK_IMPORTED_MODULE_0__APIService___default.a.getData(url);
    }

    async getDemographic(id) {
        const url = `${baseURL}/${demographics}/${id}`;
        return await __WEBPACK_IMPORTED_MODULE_0__APIService___default.a.getData(url);
    }

    async getDemographicsOrdered(action, order) {
        const url = `${baseURL}/${demographics}?action=${action}&order=${order}`;
        return await __WEBPACK_IMPORTED_MODULE_0__APIService___default.a.getData(url);
    }

    async getDemographicsSearch(options) {
        let queryArguments = [];
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
        return await __WEBPACK_IMPORTED_MODULE_0__APIService___default.a.getData(url);
    }

    async getTrafficStops() {
        const url = `${baseURL}/${stops}`;
        return await __WEBPACK_IMPORTED_MODULE_0__APIService___default.a.getData(url);
    }

    async getTrafficStop(id) {
        const url = `${baseURL}/${stops}/${id}`;
        return await __WEBPACK_IMPORTED_MODULE_0__APIService___default.a.getData(url);
    }

    async getTrafficStopsOrdered(action, order) {
        const url = `${baseURL}/${stops}?action=${action}&order=${order}`;
        return await __WEBPACK_IMPORTED_MODULE_0__APIService___default.a.getData(url);
    }

    async getTrafficStopsSearch(options) {
        let queryArguments = [];
        let query = "";

        if (options.startDate != undefined) queryArguments.push(`startDate=${options.startDate}`);

        if (options.endDate != undefined) queryArguments.push(`endDate=${options.endDate}`);

        if (options.reason != undefined) queryArguments.push(`reason=${options.reason}`);

        if (options.officerRace != undefined) queryArguments.push(`officerRace=${options.officerRace}`);

        if (options.officerGender != undefined) queryArguments.push(`officerGender=${options.officerGender}`);

        if (options.experienceMin != undefined) queryArguments.push(`experienceMin=${options.experienceMin}`);

        if (options.experienceMax != undefined) queryArguments.push(`experienceMax=${options.experienceMax}`);

        if (options.driverRace != undefined) queryArguments.push(`driverRace=${options.driverRace}`);

        if (options.driverGender != undefined) queryArguments.push(`driverGender=${options.driverGender}`);

        if (options.search != undefined) queryArguments.push(`search=${options.search}`);

        if (queryArguments.length > 0) {

            query += `/Search?${queryArguments.pop()}`;

            if (queryArguments.length > 0) queryArguments.forEach(q => query += `&${q}`);
        }

        const url = `${baseURL}/${stops}/${query}`;
        return await __WEBPACK_IMPORTED_MODULE_0__APIService___default.a.getData(url);
    }

    async getOfficerShootings() {
        const url = `${baseURL}/${shootings}`;
        return await __WEBPACK_IMPORTED_MODULE_0__APIService___default.a.getData(url);
    }

    async getOfficerShooting(id) {
        const url = `${baseURL}/${shootings}/${id}`;
        return await __WEBPACK_IMPORTED_MODULE_0__APIService___default.a.getData(url);
    }

    async getOfficerShootingsOrdered(action, order) {
        const url = `${baseURL}/${shootings}?action=${action}&order=${order}`;
        return await __WEBPACK_IMPORTED_MODULE_0__APIService___default.a.getData(url);
    }

    async getOfficerGootingsInRange(start, end) {
        const url = `${baseURL}/${shootings}?startDate=${start}&endDate=${end}`;
        return await __WEBPACK_IMPORTED_MODULE_0__APIService___default.a.getData(url);
    }

    async getOfficerShootingsSearch(options) {

        let queryArguments = [];
        let query = "";

        if (options.start != undefined) queryArguments.push(`start=${options.start}`);

        if (options.end != undefined) queryArguments.push(`end=${options.end}`);

        if (options.officerRace != undefined) queryArguments.push(`officerRace=${options.officerRace}`);

        if (options.individualRace != undefined) queryArguments.push(`individualRace=${options.individualRace}`);

        if (options.individualAgeMin != undefined) queryArguments.push(`individualAgeMin=${options.individualAgeMin}`);

        if (options.individualAgeMax != undefined) queryArguments.push(`individualAgeMax=${options.individualAgeMax}`);

        if (options.policyViolation != undefined) queryArguments.push(`policyViolation=${options.policyViolation}`);

        if (options.injuryType != undefined) queryArguments.push(`injuryType=${options.injuryType}`);

        if (options.officerExperienceMin != undefined) queryArguments.push(`officerExperienceMin=${options.officerExperienceMin}`);

        if (options.officerExperienceMax != undefined) queryArguments.push(`officerExperienceMax=${options.officerExperienceMax}`);

        if (options.officerGender != undefined) queryArguments.push(`officerGender=${options.officerGender}`);

        if (options.individualGender != undefined) queryArguments.push(`individualGender=${options.individualGender}`);

        if (queryArguments.length > 0) {

            query += `/Search?${queryArguments.pop()}`;

            if (queryArguments.length > 0) queryArguments.forEach(q => query += `&${q}`);
        }

        const url = `${baseURL}/${shootings}/${query}`;
        return await __WEBPACK_IMPORTED_MODULE_0__APIService___default.a.getData(url);
    }

}

/* unused harmony default export */ var _unused_webpack_default_export = (new NetworkService());

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

/* unused harmony default export */ var _unused_webpack_default_export = (DemographicSearch);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class TrafficSearch {

    constructor(_startDate, _endDate, _reason, _officerRace, _officerGender, _experienceMin, _experienceMax, _driverRace, _driverAgeMin, _driverAgeMax, _search, _result, _division) {
        this.startDate = _startDate;
        this.endDate = _endDate;
        this.reason = _reason;
        this.officerRace = _officerRace;
        this.officerGender = _officerGender;
        this.experienceMin = _experienceMin;
        this.experienceMax = _experienceMax;
        this.driverAgeMin = _driverAgeMax;
        this.driverAgeMax = _driverAgeMax;
        this.search = _search;
        this.result = _result;
        this.division = _division;
    }

}

/* unused harmony default export */ var _unused_webpack_default_export = (TrafficSearch);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ShootingSearch {

    constructor(_start, _end, _officerRace, _individiualRace, _individualAgeMin, _individualAgeMax, _policyViolation, _injuryType, _officerExperianceMin, _officerExperieanceMax, _officerGender, _individualGender) {
        this.start = _start;
        this.end = _end;
        this.officerRace = _officerRace;
        this.individualRace = _individiualRace;
        this.individualAgeMin = _individualAgeMin;
        this.individualAgeMax = _individualAgeMax;
        this.policyViolation = _policyViolation;
        this.injuryType = _injuryType;
        this.officerExperienaceMin = _officerExperianceMin;
        this.officerExperienceMax = _officerExperianceMin;
        this.officerGender = _officerGender;
        this.individualGender = _injuryType;
    }
}

/* unused harmony default export */ var _unused_webpack_default_export = (ShootingSearch);

/***/ })
/******/ ]);