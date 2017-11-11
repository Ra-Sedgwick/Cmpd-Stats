import APIService from './APIService';



const dev = 'http://localhost:55981/api/';
const prod = 'http://cmpdstatistics.azurewebsites.net/api/';
const test = 'https://jsonplaceholder.typicode.com/posts'

class NetworkService {

    getData() {
        let url = dev + "OfficerShootings";
        return APIService.getData(url);
    }

}

export default new NetworkService();


//var loadData = async function (endpoint) {

//    APIService.getData(endpoint)
//        .then((data) => {
//            console.log("Call to: " + endpoint);
//            console.log(data);
//        })
//        .catch((error) => {
//            console.log("Error: " + error);
//        })
//}

//await loadData(dev + "OfficerShootings");
