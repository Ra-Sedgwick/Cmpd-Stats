import NetworkService from '../NetworkService.js';
class Table {


    Create(data, locationID) {

        // Extract Header values
        const keys = Object.keys(data[0]);

        // Get div and delete current table, if it exists. 
        let parentNode = document.getElementById(locationID);
        parentNode.classList.add('table-responsive');

        while (parentNode.firstChild) {
            parentNode.removeChild(parentNode.firstChild);
        }
        
        let table = document.createElement('table');
        table.classList.add('table', 'table-bordered');

        let tr = table.insertRow(-1);

        // Insert Header
        for (let i = 0; i < keys.length; i++) {
            let th = document.createElement('th');
            th.innerHTML = keys[i];
            tr.appendChild(th);
        }

        // Insert Data
        for (let i = 0; i < data.length; i++) {

            tr = table.insertRow(-1);

            for (let j = 0; j < keys.length; j++) {
                let cell = tr.insertCell(-1);
                cell.innerHTML = data[i][keys[j]];
            }
        }


        document.getElementById(locationID).appendChild(table);
    }
}

export default new Table;