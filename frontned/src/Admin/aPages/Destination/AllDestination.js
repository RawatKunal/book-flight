import React from 'react'
import ApiServices from '../../../services/ApiServices'
import { useEffect,useState } from "react"

export default function AllDestination() {
    // const [x,setX]=useState(0)
    const [destination,setDestination]=useState()
    // useEffect(
    //     ()=>{
    //         console.log("Hello world")
    //     }, []
    // )
    useEffect(
        ()=>{
            ApiServices.getDestination().then(
                (response)=>{
                    console.log(response.data.data)
                    setDestination(response.data.data)
                }
            ).catch(
                (error)=>{
                    console.log(error)
                }
            )
        },[]
    )
  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className='container my-5 py-5'>
        <table className="table table-bordered text-dark">
            <thead>
                <tr style= {{backgroundColor: "skyblue"}}>
                    <td>SR no</td>
                    <td>Destination</td>
                  
                </tr>
            </thead>
            <tbody>
                {
                    destination?.map(
                        (el,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{el?.addDestination}</td>
                                {/* <td>{el?.email}</td> */}
                                
                                <td>
                                    {/* <Link to={"/Master/Updateuser/"+el?._id}>
                                    <button>Edit</button>
                                    </Link> */}
                                </td>
                            </tr>
                        )
                    )
                }
            </tbody>
        </table>
        </div>
    </>
  )
}
