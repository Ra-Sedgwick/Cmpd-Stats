class APIService {

    getData(endpoint) {
        return fetch(endpoint).then(function (response) {
            return response.json();
        }).then(function (json) {
            return json;
        });
    }
}

module.exports = new APIService;