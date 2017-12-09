import Chart from './Chart';

class OfficerShootingBarChart {

    GetChart(dataSet) {

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

        officers[3] = dataSet.length -  (officers[0] + officers[1] + officers[2]);
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
                    backgroundColor: "rgba(29, 17, 96, 0.4)",
                    borderColor: "rgba(29, 17, 96,1)",
                    data: officers
                }, {
                    label: 'Individuals',
                    backgroundColor: "rgba(0, 120, 140, 0.4)",
                    borderColor: "rgba((0, 120, 140, 1)",
                    data: individuals
                }]
            }
        })

        const barContainer = document.getElementById('OIS-bar-chart');
        let barChart = new Chart(barContainer, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Officer",
                        backgroundColor: "rgba(29, 17, 96, 1)",
                        borderColor: "rgba(0, 120, 140, 1)",
                        borderWidth: 2, 
                        data: officers
                    }, {
                        label: "Citizens",
                        backgroundColor: "rgba(0, 120, 140, 1)",
                        borderColor: "rgba(29, 17, 96, 1)",
                        borderWidth: 2,
                        data: individuals
                    }
                ]
            }
        })

        //const barContainer = document.getElementById('OIS-bar-chart');
        //let barChart = new Chart(barContainer, {
        //    type: 'bar',
        //    data: {
        //        labels: labels,
        //        datasets: [{
        //            label: 'Officer Shootings By Race',
        //            data: data,
        //            backgroundColor: [
        //                'rgba(255, 99, 132, 0.2)',
        //                'rgba(54, 162, 235, 0.2)',
        //                'rgba(255, 206, 86, 0.2)',
        //                'rgba(75, 192, 192, 0.2)',
        //                'rgba(153, 102, 255, 0.2)',
        //                'rgba(255, 159, 64, 0.2)'
        //            ],
        //            borderColor: [
        //                'rgba(255,99,132,1)',
        //                'rgba(54, 162, 235, 1)',
        //                'rgba(255, 206, 86, 1)',
        //                'rgba(75, 192, 192, 1)',
        //                'rgba(153, 102, 255, 1)',
        //                'rgba(255, 159, 64, 1)'
        //            ],
        //            borderWidth: 1
        //        }]
        //    },
        //    options: {
        //        scales: {
        //            yAxes: [{
        //                ticks: {
        //                    beginAtZero: true
        //                }
        //            }]
        //        }
        //    }
        //});
    }
}

export default new OfficerShootingBarChart();