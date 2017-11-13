import NetworkService from './NetworkService';
import DemographicSearch from './Types/DemographicSearch';
import TrafficSearch from './Types/TrafficSearch';
import ShootingSearch from './Types/ShootingSearch';
import OfficerShooting from './Types/OfficerShooting';
import Table from './Components/Table';




NetworkService.getOfficerShootings()
    .then(data => {
        console.log(data);
        Table.Create2(data, "table-1");

    })
    .catch(error => {
        console.log(error);
    });

