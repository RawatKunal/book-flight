import React, { useEffect,useState } from 'react'
import ApiServices from '../../../services/ApiServices';

export default function Viewroutes() {
  const[routes1,setRoutes]=useState()
  useEffect(
    ()=>{
      console.log("hello");
    },[]
  )
 
  useEffect(
    ()=>{
      ApiServices.viewAllroutes().then(
        (response)=>{
          console.log(response.data.data)
          setRoutes(response.data.data)
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
      <h1 className='my-5'>View Routes</h1>
    <table className="table table-bordered text-dark my-5">
                <thead>
                    <tr style={{backgroundColor:"skyblue"}}>
                        <td>SR no</td>
                        <td>flightName</td>
                        <td>From</td>
                        <td>To</td>
                        <td>Edit</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        routes1?.map(
                            (el,index)=>(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{el?.flightId}</td>
                                    <td>{el?.from}</td>
                                    <td>{el?.to}</td>

                                    <td>
                                        {/* <Link to={"/Master/Updateuser/"+el?._id}> */}
                                        <button>Edit</button>
                                        {/* </Link> */}
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
