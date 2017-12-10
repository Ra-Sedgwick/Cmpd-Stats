import Chart from './Chart';
import OfficerShootingCharts from './OfficerShootingCharts';
import NetworkService from '../Utility/NetworkService';

class Charts {

    Initialize() {


        NetworkService.getOfficerShootings()
            .then(data => {

                console.log("Chart Data");
                console.log(data);

                OfficerShootingCharts.GetRadar(data);
                OfficerShootingCharts.GetLine(data);
                OfficerShootingCharts.GetStackedBar(data);

            })
            .catch(error => {
                console.log(error);
            });
    }


}

export default new Charts();

