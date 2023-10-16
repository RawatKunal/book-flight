import React from 'react'
import ApiServices from '../../../services/ApiServices'
import { useNavigate,useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
export default function Updateflight() {

    const param=useParams()
    const id=param.id

    const [flightname,setFlightName]=useState("")
const changeflightName=(e)=>{
  setFlightName(e.target.value)
}
const [flightnumber,setFlightNumber]=useState("")
const changeflightNumber=(e)=>{
  setFlightNumber(e.target.value)
}
useEffect(()=>{
    let obj={
        _id:id
    }

    ApiServices.singleflight(obj).then(
        (response)=>{
            setFlightName(response.data.flightname)
            setFlightNumber(response.data.flightnumber)
        }
    ).catch()
},[])

const handleform=(e)=>{
    e.preventDefault()
    let obj={
      flightname:flightname,
      flightnumber:flightnumber,
      _id:id
    }
    // console.log(data)
    ApiServices.Updateflight(obj).then(
        (res)=>{
            console.log(res)
            if(res.data.success){
              
            }
        }
    ).catch(
        (err)=>{
            console.log(err)
        }
    )
}


  return (
   <>
   
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
