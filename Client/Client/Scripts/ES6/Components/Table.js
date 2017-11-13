
class Table {

    Create(data, locationID) {

        const keys = Object.keys(data[0]);
        const header = `
                        <table class="table">
                            <thead>
                                ${keys.map(key => `<th scope="col">${key}</th>`).join('')}
                            </thead>
                        </table>
                        `;
        document.getElementById(locationID).innerHTML = header;

    }

    Create2(data, locationID) {

        // Extract Header values
        const keys = Object.keys(data[0]);

        // Create Table
        let table = document.createElement("table");

        let tr = table.insertRow(-1);

        // Insert Header
        for (let i = 0; i < keys.length; i++) {
            let th = document.createElement("th");
            th.innerHTML = keys[i];
            tr.appendChild(th);
        }

        document.getElementById(locationID).appendChild(table);
    }
}

export default new Table;