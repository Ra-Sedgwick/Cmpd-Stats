import NetworkService from './NetworkService';
import DemographicSearch from './DemographicSearch';


//NetworkService.getDemographics()
//    .then(data => {
//        console.log("Get All Demographics");
//        console.log(data);
//    })
//    .catch(error => {
//        console.log(error);
//    });


//NetworkService.getDemographic(1)
//    .then(data => {
//        console.log("Get Demographic id = 1");
//        console.log(data);
//    })
//    .catch(error => {
//        console.log(error);
//    });

//NetworkService.getDemographicsOrdered('officerExperience', 'descending')
//    .then(data => {
//        console.log("Order Demographics by experience DESC");
//        console.log(data);
//    })
//    .catch(error => {
//        console.log(error);
//    });




let demoSearch = new DemographicSearch(null, null, null, 26, 26, null, null);
console.log("Search: " + demoSearch.ageMax + ", " + demoSearch.ageMax);
NetworkService.getDemographicsSearch(demoSearch)
    .then(data => {
        console.log("Search Demographics");
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

