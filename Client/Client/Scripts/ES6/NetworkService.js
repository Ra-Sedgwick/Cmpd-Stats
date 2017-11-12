import APIService from './APIService';


// Base URLS
const baseURL = 'http://localhost:55981/api';
const demographics = '/EmployeeDemographics';
const stops = '/TrafficStops';
const shootings = '/OfficerShootings';

const prod = 'http://cmpdstatistics.azurewebsites.net/api/';
const test = 'https://jsonplaceholder.typicode.com/posts'

class NetworkService {

    async getDemographics() {
        const url = `${baseURL}/${demographics}`;
        return await APIService.getData(url);
    }

    async getDemographic(id) {
        const url = `${baseURL}/${demographics}/${id}`;
        return await APIService.getData(url);
    }

    async getDemographicsOrdered(action, order) {
        const url = `${baseURL}/${demographics}?action=${action}&order=${order}`;
        return await APIService.getData(url);
    }

    async getDemographicsSearch(options) {
        let queryArguments = [];
        let query = "";

        if (options.title != undefined)
            queryArguments.push(`title=${options.title}`);

        if (options.experienceMin != undefined)
            queryArguments.push(`experienceMin=${options.experienceMin}`);

        if (options.experienceMax != undefined)
            queryArguments.push(`experienceMax=${options.experienceMax}`);

        if (options.ageMin != undefined)
            queryArguments.push(`ageMin=${options.ageMin}`);

        if (options.ageMax != undefined)
            queryArguments.push(`ageMax=${options.ageMax}`);

        if (options.gender != undefined)
            queryArguments.push(`gender=${options.gender}`);

        if (options.race != undefined)
            queryArguments.push(`race=${options.race}`);

        if (queryArguments.length > 0) {

            query += `/search?${queryArguments.pop()}`;

            if (queryArguments.length > 0)
                queryArguments.forEach(q => query += `&${q}`);

        }

        const url = `${baseURL}/${demographics}/${query}`;
        return await APIService.getData(url);
    }

    async getTrafficStops() {
        const url = `${baseURL}/${stops}`;
        return await APIService.getData(url);
    }

    async getTrafficStop(id) {
        const url = `${baseURL}/${stops}/${id}`;
        return await APIService.getData(url);
    }

    async getTrafficStopsOrdered(action, order) {
        const url = `${baseURL}/${stops}?action=${action}&order=${order}`;
        return await APIService.getData(url);
    }

    async getTrafficStopsSearch(options) {
        let queryArguments = [];
        let query = "";

        if (options.startDate != undefined)
            queryArguments.push(`startDate=${options.startDate}`);

        if (options.endDate != undefined)
            queryArguments.push(`endDate=${options.endDate}`);

        if (options.reason != undefined)
            queryArguments.push(`reason=${options.reason}`);

        if (options.officerRace != undefined)
            queryArguments.push(`officerRace=${options.officerRace}`);

        if (options.officerGender != undefined)
            queryArguments.push(`officerGender=${options.officerGender}`);


        if (options.experienceMin != undefined)
            queryArguments.push(`experienceMin=${options.experienceMin}`);

        if (options.experienceMax != undefined)
            queryArguments.push(`experienceMax=${options.experienceMax}`);

        if (options.driverRace != undefined)
            queryArguments.push(`driverRace=${options.driverRace}`);

        if (options.driverGender != undefined)
            queryArguments.push(`driverGender=${options.driverGender}`);

        if (options.search != undefined)
            queryArguments.push(`search=${options.search}`);

        if (queryArguments.length > 0) {

            query += `/Search?${queryArguments.pop()}`;

            if (queryArguments.length > 0)
                queryArguments.forEach(q => query += `&${q}`);

        }

        const url = `${baseURL}/${stops}/${query}`;
        return await APIService.getData(url);

    }

    async getOfficerShootings() {
        const url = `${baseURL}/${shootings}`;
        return await APIService.getData(url);
    }

    async getOfficerShooting(id) {
        const url = `${baseURL}/${shootings}/${id}`;
        return await APIService.getData(url);
    }

    async getOfficerShootingsOrdered(action, order) {
        const url = `${baseURL}/${shootings}?action=${action}&order=${order}`;
        return await APIService.getData(url);
    }

    async getOfficerGootingsInRange(start, end) {
        const url = `${baseURL}/${shootings}?startDate=${start}&endDate=${end}`;
        return await APIService.getData(url);
    }

    async getOfficerShootingsSearch(options) {

        let queryArguments = [];
        let query = "";

        if (options.start != undefined)
            queryArguments.push(`start=${options.start}`);

        if (options.end != undefined)
            queryArguments.push(`end=${options.end}`);

        if (options.officerRace != undefined)
            queryArguments.push(`officerRace=${options.officerRace}`);

        if (options.individualRace != undefined)
            queryArguments.push(`individualRace=${options.individualRace}`);

        if (options.individualAgeMin != undefined)
            queryArguments.push(`individualAgeMin=${options.individualAgeMin}`);

        if (options.individualAgeMax != undefined)
            queryArguments.push(`individualAgeMax=${options.individualAgeMax}`);

        if (options.policyViolation != undefined)
            queryArguments.push(`policyViolation=${options.policyViolation}`);

        if (options.injuryType != undefined)
            queryArguments.push(`injuryType=${options.injuryType}`);

        if (options.officerExperienceMin != undefined)
            queryArguments.push(`officerExperienceMin=${options.officerExperienceMin}`);

        if (options.officerExperienceMax != undefined)
            queryArguments.push(`officerExperienceMax=${options.officerExperienceMax}`);

        if (options.officerGender != undefined)
            queryArguments.push(`officerGender=${options.officerGender}`);

        if (options.individualGender != undefined)
            queryArguments.push(`individualGender=${options.individualGender}`);


        if (queryArguments.length > 0) {

            query += `/Search?${queryArguments.pop()}`;

            if (queryArguments.length > 0)
                queryArguments.forEach(q => query += `&${q}`);
        }

        const url = `${baseURL}/${shootings}/${query}`;
        return await APIService.getData(url);
  
    }
        
}

export default new NetworkService();

