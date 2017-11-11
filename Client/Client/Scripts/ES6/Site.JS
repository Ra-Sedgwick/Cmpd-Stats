import NetworkService from './NetworkService';


NetworkService.getData()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        consol.log(error);
    })




