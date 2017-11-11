class APIService {

    getData(endpoint) {

        var request = new Request({
            method: 'GET',
            mode: 'cors',
            redirect: 'follow',
            headers: new Headers({
                'Content-Type': 'application/javascript',
                'Access-Control-Allow-Origin': '*'
            })
        });

        return fetch(endpoint).then(function (response) {
            return response.json();
        }).then(function (json) {
            return json;
        });
    }
}

module.exports = new APIService;