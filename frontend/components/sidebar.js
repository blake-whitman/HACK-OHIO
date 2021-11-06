import Link from 'next/Link'

export default function Sidebar(){
    return(
        <aside className="align-top left-0 inset-y-0 w-full sm:w-1/4 md:w-1/5">  
            <div className="h-screen sticky left-0 inset-y-0 w-full bg-blue text-center">
                <h1 className="pt-7 text-white font-bold text-xl">Project Name</h1>
                <div className="content-center">
                    <hr className="m-auto mt-5 border-blue-lightest w-4/5"></hr>
                </div>
            </div>
        </aside>
    )
}