import React, { useEffect,useState } from 'react'
import ApiServices from '../../../services/ApiServices';
import { ToastContainer,toast } from 'react-toastify';


export default function Ticket() {

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


  const[from,setFrom]=useState("")
  const[to,setTo]=useState("")
  const[flightId,setFlightId]=useState("")
  const[routId,setRouteId]=useState("")
  useEffect(()=>{
    console.log(from,to,flightId)
  },[from,to,flightId])
  const ChangeRouteId=(e)=>{
    console.log(e.target.value)
    setRouteId(e.target.value)
    var x=e.target.value.split(",")
    // console.log(x)
    // var x=e.target.value
    console.log("x is", x)
    var a=x[0]
    var b=x[1]
    var c=x[2]
    console.log(a)
    setFlightId(a)
          setFrom(b)
          setTo(c)

  }
// const ChangeRouteId1=(a,b,c)=>{
//       console.log(a,b,c)
//       setFlightId(a)
//       console.log(flightId)
//       setFrom(b)
//       setTo(c)
// }


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
  const[timereturnstart,setTimeReturnStart]=useState("")
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

  
  

  const handleform=(event)=>{
    event.preventDefault()

    let obj={
    from:from,
    to:to,
    flightId:flightId,
    datefrom:datefrom,
    timestart:timestart,
    timearrival:timearrival,
    datereturn:datereturn,
    timereturnstart:timereturnstart,
    timereturnarrived:timereturnarrived,
    price_economy:price_economy,
    price_business:price_business,
    descriptions:descriptions,
    totalticket:totalticket

     
    }
    console.log(obj)
  
   ApiServices. Addticket(obj)
    .then(
     (el)=>{
       if(el.data.success){
        console.log("add ticket");
        console.log("el.data=",el.data);
        toast.success("Add ticket")
        setTimeout(()=>{
                 
             },2000)
        
        
       }
       else{
         console.log("not add");
         toast.error(" not add")
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
   <br/><br/><br/>
  
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

                <select className="select form-control" style={{width:"500px"}} onChange={ChangeRouteId} >
                     <option value="" disabled selected >route</option>
                  {
                    allroutes?.map((el, index)=>(
                      <option value={[el?.flightId,el?.from,el?.to]}>{el?.flightId},{el?.from},{el?.to}</option>
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
                    <input type="time" id="firstName" className="form-control " value={timereturnstart} onChange={ChangetimeretuenStart}/>
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
