import Chart from './Chart';

class OfficerShootingCharts {

    constructor() {
        this.Blue = 'rgba(41, 128, 185, 1)';
        this.BlueT = 'rgba(41, 128, 185, 0.6)';
        this.Border = '#222222';
        this.Asphalt = 'rgba(52, 73, 94, 1)';
        this.AsphaltT = 'rgba(52, 73, 94, 0.6)';
        this.Red = 'rgba(192, 57, 43, 1.0)';
        this.RedT = 'rgba(192, 57, 43, 0.6)';
        this.Green = 'rgba(39, 174, 96,1.0)';
        this.GreenT = 'rgba(39, 174, 96, 0.6)';
        
    }

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
                label: 'Black',
                backgroundColor: this.GreenT,
                borderColor: this.Border,
                borderWidth: 2,
                data: blackIndividuals
            }, {
                label: 'White',
                backgroundColor: this.BlueT,
                borderColor: this.Border,
                borderWidth: 2,
                data: whiteIndividuals
                
            }, {
                label: 'Hispanic',
                backgroundColor: this.RedT,
                borderColor: this.Border,
                borderWidth: 2,
                data: hispanicIndividuals
            }, {
                label: 'Other',
                backgroundColor: this.AsphaltT,
                borderColor: this.Border,
                borderWidth: 2,
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
                    text: 'Citizens Race'
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
                    label: 'Policy Violation',
                    backgroundColor: this.Asphalt,
                    borderColor: this.Border,
                    borderWidth: 2,
                    data: violation
                }, {
                    label: 'Fatal',
                    backgroundColor: this.GreenT,
                    borderColor: this.Border,
                    borderWidth: 2,
                    data: fatal
                    }, {
                    label: 'Miss',
                    backgroundColor: this.BlueT,
                    borderColor: this.Border,
                    borderWidth: 2,
                    data: miss
                }]
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


        const lineContainer = document.getElementById('OIS-line-chart');

        let theChart = new Chart(lineContainer, {
            type: 'line',
            data: {
                labels: yearLabels,
                datasets: [{
                    data: fatalities,
                    label: "Fatalities",
                    borderColor: this.Green
                }, {
                    data: nonFatalities,
                    label: "Non-Fatalities",
                    borderColor: this.Blue
                }
                ]
            }

        });
        
    }
}

export default new OfficerShootingCharts();