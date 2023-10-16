import React, { useEffect,useState } from 'react'
import ApiServices from '../../../services/ApiServices'
export default function Dashboard() {
    const[dashboard,setDashboard]=useState()

    useEffect(
        ()=>{
            ApiServices.Dashboard().then(
                (response)=>{
                    console.log(response.data)
                    setDashboard(response.data)
                }
            ).catch(
                (error)=>{
                    console.log(error)
                }
            )
        },[]
    )
  return (
    <>
<br/>
<br/>
<br/>
<br/>
<br/>

<div class="container">
<div class="row"> 


<div className="card" style={{width: "18rem"}}>
  <img src="https://static.vecteezy.com/system/resources/previews/000/376/355/original/user-management-vector-icon.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h3>user</h3>
    <p className="card-text">
        {
            dashboard?.users
        }
    </p>
  </div>
</div>

<div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>




<div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

  </div>
  </div>  
    
    
    </>
  )
}
