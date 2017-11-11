import APIService from './APIService';


// Base URLS
const baseURL = 'http://localhost:55981/api';
const demographics = '/EmployeeDemographics';

const prod = 'http://cmpdstatistics.azurewebsites.net/api/';
const test = 'https://jsonplaceholder.typicode.com/posts'

class NetworkService {

    getDemographics() {
        const url = `${baseURL}/${demographics}`;
        return APIService.getData(url);
    }

    getDemographic(id) {
        const url = `${baseURL}/${demographics}/${id}`;
        return APIService.getData(url);
    }

    getDemographicsOrdered(action, order) {
        const url = `${baseURL}/${demographics}?action=${action}&order=${order}`;
        return APIService.getData(url);
    }

    getDemographicsSearch(options) {
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

            query +=  `/search?${queryArguments.pop()}`;

            if (queryArguments.length > 0)
                queryArguments.forEach(q => query += `&${q}`);

        }

        const url = `${baseURL}/${demographics}/${query}`;
        console.log(url);
        return APIService.getData(url);
    }
}

export default new NetworkService();


