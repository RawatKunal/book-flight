import React from 'react'
import {useState} from 'react'

import 'react-toastify/dist/ReactToastify.css';
import { ScaleLoader } from 'react-spinners';
import { ToastContainer,toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import ApiServices from '../../../services/ApiServices';

export default function Login() {
    const [email,setEmail]=useState("")
    const mail=(e)=>{
    setEmail(e.target.value)
    // console.log(e.target.value)
    }
    const[password,setPassword]=useState("")
    const pass=(e)=>{
      
      setPassword(e.target.value)
   
    }
    const nav=useNavigate()
    const handleform=(event)=>{
       event.preventDefault()
  
       let obj={
        email:email,
        password:password
       }
      
      ApiServices.login(obj)
       .then(
        (el)=>{
          if(el.data.success){
           console.log("user login");
         
           toast.success("login")
           nav("/admin/flights")
          }
          else{
            console.log("invalid user");
            toast.error("login falil")
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
   <section class="h-100 gradient-form" style={{backgroundColor: "#eee;"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-10">
        <div class="card rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="card-body p-md-5 mx-md-4">

                <div class="text-center">
                  <img src="https://th.bing.com/th/id/R.2972da7fea1127556387961b04a05992?rik=I1SuxsgjdEXt0Q&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f2895396%2fimages%2fo-PLANE-facebook.jpg&ehk=Mgbi8aGJoTLqFkhvt5c4U7he8ogcq220wuKCjAgYT%2fo%3d&risl=&pid=ImgRaw&r=0"
                    style={{width:"100px" }}alt="logo"/>
                  <h4 class="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                </div>

                <form onSubmit={handleform}>
                  <p>Please login to your account</p>

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example11" class="form-control"
                      placeholder=" email address"  value={email} onChange={mail}/>
                    <label class="form-label" for="form2Example11" >Email</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example22" class="form-control" value={password} onChange={pass} />
                    <label class="form-label" for="form2Example22">Password</label>
                  </div>
                  {/* <ScaleLoader loading={load} size={70} color='red' /> */}
                  <div class="text-center pt-1 mb-5 pb-1">
                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" onClick={handleform} >Log
                      in</button>
                    
                  </div>

                </form>

              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4">We are more than just a company</h4>
                <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   
   </>
  )
}
