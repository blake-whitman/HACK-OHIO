import { Line } from 'react-chartjs-2';
import { useRouter } from 'next/router'
import useSwr from 'swr'
import TotalDoctorPerscriptions from "../../../components/totalDoctorPerscriptions"
const api_link = require('../../../process')


const fetcher = (url) => fetch(url).then((res) => res.json())
export default function Profile() {
  const router = useRouter();
  const { id } = router.query;
  const { data: info, error } = useSwr(`${api_link}/profile/${id}`, fetcher)
  if (error) return <div>Faild to load data...</div>
  if (!info) return <div>Loading...</div>
  var data = {
    labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6', 'Month 7', 'Month 8', 'Month 9'],
    datasets: [
      {
        label: `New ${info.Product} Perscriptions + 3 Month Prediction`,
        data: [info.NRx_Month_1, info.NRx_Month_2, info.NRx_Month_3, info.NRx_Month_4, info.NRx_Month_5, info.NRx_Month_6, info.NRx_Month_7, info.NRx_Month_8, info.NRx_Month_9],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
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
            <div className="flex-auto p-4 max-w-full bg-white shadow-lg rounded-lg">
              <Line data={data} options={options} />
            </div>
            <div className="flex-auto p-4 max-w-full bg-white shadow-lg rounded-lg">
              <TotalDoctorPerscriptions info={info} />
            </div>
            <div className="flex-auto bg-white shadow-lg rounded-lg h-72 w-72"></div>
        </div>
        </div>
      </main>
        </>
    )
}