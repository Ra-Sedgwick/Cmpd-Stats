import Chart from './Chart';

class OfficerShootingCharts {

    GetStackedBar(dataSet) {

        // Split data set into labels and data;
        let labels = ['White', 'Black', 'Hispanic', 'Other']
        let whiteIndividuals = [0, 0, 0, 0];
        let blackIndividuals = [0, 0, 0, 0];
        let hispanicIndividuals = [0, 0, 0, 0];
        let otherIndividuals = [0, 0, 0, 0];


        for (var i = 0; i < dataSet.length; i++) {

            for (var j = 0; j < labels.length; j++ ) {

                if (dataSet[i].OFFICER_RACE === labels[j]) {

                    if (dataSet[i].INDIVIDUAL_RACE === "White")
                        whiteIndividuals[j]++;
                    else if (dataSet[i].INDIVIDUAL_RACE === "Black")
                        blackIndividuals[j]++;
                    else if (dataSet[i].INDIVIDUAL_RACE === "Hispanic")
                        hispanicIndividuals[j]++;
                    else
                        otherIndividuals[j]++;

                }
            }  
        }

        console.log("stacked");
        console.log("white\n" + whiteIndividuals);
        console.log("black\n" + blackIndividuals);
        console.log("hispanic\n" + hispanicIndividuals);
        console.log(otherIndividuals);

        const chartData = {
            labels: labels,
            datasets: [{
                label: 'White Citizen',
                backgroundColor: 'Blue',
                data: whiteIndividuals
            }, {
                label: 'Black Citizen',
                backgroundColor: "Green",
                data: blackIndividuals
            }, {
                label: 'Hispanic Citizen',
                backgroundColor: 'Red',
                data: hispanicIndividuals
            }, {
                label: 'Other Citizen',
                backgroundColor: 'Black',
                data: otherIndividuals
            }]
        };

        const stackedContainer = document.getElementById('OIS-stacked-bar-chart');
        let barChart = new Chart(stackedContainer, {
            type: 'bar',
            data: chartData,
            options: {
                title: {
                    display: true,
                    //text: 'Officer Involved Shootings 05\'- 15\''
                },
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                responsive: true,
                scales: {
                    xAxes: [{
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Officer Race'
                        }
                    }],
                    yAxes: [{
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Shootings'
                        }
                    }]
                }
            }
        })
    }

    GetRadar(dataSet) {

        // Split data set into labels and data;
        let labels = ['0-2', '3-5', '6-10', '11-15', '16-25', '26-40', '40+']
        let violation = [0, 0, 0, 0, 0, 0, 0];
        let fatal = [0, 0, 0, 0, 0, 0, 0];
        let miss = [0, 0, 0, 0, 0, 0, 0];

        for (var i = 0; i < dataSet.length; i++) {

            if (dataSet[i].OFFICER_EXPERIENCE_YEARS <= 2) {

                if (dataSet[i].OFFICER_POLICY_VIOLATION === "YES")
                    violation[0]++;

                if (dataSet[i].INDIVIDUAL_INJURY_TYPE == 'Fatal Injury')
                    fatal[0]++;

                if (dataSet[i].INDIVIDUAL_INJURY_TYPE == 'Miss')
                    miss[0]++;
            }

            if (dataSet[i].OFFICER_EXPERIENCE_YEARS <= 5) {

                if (dataSet[i].OFFICER_POLICY_VIOLATION === "YES")
                    violation[1]++;

                if (dataSet[i].INDIVIDUAL_INJURY_TYPE == 'Fatal Injury')
                    fatal[1]++;

                if (dataSet[i].INDIVIDUAL_INJURY_TYPE == 'Miss')
                    miss[1]++;
            }

            if (dataSet[i].OFFICER_EXPERIENCE_YEARS <= 10) {

                if (dataSet[i].OFFICER_POLICY_VIOLATION === "YES")
                    violation[2]++;

                if (dataSet[i].INDIVIDUAL_INJURY_TYPE == 'Fatal Injury')
                    fatal[2]++;

                if (dataSet[i].INDIVIDUAL_INJURY_TYPE == 'Miss')
                    miss[2]++;
            }

            if (dataSet[i].OFFICER_EXPERIENCE_YEARS <= 15) {

                if (dataSet[i].OFFICER_POLICY_VIOLATION === "YES")
                    violation[3]++;

                if (dataSet[i].INDIVIDUAL_INJURY_TYPE == 'Fatal Injury')
                    fatal[3]++;

                if (dataSet[i].INDIVIDUAL_INJURY_TYPE == 'Miss')
                    miss[3]++;
            }

            if (dataSet[i].OFFICER_EXPERIENCE_YEARS <= 25) {

                if (dataSet[i].OFFICER_POLICY_VIOLATION === "YES")
                    violation[4]++;

                if (dataSet[i].INDIVIDUAL_INJURY_TYPE == 'Fatal Injury')
                    fatal[4]++;

                if (dataSet[i].INDIVIDUAL_INJURY_TYPE == 'Miss')
                    miss[4]++;
            }

            if (dataSet[i].OFFICER_EXPERIENCE_YEARS <= 40) {

                if (dataSet[i].OFFICER_POLICY_VIOLATION === "YES")
                    violation[5]++;

                if (dataSet[i].INDIVIDUAL_INJURY_TYPE == 'Fatal Injury')
                    fatal[5]++;

                if (dataSet[i].INDIVIDUAL_INJURY_TYPE == 'Miss')
                    miss[5]++;
            }

            if (dataSet[i].OFFICER_EXPERIENCE_YEARS > 40) {

                if (dataSet[i].OFFICER_POLICY_VIOLATION === "YES")
                    violation[6]++;

                if (dataSet[i].INDIVIDUAL_INJURY_TYPE == 'Fatal Injury')
                    fatal[6]++;

                if (dataSet[i].INDIVIDUAL_INJURY_TYPE == 'Miss')
                    miss[6]++;
            }

        }

        console.log("Count");

        const radarContainer = document.getElementById('OIS-radar-chart');
        let radarChart = new Chart(radarContainer, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Violation',
                    backgroundColor: "rgba(29, 17, 96, .6)",
                    borderColor: "rgba(0, 120, 140)",
                    data: violation
                }, {
                    label: 'Fatal',
                    backgroundColor: "rgba(255, 105, 180, .6)",
                    borderColor: "rgba(255, 192, 203)",
                    data: fatal
                    }, {
                    label: 'Miss',
                    backgroundColor: "rgba(0, 120, 140, .6)",
                    borderColor: "rgba(29, 17, 96)",
                    data: miss
                }]
            }
        })
    }


    //GetRadar(dataSet) {

    //    // Split data set into labels and data;
    //    let labels = ['White', 'Black', 'Hispanic', 'Other']
    //    let officers = [0, 0, 0, 0];
    //    let individuals = [0, 0, 0, 0];

    //    for (var i = 0; i < dataSet.length; i++) {
    //        for (var j = 0; j < labels.length; j++) {

    //            if (dataSet[i].OFFICER_RACE == labels[j])
    //                officers[j]++;

    //            if (dataSet[i].INDIVIDUAL_RACE == labels[j])
    //                individuals[j]++;
    //        }

    //    }

    //    officers[3] = dataSet.length - (officers[0] + officers[1] + officers[2]);
    //    individuals[3] = dataSet.length - (individuals[0] + individuals[1] + individuals[2]);

    //    console.log("Count");
    //    console.log(officers);
    //    console.log(individuals);

    //    const radarContainer = document.getElementById('OIS-radar-chart');
    //    let radarChart = new Chart(radarContainer, {
    //        type: 'radar',
    //        data: {
    //            labels: labels,
    //            datasets: [{
    //                label: 'Officers',
    //                backgroundColor: "rgba(29, 17, 96, .6)",
    //                borderColor: "rgba(0, 120, 140)",
    //                data: officers
    //            }, {
    //                label: 'Individuals',
    //                backgroundColor: "rgba(0, 120, 140, .6)",
    //                borderColor: "rgba(29, 17, 96)",
    //                data: individuals
    //            }]
    //        }
    //    })
    //}

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
                        backgroundColor: "rgba(29, 17, 96, .6)",
                        borderColor: "rgba(0, 120, 140)",
                        borderWidth: 2, 
                        data: officers
                    }, {
                        label: "Citizens",
                        backgroundColor: "rgba(0, 120, 140, .6)",
                        borderColor: "rgba(29, 17, 96)",
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