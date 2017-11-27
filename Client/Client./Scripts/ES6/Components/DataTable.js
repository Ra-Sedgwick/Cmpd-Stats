class DataTable {

    Create(dataSet, tableID, containerID) {

        $(function () {



            // Extract Header values
            const keys = Object.keys(dataSet[0]);
            let headers = [];

            for (let i = 0; i < keys.length; i++) {

                headers[i] = { data: keys[i], title: keys[i]}
            }


            let tableContainer = document.getElementById(containerID);
            tableContainer.innerHTML = '';

            let newTable = document.createElement('table');
            newTable.setAttribute('id', tableID);
            tableContainer.appendChild(newTable);


           $('#' + tableID).DataTable({
                data: dataSet,
                columns: headers,
                destroy: true,
                searching: false


            });
        });
    }
}

export default new DataTable();