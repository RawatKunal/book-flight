import React, {useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ApiServices from '../../../services/ApiServices';
import { ToastContainer,toast } from 'react-toastify';
export default function Addroutes() {


const [allDest, setAllDest]=useState([])
useEffect(()=>{
  
  ApiServices.getDestination().then(
    (x)=>{
      // console.log(x)
      setAllDest(x.data.data)
    }
  ).catch(
    (error)=>{
      console.log("there is error ")
    }
  )
},[])


const [allflights,setAllFlights]=useState([])
useEffect(()=>{
    ApiServices.getallFights().then(
        (y)=>{
            setAllFlights(y.data.data)
        }
    ).catch(
        (error)=>{
            console.log("there is error ") 
        }
    )
},[])

 
    const[flightId,setFlight]=useState("")
    const ChangeFlightId=(e)=>{
        setFlight(e.target.value)

    }
    const[from,setFrom]=useState("")
    const Changefrom=(e)=>{
        setFrom(e.target.value)

    }
    const[to,setTo]=useState("")
    const ChangeTo=(e)=>{
        setTo(e.target.value)

    }


    // const nav=useNavigate("")
    const handleform=(event)=>{
        event.preventDefault()
    
        let obj={
        flightId:flightId,
         from:from,
         to:to
         
        }
      
       ApiServices.Addroutes(obj)
        .then(
         (el)=>{
           if(el.data.success){
            console.log("add routes");
            toast.success("Add routes")
            setTimeout(()=>{   
                 },2000)
           }
           else{
             console.log("Add routes");
             toast.error(" Add routes")
           }
         }
        )
        .catch(
         (error)=>{
     console.log("error",error);
         }
        )
     }
    


  return (
<>
<ToastContainer
            position="top-left"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />





<section className="vh-100 gradient-custom">
    
    <div className="container py-5 h-100" >
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-lg-9 col-xl-7">
          <div className="card shadow-2-strong card-registration" style={{borderRadius:"15px"}}>
            <div className="card-body p-4 p-md-5">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Add Routes</h3>
              <form onSubmit={handleform}> 
  
            

                      <div className="row">
                        <div className="col-md-6 mb-4 d-flex align-items-center">

                          <div className="row">
                         <div className="col-12">

                      <select className="select form-control-lg" style={{width:"600px"}} value={flightId} onChange={ChangeFlightId} >
                     <option value="" disabled selected >Flights</option>
                {
                                                  
                    allflights?.map((el, index)=>(
                      <option >{el?.flightname}</option>
                        ))
                        }
    
              </select>
              </div>
               </div>

               </div>
               </div>


                   <div className="row">
                <div className="col-md-6 mb-4 d-flex align-items-center">

                <div className="row">
                <div className="col-12">

                  <select className="select form-control-lg" value={from} onChange={Changefrom} >
                    <option value="" disabled selected >From</option>
                    {
                      allDest?.map((el, index)=>(
                        <option>{el?.addDestination}</option>
                      ))
                    }
                    
                  </select>
                </div>
              </div>

                </div>
                <div className="col-md-6 mb-4" >
                  <select className="select form-control-lg" value={to} onChange={ChangeTo}>
                  <option value="" disabled selected >To</option>
                    {
                      allDest?.map((el, index)=>(
                        <option>{el?.addDestination}</option>
                      ))
                    }
                  </select>
                </div>
              </div> 
  
  
                  
                    
  
                <div className="mt-4 pt-2">
                  <input className="btn btn-primary" type="submit" value="Submit" onClick={handleform}/>
                </div>
  
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</>
  )
}
