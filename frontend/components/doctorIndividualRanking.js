import useSwr from 'swr'
import React, { useState } from "react";
import Link from 'next/Link'
const api_link = require('../process')

const fetcher = (url) => fetch(url).then((res) => res.json())
export default function doctorIndividualRanking({id}){
    const { data: info, error } = useSwr(`${api_link}/topnew/${product}`, fetcher)
    if (error) return <div>Failed to load data, trying again...</div>
    if (!info) return <div>Loading...</div>
    console.log(info)
    return(
        <> 
            <div className="flex flex-row p-4">
                <h1 className="flex-1 ml-4 text-grey-dark font-medium text-md">New {product} Perscriptions - Top Doctors:</h1>
            </div>
            <ul className="-mt-4">
            {Object.entries(info[value]).map( ([key, val]) => <Link href={`/profile/${val["id"]}`}><li className="text-grey-dark m-4 text-md ml-8 pl-2 hover:bg-grey-light">{`${val['first_name']} ${val['last_name']} - ${val[`NRx_Month_${value}`]} Perscriptions`}</li></Link> )}
            </ul>
        </>
    )
}