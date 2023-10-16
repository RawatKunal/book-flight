import React, { useEffect, useState } from 'react'
import ApiServices from '../../../services/ApiServices'
import { Navigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Moment from 'react-moment';
import { toast } from 'react-toastify';


  
export default function Booking() {
 const [ticket,setTicket]=useState([])
 const[booking,setbooking]=useState()
  const [typePay,setTypePay]=useState("credit")

const [amount,setAmount]=useState(0)
const [priceBusiness,setPriceBusiness]=useState(0)
const [priceEconomy,setPriceEconomy]=useState(0)
const [cardNumber,setCardNumber]=useState()
const [cvv,setCvv]=useState()
 const [Noofseats,setTotalNoOFSeats]=useState(1)
 const Changeseats=(e)=>{
  setTotalNoOFSeats(e.target.value)
  if(!!Noofseats){
  setAmount(parseInt(amount)*parseInt(Noofseats))
  // console.log(amount, "total")
  }
 }

    const[type,setType]=useState("Economy")
    const param=useParams()
    const id=param.id
    const t1=Math.round((Math.random()*10000))
    const transaction="BL-".t1;
    const check=(e)=>{
      e.preventDefault()
      var obj={
       type:type,
       Noofseats:Noofseats,
       ticketId:id,
       paymentMode:typePay,
       total_amount:amount,
       transaction_id:transaction,
       userid:sessionStorage.getItem("userId")
       
      }
      ApiServices.booking(obj).then(
        (response)=>{
          console.log(response.data.data)
         
        
        }
      )
      .catch(
        (error)=>{
          console.log(error)
        }
      )

    }
    

    useEffect(()=>{
      let obj={
        _id:id
      }
        ApiServices.singleTicket(obj).then(
            (response)=>{
              console.log(response.data.data)
              setTicket(response.data.data)
              console.log(response)
                   setAmount(response.data.data.price_economy)
                  setPriceBusiness(response.data.data.price_business)
                  setPriceEconomy(response.data.data.price_economy)
                   console.log(amount,"amount", priceBusiness, priceEconomy)
                   
            }
          )
          .catch(
            (error)=>{
              console.log(error)
            }
          )
    },[])
    useEffect(()=>{
      console.log("use ", amount, priceBusiness, priceEconomy)
    },[priceBusiness, priceEconomy, amount])
    const changePriceBus=()=>{
      if(!!Noofseats){
        setAmount(parseInt(Noofseats)*parseInt(priceBusiness))
      }
    }
    const changePriceEco=()=>{
      if(!!Noofseats){
        setAmount(parseInt(Noofseats)*parseInt(priceEconomy))
      }
    }
    const token=sessionStorage.getItem("token")
    // console.log(token, "token")
    if(!token || token=="null" || token==null){
      toast.error("Please Login to book")
      return <Navigate to="/login"/>
    }
  return (
   <>
  
   <div className='divcolor'>
   <div className='container my-5 p-5'>
   <div class="accordion my-5 p-5" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Ticket Details
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
 
        
            <div className='card' id="bookingticket">
                  
                   <i className="bi bi-airplane-engines-fill"></i>
                              <h2 id="details">Ticket Details</h2>
                              <div className="d-flex flex-row">
                              <h4> {ticket?.from}</h4>__
                              <h4 >{ticket?.to}</h4>| 
                              <Moment format="DD/MM/YYYY"> 
                              <p>{ticket?.datefrom}</p>
                                </Moment> 
                             
                            </div>

                            <div className='row'>
               
                 <div className='d-flex justify-content-around'>
                   <h5 className="card-title">{ticket?.flightId}</h5>
                   
                   <h4 className="card-text">{ticket?.timestart}</h4>
                   <h4 className="card-text" >{ticket?.timearrival}</h4>
                   </div>
                   </div>

                

               <div className="row">
                   <div className="d-flex justify-content-around">
                    <h6>FlightName</h6>
                   <h6 className="card-text"> {ticket?.from}</h6>
                    <h6 className="card-text">{ticket?.to}</h6>  
                    
                    </div>   
                 </div>

                 <div className="row">
                   <div className="d-flex justify-content-around">
                    <h6>FlightsTypePrice</h6>
                   <h6 className="card-text"> Economy:{ticket?.price_economy}</h6>
                    <h6 className="card-text">Business:{ticket?.price_business}</h6>  
                    
                    </div>
                    </div>
                    <div className="row">
                   <div className="d-flex justify-content-around">
                    <h6>somedetilas</h6>
                   <h6 className="card-text"> {ticket?.descriptions}</h6>
                    <h6 className="card-text">totalticket:{ticket?.totalticket}</h6>  
                    
                    </div>   
                 </div>
               <button className='btn btn-info' type="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseTwo" data-bs-target="#collapseTwo"  >Booking</button>
                 </div>
      </div>
    </div>
  </div>
  <form  onSubmit={check}> 

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type='button' data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseTwo" data-bs-target="#collapseTwo"  >
        Booking Details
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div className="container py-5 h-100"  >
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-lg-9 col-xl-7">
          <div className="card shadow-2-strong card-registration" style={{borderRadius:"15px"}} id="border">
            <div className="card-body p-4 p-md-5">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Booking Details</h3>
  
                <div className="row">
                    <div className="form-outline">
                      <input type="text" id="firstName" className="form-control form-control-lg" value={Noofseats} onChange={Changeseats} min="1"  required/>
                      <label className="form-label" for="firstName">TotalNoofSeats</label>
                    </div>
                </div>

                <div class="form-check form-check-inline">
         <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Business" checked={type=="Business"} required onChange={(e)=>{setType("Business"); changePriceBus()}}/>
             <label class="form-check-label" for="inlineRadio1">Business</label>
                 </div>

          <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Economy" checked={type=="Economy"} required onChange={(e)=>{setType("Economy"); changePriceEco()}}/>
           <label class="form-check-label" for="inlineRadio2">Economy</label>
         </div>
                <div className="mt-4 pt-2">
                  <button className='btn btn-info'  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Proceed To payment</button>
                </div>
  
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type='button'>
        Payment
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <h4>Total payable Amount: &#8377; {amount}</h4>
        <div className='row my-3'>
          <div className='col-md-3'>
            <label>Enter Payment Method</label>
          </div>
          <div className='col-md-8'>
            <input className='form-check-input me-2' type="radio" value="credit" checked={typePay=="credit"} onClick={(e)=>{setTypePay("credit")}} required/>Credit Card

            <input className='form-check-input ms-4 me-2' type="radio" value="debit" checked={typePay=="debit"} onClick={(e)=>{setTypePay("debit")}} required/>Debit Card
          </div>
        </div> 
        <div className='row my-3'>
          <div className='col-md-3'>
            <label>Enter Card Number</label>
          </div>
          <div className='col-md-8'>
            <input className='form-control' type="number" value={cardNumber}  onChange={(e)=>{setCardNumber(e.target.value)}} required />
          </div>
        </div> 
        <div className='row my-3'>
          <div className='col-md-3'>
            <label>Enter CVV</label>
          </div>
          <div className='col-md-8'>
            <input className='form-control' type="number" value={cvv}  onChange={(e)=>{setCvv(e.target.value)}} required/>

          </div>
        </div>
        <div className="mt-4 pt-2">
                  <button className='btn btn-info' type='submit' >Book</button>
                </div>
                
      </div>
    </div>
  </div>
  </form>
</div>
</div>
</div>
   </>
  )
}
