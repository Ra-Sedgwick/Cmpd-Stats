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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__APIService__ = __webpack_require__(4);
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

/* harmony default export */ __webpack_exports__["a"] = (new NetworkService());

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Components_Buttons_js__ = __webpack_require__(3);


__WEBPACK_IMPORTED_MODULE_0__Components_Buttons_js__["a" /* default */].Initialize();

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NetworkService__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Table__ = __webpack_require__(5);



class Buttons {

    Initialize() {
        // Tabel buttons
        let demographicsButton = document.getElementById('demographis-table-button');

        demographicsButton.addEventListener('click', e => {

            __WEBPACK_IMPORTED_MODULE_0__NetworkService__["a" /* default */].getDemographics().then(data => {
                console.log(data);
                __WEBPACK_IMPORTED_MODULE_1__Table__["a" /* default */].Create(data, "table-1");
            }).catch(error => {
                console.log(error);
            });
        });

        let shootingsButton = document.getElementById('shootings-table-button');

        shootingsButton.addEventListener('click', e => {

            __WEBPACK_IMPORTED_MODULE_0__NetworkService__["a" /* default */].getOfficerShootings().then(data => {
                console.log(data);
                __WEBPACK_IMPORTED_MODULE_1__Table__["a" /* default */].Create(data, "table-1");
            }).catch(error => {
                console.log(error);
            });
        });

        let trafficButton = document.getElementById('traffic-table-button');

        trafficButton.addEventListener('click', e => {

            __WEBPACK_IMPORTED_MODULE_0__NetworkService__["a" /* default */].getTrafficStops().then(data => {
                console.log(data);
                __WEBPACK_IMPORTED_MODULE_1__Table__["a" /* default */].Create(data, "table-1");
            }).catch(error => {
                console.log(error);
            });
        });
    }
}

/* harmony default export */ __webpack_exports__["a"] = (new Buttons());

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NetworkService_js__ = __webpack_require__(0);

class Table {

        Create(data, locationID) {

                // Extract Header values
                const keys = Object.keys(data[0]);

                // Get div and delete current table, if it exists. 
                let parentNode = document.getElementById(locationID);
                parentNode.classList.add('table-responsive');

                while (parentNode.firstChild) {
                        parentNode.removeChild(parentNode.firstChild);
                }

                let table = document.createElement('table');
                table.classList.add('table', 'table-bordered');

                let tr = table.insertRow(-1);

                // Insert Header
                for (let i = 0; i < keys.length; i++) {
                        let th = document.createElement('th');
                        th.innerHTML = keys[i];
                        tr.appendChild(th);
                }

                // Insert Data
                for (let i = 0; i < data.length; i++) {

                        tr = table.insertRow(-1);

                        for (let j = 0; j < keys.length; j++) {
                                let cell = tr.insertCell(-1);
                                cell.innerHTML = data[i][keys[j]];
                        }
                }

                document.getElementById(locationID).appendChild(table);
        }
}

/* harmony default export */ __webpack_exports__["a"] = (new Table());

/***/ })
/******/ ]);