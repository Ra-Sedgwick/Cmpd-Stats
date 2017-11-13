import NetworkService from '../Utility/NetworkService';
import Table from './Table';


class Buttons {

    Initialize() {
        // Tabel buttons
        let demographicsButton = document.getElementById('demographis-table-button');

        demographicsButton.addEventListener('click', (e) => {

            NetworkService.getDemographics()
                .then(data => {
                    console.log(data);
                    Table.Create(data, "table-1");
                })
                .catch(error => {
                    console.log(error);
                });

        });

        let shootingsButton = document.getElementById('shootings-table-button');

        shootingsButton.addEventListener('click', (e) => {

            NetworkService.getOfficerShootings()
                .then(data => {
                    console.log(data);
                    Table.Create(data, "table-1");
                })
                .catch(error => {
                    console.log(error);
                });

        })

        let trafficButton = document.getElementById('traffic-table-button');

        trafficButton.addEventListener('click', (e) => {

            NetworkService.getTrafficStops()
                .then(data => {
                    console.log(data);
                    Table.Create(data, "table-1");
                })
                .catch(error => {
                    console.log(error);
                });

        })
    }
}

export default new Buttons();