import 'tailwindcss/tailwind.css'
export default function Home() {
  return (
    <>
      <main role="main" className="h-full inline w-full sm:w-3/4 md:w-4/5">
        <h1 className="text-grey-dark text-3xl font-bold m-8 ml-12">Dashboard</h1>
        <div class="ml-10 mr-10 flex flex-wrap gap-8">
          <div className="bg-white shadow-lg rounded-lg h-72 w-72"></div>
          <div className="bg-white shadow-lg rounded-lg h-72 w-72"></div>
          <div className="bg-white shadow-lg rounded-lg h-72 w-72"></div>
          <div className="bg-white shadow-lg rounded-lg h-72 w-72"></div>
        </div>
      </main>
    </>
  )
}
