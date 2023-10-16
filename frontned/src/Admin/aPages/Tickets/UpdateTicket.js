import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import ApiServices from '../../../services/ApiServices';
import { useEffect,useState } from 'react';

export default function UpdateTicket() {
    const param=useParams()
    const id=param.id

    const[routId,setRouteId]=useState("")
    const ChangeRouteId=(e)=>{
        setRouteId(e.target.value)
  
    }
  
    const[datefrom,setDateFrom]=useState("")
    const ChangeDatefrom=(e)=>{
        setDateFrom(e.target.value)
  
    }
  
    const[timestart,settimeStart]=useState("")
    const ChangetimeStart=(e)=>{
        settimeStart(e.target.value)
  
    }
    const[timearrival,setTimeArrival]=useState("")
    const ChangeTimeArrival=(e)=>{
        setTimeArrival(e.target.value)
  
    }
    const[datereturn,setDateReturn]=useState("")
    const ChangeDateReturn=(e)=>{
        setDateReturn(e.target.value)
  
    }
    const[timeretuenstart,setTimeReturnStart]=useState("")
    const ChangetimeretuenStart=(e)=>{
        setTimeReturnStart(e.target.value)
  
    }
    const[timereturnarrived,setTimeReturnArrived]=useState("")
    const ChangetimeReturnArrived=(e)=>{
        setTimeReturnArrived(e.target.value)
  
    }
    const[price_economy,setPriceEconomy]=useState("")
    const ChangePriceEconomy=(e)=>{
        setPriceEconomy(e.target.value)
  
    }
    const[price_business,setPriceBusiness]=useState("")
    const ChangePriceBusiness=(e)=>{
        setPriceBusiness(e.target.value)
  
    }
  
    const[descriptions,setDescription]=useState("")
    const ChangeDescription=(e)=>{
        setDescription(e.target.value)
  
    }
    const[totalticket,setNoTicket]=useState("")
    const ChangeticketNo=(e)=>{
        setNoTicket(e.target.value)
  
    }
    const nav=useNavigate()

    const [allroutes, setAllRoutes]=useState([])
    useEffect(()=>{
      
      ApiServices.viewAllroutes().then(
        (x)=>{
          // console.log(x)
          setAllRoutes(x.data.data)
        }
      ).catch(
        (error)=>{
          console.log("there is error ")
        }
      )
    },[])



    useEffect(()=>{
        let obj={
            _id:id
        }
        // console.log(obj)
        ApiServices.singleTicket(obj).then(
            (response)=>{
                console.log(response)
                setRouteId(response.data.data.routId)
                setDateFrom(response.data.data.datefrom)
                settimeStart(response.data.data.timestart)
                setTimeArrival(response.data.data.timearrival)
                setDateReturn(response.data.data.datereturn)
                setTimeReturnStart(response.data.data.timeretuenstart)
                setTimeReturnArrived(response.data.data.timereturnarrived)
                setPriceEconomy(response.data.data.price_economy)
                setPriceBusiness(response.data.data.price_business)
                setDescription(response.data.data.descriptions)
                setNoTicket(response.data.data.totalticket)
                // setPassword(response.data.data.password)
            }
        ).catch()
    },[])

    const handleform=(e)=>{
        e.preventDefault()
        let obj={
            routId:routId,
          datefrom:datefrom,
          timestart:timestart,
          timearrival:timearrival,
          datereturn:datereturn,
          timeretuenstart:timeretuenstart,
          timereturnarrived:timereturnarrived,
          price_economy:price_economy,
          price_business:price_business,
          descriptions:descriptions,
          totalticket:totalticket,
          _id:id
        }
        // console.log(data)
        ApiServices.updateTicket (obj).then(
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
    <br/><br/>
    <br/><br/>
    <br/><br/>
       <section className=" gradient-custom">
    
    <div className="container py-5 h-100" >
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-lg-9 col-xl-7">
          <div className="card shadow-2-strong card-registration" style={{borderRadius:"15px;"}}>
            <div className="card-body p-4 p-md-5">
              {/* <h2 className="mb-4 pb-2 pb-md-0 mb-md-5">Add Tickets</h2> */}
              <h5>Add ticket</h5>
              <form onSubmit={handleform}>
  
              <div className="row">
                  <div className="col-12">
  
                  <select className="select form-control" style={{width:"500px"}} value={routId} onChange={ChangeRouteId} >
                       <option value="" disabled selected >route</option>
                    {
                      allroutes?.map((el, index)=>(
                        <option value={el?._id}>{el?.flightId?.flightname},{el?.from?.addDestination},{el?.to?.addDestination}</option>
                          ))
                          }
      
                </select>
                    <label className="form-label select-label">Choose option</label>
  
                  </div>
                </div>
  
  
                <div className="row">
                  <div className="col-md-6 mb-4">
  
                    <div className="form-outline">
                      <input type="date" id="firstName" className="form-control"value={datefrom} onChange={ChangeDatefrom}  />
                      <label className="form-label" for="firstName">dateFrom</label>
                    </div>
  
                  </div>
                  <div className="col-md-6 mb-4">
  
                    <div className="form-outline">
                      <input type="time" id="lastName" className="form-control " value={timestart}  onChange={ChangetimeStart} />
                      <label className="form-label" for="lastName">timeStart</label>
                    </div>
  
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-md-6 mb-4 d-flex align-items-center">
  
                    <div className="form-outline datepicker w-100">
                      <input type="time" className="form-control " id="birthdayDate"   value={timearrival}   onChange={ChangeTimeArrival} />
                      <label for="birthdayDate" className="form-label">timearrival</label>
                    </div>
  
                  </div>
                  <div className="col-md-6 mb-4">
  
                  <div className="form-outline datepicker w-100">
                      <input type="date" className="form-control " id="birthdayDate" value={datereturn} onChange={ChangeDateReturn}/>
                      <label for="birthdayDate" className="form-label">datereturn</label>
                    </div>
  
  
  
                  </div>
                </div>
  
  
                <div className="row">
                  <div className="col-md-6 mb-4">
  
                    <div className="form-outline">
                      <input type="time" id="firstName" className="form-control " value={timeretuenstart} onChange={ChangetimeretuenStart}/>
                      <label className="form-label" for="firstName">timeReturnStart</label>
                    </div>
  
                  </div>
                  <div className="col-md-6 mb-4">
  
                    <div className="form-outline">
                      <input type="time" id="lastName" className="form-control "  value={timereturnarrived} onChange={ChangetimeReturnArrived} />
                      <label className="form-label" for="lastName">timeReturnArrived</label>
                    </div>
  
                  </div>
                </div>
  
  
                <div className="row">
                  <div className="col-md-6 mb-4">
  
                    <div className="form-outline">
                      <input type="text" id="firstName" className="form-control "value={price_economy} onChange={ChangePriceEconomy} />
                      <label className="form-label" for="firstName">price_economy</label>
                    </div>
  
                  </div>
                  <div className="col-md-6 mb-4">
  
                    <div className="form-outline">
                      <input type="text" id="lastName" className="form-control "   value={price_business}    onChange={ChangePriceBusiness}/>
                      <label className="form-label" for="lastName">price_business</label>
                    </div>
  
                  </div>
                </div>
  
  
                <div className="row">
                  <div className="col-md-6 mb-4">
  
                    <div className="form-outline">
                      <input type="text" id="firstName" className="form-control "   value={descriptions}  onChange={ChangeDescription} />
                      <label className="form-label" for="firstName">descriptions</label>
                    </div>
  
                  </div>
                  <div className="col-md-6 mb-4">
  
                    <div className="form-outline">
                      <input type="text" id="lastName" className="form-control "   value={totalticket}   onChange={ChangeticketNo} />
                      <label className="form-label" for="lastName">totalNoOfTickets</label>
                    </div>
  
                  </div>
                </div>
                
                <div className>
                  <input className="btn btn-primary " type="submit" value="Submit" />
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
