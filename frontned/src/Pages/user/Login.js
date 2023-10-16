import React from 'react'
import {useState, CSSProperties} from 'react'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import ApiServices from '../../services/ApiServices';
import ClipLoader from "react-spinners/ClipLoader";

export default function Login() {
   const [load,setLoad]= useState(false)
   const override=CSSProperties= {
    display: "block",
    margin: "200px auto",
  };
  const [email,setEmail]=useState("")
  const mail=(e)=>{
  setEmail(e.target.value)
  
  }
  const[password,setPassword]=useState("")
  const pass=(e)=>{
    
    setPassword(e.target.value)
 
  }
 
 const nav=useNavigate()
  const handleform=(event)=>{
     event.preventDefault()
     setLoad(true)

     let obj={
      email:email,
      password:password
     }
   
    ApiServices.login(obj)
     .then(
      (el)=>{
        if(el.data.success){
         console.log("user login");
         sessionStorage.setItem("token",el.data.token)
         sessionStorage.setItem("userId",el.data.data._id)
         setTimeout(()=>{
          setLoad(false)
          toast.success("login")
         nav("/search")
         },2000)
         
        }
        else{
          console.log("invalid user");
          toast.error("login falil")
        }
      }
     )
     .catch(
      (error)=>{
        setLoad("false")
  console.log("error",error);
      }
     )
  }

  return (
   <>
  <div className='d-flex justify-content-center '>
  <ClipLoader loading={load}  size={100} color="blue" cssOverride={override}/>
  </div>
<div className={load?"bg-disabled my-5":"my-5"}>
   <section class="h-100 gradient-form my-5 p-5" style={{backgroundColor: "#eee;"}}>
  
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
                  {/* <ClipLoader loading={load} css={override} size={150} color="red"/> */}
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
</div>
   </>
  )
}
