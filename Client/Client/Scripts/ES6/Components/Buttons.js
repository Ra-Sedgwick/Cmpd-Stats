import NetworkService from '../Utility/NetworkService';
import Table from './Table';
import DataTable from './DataTable';


class Buttons {

    Initialize() {

        let toggleButton = document.getElementById('toggle-test');

        toggleButton.addEventListener('click', (e) => {

            let tableContainer = document.getElementById('table-container');
            tableContainer.innerHTML = '';

            let newTable = document.createElement('table');
            newTable.setAttribute('id', 'table-1');
            tableContainer.appendChild(newTable);
            
        })


        // Tabel buttons
        let demographicsButton = document.getElementById('demographis-table-button');

        demographicsButton.addEventListener('click', (e) => {

            NetworkService.getDemographics()
                .then(data => {
                    console.log(data);
                    DataTable.Create(data, 'table-1', 'table-container');
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
                    DataTable.Create(data, 'table-1', 'table-container');
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
                    DataTable.Create(data, 'table-1', 'table-container');
                })
                .catch(error => {
                    console.log(error);
                });

        })
    }
}

export default new Buttons();