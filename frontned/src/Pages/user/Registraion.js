
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ApiServices from '../../services/ApiServices'
import { ToastContainer,toast } from 'react-toastify';

export default function Registraion() {

  const[name,SetName]=useState("")
  const ChnageName=(e)=>{
    SetName(e.target.value)
  }
  const[email,SetEmail]=useState("")
  const ChnageEmail=(e)=>{
    SetEmail(e.target.value)
  }
  const[password,SetPassword]=useState("")
  const ChnagePassword=(e)=>{
    SetPassword(e.target.value)
  }
  const[contact,SetContact]=useState("")
  const ChnageContact=(e)=>{
    SetContact(e.target.value)
  }
 
  const[dob,SetDob]=useState("")
  const ChnageDob=(e)=>{
    SetDob(e.target.value)
  }
  const[gender,setGender]=useState("")
  const ChnageGender=(e)=>{
    setGender(e.target.value)
  }

const nav=useNavigate("")
  const handleform=(event)=>{
    event.preventDefault()

    let obj={
    name:name,
     email:email,
     password:password,
     contact:contact,
     dob:dob,
     gender:gender

    }
  
   ApiServices. Registration(obj)
    .then(
     (el)=>{
       if(el.data.success){
        console.log("user login");
        toast.success("register")
        setTimeout(()=>{
          nav("/login")
                 
             },2000)
        
        
       }
       else{
         console.log("invalid user");
         toast.error("not register")
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
<br/><br/>
<section className="vh-100 gradient-custom">
  <div className="container py-5 h-100" >
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px;"}}>
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <form onSubmit={handleform}>

              <div className="row">
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="text" id="firstName" className="form-control " value={name} onChange={ChnageName} />
                    <label className="form-label" for="firstName"> Name</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="text" id="lastName" className="form-control" value={email} onChange={ChnageEmail} />
                    <label className="form-label" for="lastName">email</label>
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="email" id="emailAddress" className="form-control" value={password} onChange={ChnagePassword}/>
                    <label className="form-label" for="emailAddress">Password</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="tel" id="phoneNumber" className="form-control" value={contact} onChange={ChnageContact}/>
                    <label className="form-label" for="phoneNumber">contact</label>
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 d-flex align-items-center">

                  <div className="form-outline datepicker w-100">
                    <input type="Date" className="form-control " id="birthdayDate" value={dob} onChange={ChnageDob} />
                    <label for="birthdayDate" className="form-label">DOB</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <h6 className="mb-2 pb-1">Gender: </h6>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                       checked={gender=="Female"}  value="Female" onChange={ChnageGender}/>
                    <label className="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender" checked={gender=="Male"}
                      value="Male" onChange={ChnageGender}/>
                    <label className="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" checked={gender=="Other"} type="radio" name="inlineRadioOptions" id="otherGender"
                      value="Other" onChange={ChnageGender}  />
                    <label className="form-check-label" for="otherGender">Other</label>
                  </div>

                </div>
              </div>


              <div className="mt-4 pt-2">
                <input className="btn btn-primary btn" type="submit" value="Submit" onClick={handleform} />
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

