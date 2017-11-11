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
        if (response.ok) return await response.json();
        throw new Error(response.status);
    }

     

    
}

module.exports = new APIService;

    //getData(endpoint) {

    //    var request = new Request({
    //        method: 'GET',
    //        mode: 'cors',
    //        redirect: 'follow',
    //        headers: new Headers({
    //            'Content-Type': 'application/javascript',
    //            'Access-Control-Allow-Origin': '*'
    //        })
    //    });

    //    return fetch(endpoint).then(function (response) {
    //        return response.json();
    //    }).then(function (json) {
    //        return json;
    //    });
    //}