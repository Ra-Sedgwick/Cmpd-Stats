import NetworkService from '../Utility/NetworkService';
import Table from './Table';
import DataTable from './DataTable';


class Buttons {

    

    Initialize() {

        const tableID = 'table-1';
        const containerID = 'table-container';
        const modalID = 'modal-container';




        // Tabel buttons
        // ===========================================================================================================
        let demographicsButton = document.getElementById('demographis-table-button');

        demographicsButton.addEventListener('click', (e) => {

            NetworkService.getDemographics()
                .then(data => {
                    console.log(data);
                    DataTable.Create(data, tableID, containerID);
                    //this.InsertSearchButton('demographics', tableID);
                    //this.InsertModal('Employee Demographics', modalID);
                })
                .catch(error => {
                    console.log(error);
                });

        });

        let shootingsTableButton = document.getElementById('shootings-table-button');

        shootingsTableButton.addEventListener('click', (e) => {

            e.preventDefault();

            document.getElementById('table-container').style.display = 'block';
            document.getElementById('dashboard-container').style.display = 'none';

            NetworkService.getOfficerShootings()
                .then(data => {
                    console.log(data);
                    DataTable.Create(data, tableID, containerID);
                })
                .catch(error => {
                    console.log(error);
                });

        })

        let shootingsDashboardButton = document.getElementById('shootings-dashboard-button');

        shootingsDashboardButton.addEventListener('click', (e) => {

            e.preventDefault();

            document.getElementById('table-container').style.display = 'none';
            document.getElementById('dashboard-container').style.display = 'block';
        })

        let trafficButton = document.getElementById('traffic-table-button');

        trafficButton.addEventListener('click', (e) => {

            NetworkService.getTrafficStops()
                .then(data => {
                    console.log(data);
                    DataTable.Create(data, tableID, containerID);
                    //this.InsertSearchButton('traffic', tableID);

                })
                .catch(error => {
                    console.log(error);
                });

        })
        // ===========================================================================================================


        // Form Buttons
        // ===========================================================================================================
        

        // ===========================================================================================================

    }

    InsertSearchButton(dataSet, containerID) {

        let div = document.getElementById(containerID + '_length');
        let button = document.createElement('button');


        button.setAttribute('id', `search-button`);
        button.setAttribute('data-toggle', 'modal');
        //button.setAttribute('data-tarte', `#${dataSet}-search-modal`);
        button.setAttribute('data-target', `#exampleModal`);

        button.classList.add('btn', 'btn-success');
        button.style.marginRight = '16px'

        button.innerHTML = 'Search';

        div.insertBefore(button, div.firstChild);
    }

    InsertModal(dataSet, containerID) {
        const modalMarkup = `
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Search ${dataSet}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    ...
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
        `;
        let container = document.getElementById(containerID);
        container.innerHTML = modalMarkup;
    }

    GetDemoForm() {
        return `
            <form>
                
            </form>
        `;
    }
}

export default new Buttons();