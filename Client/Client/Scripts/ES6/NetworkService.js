import APIService from './APIService';


// Base URLS
const baseURL = 'http://localhost:55981/api';
const demographics = '/EmployeeDemographics';
const stops = '/TrafficStops';

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
        const queryArguments = [];
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

    //async getTrafficStopsSearch(options) {
    //    console.log("In Network Service: " + options.officerGender + ": " + options.officerRace);
    //    let queryArgument = [];
    //    let url = "";

    //    if (options.startDate != undefined)
    //        queryArgument.push(`startDate=${options.startDate}`);

    //    if (options.endDate != undefined)
    //        queryArgument.push(`endDate=${options.endDate}`);

    //    if (options.reason != undefined)
    //        queryArgument.push(`reason=${options.reason}`);

    //    if (options.officerRace != undefined) 
    //        queryArgument.push(`officerRace=${options.officerRace}`);

    //    if (options.officerGender != undefined) 
    //        queryArgument.push(`officerGender=${options.officerGender}`);


    //    if (options.experienceMin != undefined)
    //        queryArgument.push(`experienceMin=${options.experienceMin}`);

    //    if (options.experienceMax != undefined)
    //        queryArgument.push(`experienceMax=${options.experienceMax}`);

    //    if (options.driverRace != undefined)
    //        queryArgument.push(`driverRace=${options.driverRace}`);

    //    if (options.driverGender != undefined)
    //        queryArgument.push(`driverGender=${options.driverGender}`);

    //    if (options.search != undefined)
    //        queryArgument.push(`search=${options.search}`);


    //    if (options.division != undefined) {
    //        queryArgument.push(`division=${options.division}`);

    //        console.log("args " + queryArgument.length);


    //    if(queryArguments.length > 0) {

    //        query += `/Search?${queryArguments.pop()}`;


    //        if (queryArguments.length > 0)
    //            queryArguments.forEach(q => query += `&${q}`);

    //        console.log(query);
    //    }

    //    const url = `${baseURL}/${stops}/${query}`;
    //    console.log(url);
    //    return await APIService.getData(url);

    //    }

    //}
}

export default new NetworkService();


