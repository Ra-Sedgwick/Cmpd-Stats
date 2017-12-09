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
//const baseURL = 'http://cmpdstatistics.azurewebsites.net/api';
const demographics = 'EmployeeDemographics';
const stops = 'TrafficStops';
const shootings = 'OfficerShootings';

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utility_NetworkService__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Table__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DataTable__ = __webpack_require__(6);




class Buttons {

    Initialize() {

        const tableID = 'table-1';
        const containerID = 'table-container';
        const modalID = 'modal-container';

        // Tabel buttons
        // ===========================================================================================================
        let demographicsButton = document.getElementById('demographis-table-button');

        demographicsButton.addEventListener('click', e => {

            __WEBPACK_IMPORTED_MODULE_0__Utility_NetworkService__["a" /* default */].getDemographics().then(data => {
                console.log(data);
                __WEBPACK_IMPORTED_MODULE_2__DataTable__["a" /* default */].Create(data, tableID, containerID);
                //this.InsertSearchButton('demographics', tableID);
                //this.InsertModal('Employee Demographics', modalID);
            }).catch(error => {
                console.log(error);
            });
        });

        let shootingsButton = document.getElementById('shootings-table-button');

        shootingsButton.addEventListener('click', e => {

            __WEBPACK_IMPORTED_MODULE_0__Utility_NetworkService__["a" /* default */].getOfficerShootings().then(data => {
                console.log(data);
                __WEBPACK_IMPORTED_MODULE_2__DataTable__["a" /* default */].Create(data, tableID, containerID);
                //this.InsertSearchButton('shootings', tableID);
            }).catch(error => {
                console.log(error);
            });
        });

        let trafficButton = document.getElementById('traffic-table-button');

        trafficButton.addEventListener('click', e => {

            __WEBPACK_IMPORTED_MODULE_0__Utility_NetworkService__["a" /* default */].getTrafficStops().then(data => {
                console.log(data);
                __WEBPACK_IMPORTED_MODULE_2__DataTable__["a" /* default */].Create(data, tableID, containerID);
                //this.InsertSearchButton('traffic', tableID);
            }).catch(error => {
                console.log(error);
            });
        });
        // ===========================================================================================================


        // Form Buttons
        // ===========================================================================================================
        let searchDemographics = document.getElementById('search-demographics');

        searchDemographics.addEventListener('click', e => {

            let queries = {};

            let title = $('#title').val();
            title = title ? undefined : title;
            queries.title = title;

            let expMin = $('#experienceMin').val();
            expMin = expMin ? 0 : expMin;
            queries.experienceMin = expMin;

            let expMax = $('#experienceMax').val();
            expMax = expMax ? 100 : expMax;
            queries.experienceMax = expMax;

            let ageMin = $('#ageMin').val();
            ageMin = ageMin ? 0 : ageMin;
            queries.ageMin = ageMin;

            let ageMax = $('#ageMax').val();
            ageMax = ageMax ? 100 : ageMax;
            queries.ageMax = ageMax;

            let gender = $('#gender-select');
            gender = gender ? undefined : gender;
            queries.gender = gender;

            let race = $('#race');
            race = race ? undefined : race;
            queries.race = race;

            __WEBPACK_IMPORTED_MODULE_0__Utility_NetworkService__["a" /* default */].getDemographicsSearch(queries).then(data => {
                console.log("Search Demo");
                console.log(data);
                __WEBPACK_IMPORTED_MODULE_2__DataTable__["a" /* default */].Create(data, tableID, containerID);
            }).catch(error => {
                console.log(error);
            });
        });

        // ===========================================================================================================
    }

    InsertSearchButton(dataSet, containerID) {

        let div = document.getElementById(containerID + '_length');
        let button = document.createElement('button');

        button.setAttribute('id', `search-button`);
        button.setAttribute('data-toggle', 'modal');
        //button.setAttribute('data-tarte', `#${dataSet}-search-modal`);
        button.setAttribute('data-target', `#exampleModal`);

        button.classList.add('btn', 'btn-success');
        button.style.marginRight = '16px';

        button.innerHTML = 'Search';

        div.insertBefore(button, div.firstChild);
    }

    InsertModal(dataSet, containerID) {
        const modalMarkup = `
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Search ${dataSet}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    ...
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
        `;
        let container = document.getElementById(containerID);
        container.innerHTML = modalMarkup;
    }

    GetDemoForm() {
        return `
            <form>
                
            </form>
        `;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utility_NetworkService_js__ = __webpack_require__(0);

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
                        th.innerHTML = `<a href='./'>${keys[i]}</a>`;
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

/* unused harmony default export */ var _unused_webpack_default_export = (new Table());

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class DataTable {

            Create(dataSet, tableID, containerID) {

                        $(function () {

                                    // Extract Header values
                                    const keys = Object.keys(dataSet[0]);
                                    let headers = [];

                                    for (let i = 0; i < keys.length; i++) {

                                                headers[i] = { data: keys[i], title: keys[i] };
                                    }

                                    let tableContainer = document.getElementById(containerID);
                                    tableContainer.innerHTML = '';

                                    let newTable = document.createElement('table');
                                    newTable.setAttribute('id', tableID);
                                    tableContainer.appendChild(newTable);

                                    $('#' + tableID).DataTable({
                                                data: dataSet,
                                                columns: headers,
                                                destroy: true

                                    });
                        });
            }
}

/* harmony default export */ __webpack_exports__["a"] = (new DataTable());

/***/ })
/******/ ]);