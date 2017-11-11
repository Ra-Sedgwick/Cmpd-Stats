let APIService = require("./APIService");


var dev = 'http://localhost:55981/api/';
var prod = 'http://cmpdstatistics.azurewebsites.net/api/';
var test = 'https://jsonplaceholder.typicode.com/posts'

var loadData = function (endpoint) {

    APIService.getData(endpoint)
        .then((data) => {
            console.log("Call to: " + endpoint);
            console.log(data);
        })
        .catch((error) => {
            console.log("Error: " + error);
        })
}

loadData(dev + "OfficerShootings");
//loadData(prod + "OfficerShootings");
loadData(test);
