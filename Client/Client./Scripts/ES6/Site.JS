let APIService = require("./APIService");


//var url = 'http://localhost:55981/api';
// var url = 'http:cmpdstatistics.azurewebsites.net';
var url = 'https://jsonplaceholder.typicode.com/posts'

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

loadData(url);
