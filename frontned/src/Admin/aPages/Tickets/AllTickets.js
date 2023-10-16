import React, { useEffect,useState } from 'react'
import { BeatLoader} from "react-spinners"
import ApiServices from '../../../services/ApiServices';
import { Link } from 'react-router-dom';

export default function AllTickets() {

  const [ticket,setTicket]=useState()
  const [load, setLoad]=useState(true)
  const override={
    margin:"0 560px",
    display:"block",
    
  }
  useEffect(
    ()=>{
      ApiServices.viewtickets().then(
        (response)=>{
          console.log(response.data.data)
          setTicket(response.data.data)
          
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
                        <td>flightname</td>
                        <td>from</td>
                        <td>to</td>
                        <td>datefrom</td>
                        <td>timestart</td>
                        <td>timearrival</td>
                        <td>datereturn</td>
                        <td>timereturnstart</td>
                        <td>timereturnarrived</td>
                        <td>price_economy</td>
                        <td>price_business</td>
                        <td>descriptions</td>
                        <td>totalNoOfTickets</td>
                        <td>Edit</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        ticket?.map(
                            (el,index)=>(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{el?.flightId }</td>
                                    <td>{el?.from }</td>
                                    <td>{el?.to }</td>
                                    <td>{el?.datefrom}</td>
                                    <td>{el?.timestart}</td>
                                    <td>{el?.timearrival}</td>
                                    <td>{el?.datereturn}</td>
                                    <td>{el?.timereturnstart}</td>
                                    <td>{el?.timereturnarrived}</td>
                                    <td>{el?.price_economy}</td>
                                    <td>{el?.price_business}</td>
                                    <td>{el?.descriptions}</td>
                                    <td>{el?.totalticket}</td>
                                    
                                    <td>
                                    <Link to={"/admin/updateticket/"+el?._id}>
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
