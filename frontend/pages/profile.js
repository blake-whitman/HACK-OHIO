

export default function Profile(){
    return(
        <>
        <main role="main" className="h-full inline w-full sm:w-3/4 md:w-4/5">
        <div className="ml-12">
        <div className="flex flex-row">
          <h1 className="my-8 text-grey-dark text-3xl font-bold">Doctor Profile</h1>
          <div className="mt-5 absolute right-8">
            <input className="shadow-md rounded-lg bg-white h-10 px-5 pr-16" type="search" name="search" placeholder="Search" />
          </div>
        </div>
        <div className="-ml-2 bg-white shadow-lg rounded-lg text-grey-dark mb-10">
            <div className="my-5 ml-4 items-center flex flex-row text-4xl font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                <h1 className="ml-5">Doctor Name</h1>
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
         <div className="-ml-2 flex flex-wrap gap-8">
            <div className="bg-white shadow-lg rounded-lg h-72 w-72"></div>
            <div className="bg-white shadow-lg rounded-lg h-72 w-72"></div>
        </div>
        </div>
      </main>

        </>
    )
}