import Link from 'next/Link'

export default function Analytics(){
    return (
        <main role="main" className="h-full inline w-full sm:w-3/4 md:w-4/5">
        <div className="flex flex-row">
          <h1 className="m-8 ml-12 text-grey-dark text-3xl font-bold">Analytics</h1>
          <div className="mt-5 absolute right-8">
            <input className="shadow-md rounded-lg bg-white h-10 px-5 pr-16" type="search" name="search" placeholder="Search" />
          </div>
        </div>
        <h1 className="text-3xl text-grey-dark ml-16">By Perscription</h1>
        <div className="m-8 flex flex-row text-white gap-8">
            <Link href="/analytics/cholecap">
            <div className="transition duration-300 ease-in-out bg-drugs-red w-52 h-52 rounded-lg hover:drop-shadow-lg hover:shadow-lg hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 m-4 bg-drugs-red opacity-40" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" /></svg>
                <h1 className="text-center text-white text-3xl font-medium">Cholecap</h1>
            </div>
            </Link>
            <Link href="/analytics/zapapain">
            <div className="transition duration-300 ease-in-out bg-drugs-blue w-52 h-52 rounded-lg hover:drop-shadow-lg hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 m-4 bg-drugs-blue opacity-40" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" /></svg>
                <h1 className="text-center text-white text-3xl font-medium">Zap-a-Pain</h1>
            </div>
            </Link>
            <Link href="/analytics/nasalclear">
            <div className="transition duration-300 ease-in-out bg-drugs-yellow w-52 h-52 rounded-lg hover:drop-shadow-2lg hover:shadow-lg hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 m-4 bg-drugs-yellow opacity-40" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" /></svg>
                <h1 className="text-center text-white text-3xl font-medium">Nasalclear</h1>
            </div>
            </Link>
            <Link href="/analytics/novaitch">
            <div className="transition duration-300 ease-in-out bg-drugs-teal w-52 h-52 rounded-lg hover:drop-shadow-lg hover:shadow-lg hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 m-4 bg-drugs-teal opacity-40" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" /></svg>
                <h1 className="text-center text-white text-3xl font-medium">Nova-itch</h1>
            </div>
            </Link>
        </div>
      </main>
    )
}