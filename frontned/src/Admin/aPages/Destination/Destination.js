import React, { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import ApiServices from '../../../services/ApiServices';
import { useNavigate } from 'react-router-dom';

export default function Destination() {
  const [addDestination,setAddDestination]=useState("")
  const changeDestination=(e)=>{
  setAddDestination(e.target.value)
  }
  const nav=useNavigate("")
  const handleform=(event)=>{
    event.preventDefault()

    let obj={
    addDestination:addDestination,
    }
  
   ApiServices.addDestination(obj)
    .then(
     (el)=>{
       if(el.data.success){
        console.log("Add destination");
        toast.success("add destination")
        setTimeout(()=>{
          
                 
             },2000)
        
        
       }
       else{
         toast.error("not add")
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
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Add Destination</h3>
              <form onSubmit={handleform}> 
  
                <div className="row">
                 
  
                    <div className="form-outline">
                      <input type="text" id="firstName" className="form-control form-control-lg"value={addDestination} onChange={changeDestination} />
                      <label className="form-label" for="firstName">Add Destination</label>
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
