import { Bar } from 'react-chartjs-2';
import axios from 'axios'
;
const Profile = ({info, error}) => {
  var data = {
    labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'],
    datasets: [
      {
        label: 'New Perscriptions Perscriptions',
        data: [info.NRx_Month_1, info.NRx_Month_2, info.NRx_Month_3, info.NRx_Month_4, info.NRx_Month_5, info.NRx_Month_6],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
    return(
        <>
        <main role="main" className="h-full inline w-full sm:w-3/4 md:w-4/5">
        <div className="mx-12">
        <div className="flex flex-row">
          <h1 className="my-8 text-grey-dark text-3xl font-bold">Doctor Profile</h1>
          <div className="mt-5 absolute right-8">
            <input className="shadow-md rounded-lg bg-white h-10 px-5 pr-16" type="search" name="search" placeholder="Search" />
          </div>
        </div>
        <div className="-ml-2 bg-white shadow-lg rounded-lg text-grey-dark mb-10">
            <div className="my-5 ml-4 items-center flex flex-row text-4xl font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                <h1 className="ml-5">{`${info.first_name} ${info.last_name}`}</h1>
            </div>
            <div className="ml-40 pb-10 text-lg grid grid-flow-col grid-cols-3 grid-rows-3 gap-4">
                <div>Occupation: Surgeon</div>
                <div>Location: Columbus, Ohio</div>
                <div>Employer: Wexner Medical Center</div>
                <div>Other info: </div>
                <div>Other info:</div>
                <div>Other info:</div>
            </div>
        </div>
         <div className="-ml-2 my-4 flex flex-wrap gap-8">
            <div className="flex-auto bg-white shadow-lg rounded-lg">
              <Bar data={data} options={options} />
            </div>
            <div className="flex-auto bg-white shadow-lg rounded-lg h-72 w-72"></div>
            <div className="flex-auto bg-white shadow-lg rounded-lg h-72 w-72"></div>
        </div>
        </div>
      </main>
        </>
    )
}


Profile.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://172.28.244.244:105/profile/3');
    const info = res.data;
    return { info };
  } catch (error) {
    return { error };
  }
};

export default Profile;