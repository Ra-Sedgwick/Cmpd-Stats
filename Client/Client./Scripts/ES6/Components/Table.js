class Table {

    Create(data, locationID) {

        const keys = Object.keys(data[0]);
        const header = `<table class="table"><thead>${keys.map(key => `<th scope="col">${key}</th>`).join('')}</thead></table>`;
        document.getElementById(locationID).innerHTML = header;
        console.log(header);
    }
    
}

export default new Table;