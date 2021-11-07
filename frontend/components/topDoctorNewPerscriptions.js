import useSwr from 'swr'
import React, { useState } from "react";
const api_link = require('../process')

const fetcher = (url) => fetch(url).then((res) => res.json())
export default function topDoctorNewPerscriptions(){
    const [value, setValue] = useState("1");

    function logValue() {
        console.log(value);
    }
    const { data: info, error } = useSwr(`${api_link}/topnew/Cholecap`, fetcher)
    if (error) return <div>Faild to load data...</div>
    if (!info) return <div>Loading...</div>
    console.log(info)
    return(
        <> 
            <div className="flex flex-row p-4">
                <h1 className="flex-1 ml-4 text-grey-dark font-medium text-md">Top Doctors</h1>
                <div class="float-right">
                    <select value={value} onChange={(e) => {setValue(e.target.value);}}  class="border border-grey-light rounded-md text-grey-dark h-8 pl-5 pr-10 bg-white hover:border-grey focus:outline-none appearance-none">
                        <option value="1">Month 1</option>
                        <option value="2">Month 2</option>
                        <option value="3">Month 3</option>
                        <option value="4">Month 4</option>
                        <option value="5">Month 5</option>
                        <option value="6">Month 6</option>
                    </select>
                </div>
            </div>
            <ul>
            {Object.entries(info[value]).map( ([key, val]) => <li>{`${val[`NRx_Month_${value}`]} - ${val['first_name']}`}</li> )}
            </ul>
        </>
    )
}