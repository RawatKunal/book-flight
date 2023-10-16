import React from 'react'

import { useEffect,useState } from "react"
import ApiServices from "../../services/ApiServices"
import { Link } from "react-router-dom"

export default function AllUsers() {
  

    const [user,setUser]=useState()
    useEffect(
        ()=>{
            console.log("Hello world")
        }, []
    )
    useEffect(
        ()=>{
            ApiServices. getallCustomer().then(
                (response)=>{
                    console.log(response.data.data)
                    setUser(response.data.data)
                }
            ).catch(
                (error)=>{
                    console.log(error)
                }
            )
        },[]
    )
    
    
    return(
        <>
        <br/>
        <br/>
        <br/>
        <br/>

            <div className="container">
  <div className="row my-5">
    <div className="col-md-1"></div>
    <div className="col-md-10">
      <h2  >All Users</h2>
      <table className="table">
        <thead>
          
        <tr style={{backgroundColor: "skyblue"}}>
                        <td>SR no</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Gender</td>
                        <td>Contact</td>
                        <td>DOB</td>
                        <td>ID</td>
                        <td>edit</td>
                    </tr>

         
        </thead>
        <tbody>
        {
                        user?.map(
                            (el,index)=>(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{el?.name}</td>
                                    <td>{el?.email}</td>
                                    <td>{el?.gender}</td>
                                    <td>{el?.contact}</td>
                                    <td>{el?.dob}</td>
                                    <td>{el?._id}</td>
                                    <td>
                                        {/* <Link to={"/Master/Updateuser/"+el?._id}> */}
                                        <button>Edit</button>
                                        {/* </Link> */}
                                    </td>
                                </tr>
                            )
                        )
                    }
           

        </tbody>
      </table>
    </div>

  </div>
</div>
        </>
    )

}
