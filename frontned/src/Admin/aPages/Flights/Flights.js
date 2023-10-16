import React, { useEffect, useState } from 'react'
import ApiServices from '../../../services/ApiServices'
import { ToastContainer,toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

export default function Flights() {
//   const [allDest, setAllDest]=useState([])
// useEffect(()=>{
  
//   ApiServices.getDestination().then(
//     (x)=>{
//       // console.log(x)
//       setAllDest(x.data.data)
//     }
//   ).catch(
//     (error)=>{
//       console.log("there is error ")
//     }
//   )
// },[])


const [flightname,setFlightName]=useState("")
const changeflightName=(e)=>{
  setFlightName(e.target.value)
}
const [flightnumber,setFlightNumber]=useState("")
const changeflightNumber=(e)=>{
  setFlightNumber(e.target.value)
}
// const [from,setFrom]=useState("")
// const changeFrom=(e)=>{
//   setFrom(e.target.value)
//   console.log("from is ", e.target.value)
// }
// const [to,setTo]=useState("")
// const changeTo=(e)=>{
//   setTo(e.target.value)
// }
// const [bookingDate,setBookingDate]=useState("")
// const changeBookindate=(e)=>{
//   setBookingDate(e.target.value)
// }
// const [returnDate,setReturnDate]=useState("")
// const changeReturnDate=(e)=>{
//   setReturnDate(e.target.value)
// }

const nav=useNavigate("")
  const handleform=(event)=>{
    event.preventDefault()

    let obj={
    flightname:flightname,
     flightnumber:flightnumber,
     
    }
  
   ApiServices.addflights(obj)
    .then(
     (el)=>{
       if(el.data.success){
        console.log("add flight");
        toast.success("Add flights")
        setTimeout(()=>{
                 
             },2000)
        
        
       }
       else{
         console.log("Add flights");
         toast.error(" Add flights")
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
        <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px;"}}>
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Add Flights</h3>
            <form onSubmit={handleform}>
              <div className="row">
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="text" id="firstName" className="form-control form-control-lg" value={flightname} onChange={changeflightName}/>
                    <label className="form-label" for="firstName">Flight Name</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="text" id="lastName" className="form-control form-control-lg"value={flightnumber} onChange={changeflightNumber}/>
                    <label className="form-label" for="lastName">Flight Number</label>
                  </div>

                </div>

                
              </div>

              {/* <div className="row">
                <div className="col-md-6 mb-4 d-flex align-items-center">

                <div className="row">
                <div className="col-12">

                  <select className="select form-control-lg" value={from} onChange={changeFrom} >
                    <option value="" disabled selected >From</option>
                    {
                      allDest?.map((el, index)=>(
                        <option value={el?._id}>{el?.addDestination}</option>
                      ))
                    }
                    
                  </select>
                </div>
              </div>

                </div>
                <div className="col-md-6 mb-4" >
                  <select className="select form-control-lg" value={to} onChange={changeTo}>
                  <option value="" disabled selected >To</option>
                    {
                      allDest?.map((el, index)=>(
                        <option value={el?._id}>{el?.addDestination}</option>
                      ))
                    }
                  </select>
                </div>
              </div> */}

              {/* <div className='display-flex flex-row mb-2'>
              <div className="form-check-inline">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
  <label className="form-check-label ms-2 text-dark " for="exampleRadios1">
    ONE WAY
  </label>
</div>
<div className="form-check-inline">
  <input className="form-check-input ms-2 text-dark" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
  <label className="form-check-label ms-2 text-dark" for="exampleRadios2">
    TWO WAY
  </label>
</div>
              </div> */}
              {/* <div className="row">
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="Date" id="firstName" className="form-control form-control-lg" value={bookingDate} onChange={changeBookindate} />
                    <label className="form-label" for="firstName">flight_bookigDate</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="Date" id="lastName" className="form-control form-control-lg" value={returnDate} onChange={changeReturnDate} />
                    <label className="form-label" for="lastName">flight_returnDate</label>
                  </div>

                </div>

                
              </div> */}




              <div className="mt-4 pt-2">
                <input className="btn btn-primary" type="submit" value="Submit" />
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
