import { Line } from 'react-chartjs-2';

export default function TotalDoctorPerscriptions({info}){
    var data = {
      labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6', 'Month 7', 'Month 8', 'Month 9'],
      datasets: [
        {
          label: `Total ${info.Product} Perscriptions + 3 Month Prediction`,
          data: [info.TRx_Month_1, info.TRx_Month_2, info.TRx_Month_3, info.TRx_Month_4, info.TRx_Month_5, info.TRx_Month_6, info.TRx_Month_7, info.TRx_Month_8, info.TRx_Month_9],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        },
      ],
    };
    
    const options = {
      scales: {
        y: {
          beginAtZero: true
        },
      },
    };

    return(
        <Line data={data} options={options} />
    )

}