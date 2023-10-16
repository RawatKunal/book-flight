
import React, {useEffect,useState ,CSSProperties} from 'react'
import ApiServices from '../../../services/ApiServices'
import { Link } from 'react-router-dom'
import { ScaleLoader} from "react-spinners"

export default function TicketSearch() {
  const [ticket,setTicket]=useState()

  const [allDest, setAllDest]=useState([])
  const [load, setLoad]=useState(false)
  const override=CSSProperties= {
    display: "block",
    margin: "200px auto",
  };
    const[from,setFrom]=useState("")
    const Changefrom=(e)=>{
        setFrom(e.target.value)

    }

    const[to,setTo]=useState("")
    const ChangeTo=(e)=>{
        setTo(e.target.value)

    }

    const[date,setDate]=useState("")
    const ChangeDate=(e)=>{
        setDate(e.target.value)

    }
    

     const Myticket=()=>{
       
      var obj={
        from:from,
        to:to,
        date:date,
      }
      setLoad(true)
    ApiServices.mytickets(obj).then(
      (response)=>{
        console.log(response.data.data)
        setTicket(response.data.data)
        setTimeout(()=>{
          setLoad(false) 
             },1000)
             
      }
    )
    .catch(
      (error)=>{
        console.log(error)
      }
    )
    }

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

  
  return (
    
  <>
  <br/><br/><br/>
  
 
<br/><br/>
<br/><br/>

<div className='d-flex justify-content-center '>
<ScaleLoader loading={load} size={70} color='blue' cssOverride={override} />
</div>
<div className={load?"bg-disabled my-5":"my-5"}></div>
           <div className='div1'>
           <div className='div2'>
   
            <i className="bi bi-airplane-fill" style={{color:"black"}}></i>
         </div>
          <br/>
         <div  className='row'>

                   <select className="select form-control-lg" value={from} onChange={Changefrom} id='sel1' >
                    <option value="" disabled selected >From</option>
                    {
                      allDest?.map((el, index)=>(
                        <option >{el?.addDestination}</option>
                      ))
                    }
                    </select>
                    
                <select className="select form-control-lg" value={to} onChange={ChangeTo} id='sel2'>
                  <option value="" disabled selected >To</option>
                    {
                      allDest?.map((el, index)=>(
                        <option>{el?.addDestination}</option>
                      ))
                    }
                  </select>

           <div className="form-outline" id="sel3">
              <input type="date" id="date" className="form-control"value={date} onChange={ChangeDate}  />     
             </div>

       </div>
      </div>
 
            <button className='btn btn-info'id='buttonglow' onClick={Myticket}>search</button> 

  <br/><br/>

   

<div className='row my-5 p-5 m-3'>
  
   {
                    ticket?.map(
                        (el,index)=>(
                        
                          <div className="col-md-4  p-5">
                          
                           <div className='card' id='cardticket'>
                            
                                       <div className='row'>
                                        <div className="col-md-6 mb-4">
                                        <h5 className="card-title">FlightName</h5>
                                        </div>

                                        <div className="col-md-6 mb-4 d-flex align-items-left">
                                        <h3 className="card-text"> {el?.flightId}</h3>
                                       </div>
                                        </div>

                                        <div className="row">

                                        <div className="col-md-6 mb-4">
                                        <h6 className="card-text">{el?.timestart}</h6>
                                       </div>

                                       <div className="col-md-6 mb-4 d-flex align-items-left">
                                        <h6 className="card-text">{el?.timearrival}</h6>  
                                        
                                          
                                        </div>
                                         </div>
                                         

                                        <div className="row">
                                        <div className="col-md-6 mb-4">
                                        <h6 className="card-text">From: {el?.from}</h6>
                                       </div>

                                       <div className="col-md-6 mb-4 d-flex align-items-left">
                                        <h6 className="card-text">To:{el?.to}</h6>   
                                    </div>
                                    </div>

                                   <Link to={"/booking/"+el?._id}>
                                    <button className='btn btn-info' id='buttonbooking'>TicketDetails</button>
                                   </Link>
                                   </div>
                                 </div> 

                                 
                        )

                    )
                }
          
          </div>
        


  </>
  
  )
  
}
