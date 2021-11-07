import Link from 'next/Link'
import { useRouter } from 'next/router'

export default function Sidebar({active}){
    function activePage(){
        const router = useRouter()
        return router.pathname
    }
    activePage()
    return(
        <aside className="align-top left-0 inset-y-0 w-full sm:w-1/4 md:w-1/5">  
            <div className="h-screen sticky left-0 inset-y-0 w-full bg-blue text-center">
                <h1 className="pt-7 text-white font-bold text-xl">Project Name</h1>
                <div className="content-center">
                    <hr className="m-auto mt-5 border-blue-lightest w-4/5"></hr>
                </div>
                <ul className="divide-y divide-transparent ml-10">
                    <Link href="/">
                    <li className={`items-center flex flex-row m-4 text-lg ${activePage() == "/" ? "text-white" : "text-blue-lightest hover:text-white"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                        <p>Dashboard</p>
                    </li>
                    </Link>
                    <Link href="/analytics">
                    <li className={`items-center flex flex-row m-4 text-lg ${activePage() == "/analytics" ? "text-white" : "text-blue-lightest hover:text-white"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>
                        Analytics
                    </li>
                    </Link>
                    <Link href="/profile/1">
                    <li className={`items-center flex flex-row m-4 text-lg ${activePage().includes("profile") ? "text-white" : "text-blue-lightest hover:text-white"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>
                        Profiles
                    </li>
                    </Link>
                </ul>
            </div>
        </aside>
    )
}