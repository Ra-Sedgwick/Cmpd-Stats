import Chart from './Chart';

class OfficerShootingCharts {

    constructor() {
        const purple = "rgba(29, 17, 96)";
        const teal = "rgba((0, 120, 140)";
        const transparentPurple = "rgba(29, 17, 96, .6)";
        const transparentTeal = "rgba((0, 120, 140, .6)";
    }



    GetRadar(dataSet) {

        // Split data set into labels and data;
        let labels = ['White', 'Black', 'Hispanic', 'Other']
        let officers = [0, 0, 0, 0];
        let individuals = [0, 0, 0, 0];

        for (var i = 0; i < dataSet.length; i++) {
            for (var j = 0; j < labels.length; j++) {

                if (dataSet[i].OFFICER_RACE == labels[j])
                    officers[j]++;

                if (dataSet[i].INDIVIDUAL_RACE == labels[j])
                    individuals[j]++;
            }

        }

        officers[3] = dataSet.length - (officers[0] + officers[1] + officers[2]);
        individuals[3] = dataSet.length - (individuals[0] + individuals[1] + individuals[2]);

        console.log("Count");
        console.log(officers);
        console.log(individuals);

        const radarContainer = document.getElementById('OIS-radar-chart');
        let radarChart = new Chart(radarContainer, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Officers',
                    backgroundColor: this.putransparentPurple,
                    borderColor: this.teal,
                    data: officers
                }, {
                    label: 'Individuals',
                    backgroundColor: this.transparentTeal,
                    borderColor: this.purple,
                    data: individuals
                }]
            }
        })
    }

    GetBar(dataSet) {

        // Split data set into labels and data;
        let labels = ['White', 'Black', 'Hispanic', 'Other']
        let officers = [0, 0, 0, 0];
        let individuals = [0, 0, 0, 0];

        for (var i = 0; i < dataSet.length; i++) {
            for (var j = 0; j < labels.length; j++) {

                if (dataSet[i].OFFICER_RACE == labels[j])
                    officers[j]++;

                if (dataSet[i].INDIVIDUAL_RACE == labels[j])
                    individuals[j]++;
            }

        }

        officers[3] = dataSet.length - (officers[0] + officers[1] + officers[2]);
        individuals[3] = dataSet.length - (individuals[0] + individuals[1] + individuals[2]);

        const barContainer = document.getElementById('OIS-bar-chart');
        let barChart = new Chart(barContainer, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Officer",
                        backgroundColor: this.purple,
                        borderColor: this.teal,
                        borderWidth: 2, 
                        data: officers
                    }, {
                        label: "Citizens",
                        backgroundColor: this.teal,
                        borderColor: this.purple,
                        borderWidth: 2,
                        data: individuals
                    }
                ]
            }
        })

    }

    GetLine(dataSet) {

        let yearLabels = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015];
        let fatalities = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let nonFatalities = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (var i = 0; i < dataSet.length; i++) {

            for (var j = 0; j < yearLabels.length; j++) {

                if (dataSet[i].YR === yearLabels[j]) {

                    if (dataSet[i].INDIVIDUAL_INJURY_TYPE == 'Fatal Injury')
                        fatalities[j]++;
                    else {
                        nonFatalities[j]++;
                    }
                }
            }
        }

        console.log("Line");
        console.log(fatalities);
        console.log(nonFatalities);

        const lineChartData = {
            labels: yearLabels,
            dataSets: [{
                label: "Fatal",
                borderColor: 'rgba(29, 17, 96)',
                backgroundColor: 'rgba(29, 17, 96)',
                fill: false,
                data: fatalities,
            }, {
                label: "Non-Fatal",
                borderColor: "rgba((0, 120, 140)",
                backgroundColor: "rgba((0, 120, 140)",
                fill: false,
                data: nonFatalities,

            }]
        };

        const lineContainer = document.getElementById('OIS-line-chart');

        let theChart = new Chart(lineContainer, {
            type: 'line',
            data: {
                labels: yearLabels,
                datasets: [{
                    data: fatalities,
                    label: "Fatalities",
                    borderColor: "#3e95cd"
                }, {
                    data: nonFatalities,
                    label: "Non-Fatalities",
                    borderColor: "#8e5ea2"
                }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'World population per region (in millions)'
                }
            }
        });
        
    }
}

export default new OfficerShootingCharts();