import 'tailwindcss/tailwind.css'
import TotalPrescriptions from '../components/totalPrescriptions'
import NewPrescriptions from '../components/newPrescriptions'
import TopDoctorNewPrescriptions from '../components/topDoctorNewPrescriptions'

export default function Home() {
  return (
    <>
      <main role="main" className="h-full inline w-full sm:w-3/4 md:w-4/5">
        <div className="flex flex-row">
          <h1 className="m-8 ml-12 text-grey-dark text-3xl font-bold">Dashboard</h1>
          <div className="mt-5 absolute right-8">
            <input className="shadow-md rounded-lg bg-white h-10 px-5 pr-16" type="search" name="search" placeholder="Search" />
          </div>
        </div>
        <div className="ml-10 mr-10 flex flex-wrap gap-8 mb-10">
          <div className="flex-auto max-w-full bg-white shadow-lg rounded-lg"><TotalPrescriptions/></div>
          <div className="flex-auto max-w-full bg-white shadow-lg rounded-lg"><NewPrescriptions /></div>
          <div className="flex-auto max-w-full bg-white shadow-lg rounded-lg"><TopDoctorNewPrescriptions product="Cholecap"/></div>
          <div className="flex-auto max-w-full h-72 w-72 bg-white shadow-lg rounded-lg"></div>
        </div>
      </main>
    </>
  )
}
