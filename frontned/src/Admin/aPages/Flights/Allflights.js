import React, { useEffect, useState } from 'react'
import ApiServices from '../../../services/ApiServices';
import { BeatLoader} from "react-spinners"
import { Link } from 'react-router-dom';

export default function Allflights() {
  const [flight,setFlight]=useState()
  const [load, setLoad]=useState(true)
  const override={
    margin:"0 560px",
    display:"block",
    
    
}
  useEffect(
    ()=>{
      console.log("hello");
    },[]
  )
  useEffect(
    ()=>{
      ApiServices.getallFights().then(
        (response)=>{
          console.log(response.data.data)
          setFlight(response.data.data)
          
          setTimeout(()=>{
            
            setLoad(false) 
               },3000)
               
        }
      )
      .catch(
        (error)=>{
          console.log(error)
        }
      )
    },[]
  )
  return (
   <>
  
       
    <div className='container my-5 py-5'>
      <h1 className='my-5'>View Flights</h1>
      <BeatLoader loading={load} cssOverride={override} color='green'/>
            <div className={load==true?"white-bg":""}>

    <table className="table table-bordered text-dark my-5">

    
                <thead>
                    <tr style={{backgroundColor: "skyblue"}}>
                        <td>SR no</td>
                        <td>flightName</td>
                        <td>flightNumber</td>
                        <td>Edit</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        flight?.map(
                            (el,index)=>(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{el?.flightname}</td>
                                    <td>{el?.flightnumber}</td>

                                    <td>
                                    <Link to={"/admin/updateflight/"+el?._id}>
                                        <button className='btn btn-info'>Edit</button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        )
                    }
        
                </tbody>

            </table>
          
             </div>    

            
            </div>

            
   </>
  )
}
