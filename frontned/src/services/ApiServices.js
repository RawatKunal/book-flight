import axios from "axios";
import * as qs from "qs"
const Base_url="http://localhost:5000/"

class ApiServices{
    login(data){
        return axios.post(Base_url+"user/login" ,qs.stringify(data))
    }
    Registration(body){
        return axios.post(Base_url+"user/registeruser",qs.stringify(body))
    }
    getallCustomer(){
        let token=sessionStorage.getItem("token")
        let header={"Authorization":token}
        return axios.post(Base_url+"user/getuser",{},{headers:header})
     }
   
    addDestination(body){
     return axios.post(Base_url+"admin/addDestination",qs.stringify(body))
    }
    getDestination(){
        let token=sessionStorage.getItem("token")
        let header={"Authorization":token}
        return axios.post(Base_url+"admin/viewdestination",{},{headers:header})
    }
  
     addflights(body){
     return axios.post(Base_url+"admin/addflights",qs.stringify(body))
    }
    
    getallFights(){
        let token=sessionStorage.getItem("token")
        let header={"Authorization":token}
        return axios.post(Base_url+"admin/viewflights",{},{headers:header})
     }
     singleflight(body){
        let header={
            "Authorization":sessionStorage.getItem("token")
        }
        // console.log(header)
        return axios.post(Base_url+"admin/singleflight",qs.stringify(body),{headers:header})
    }

    updateTicket(data){
        let header={
            "Authorization":sessionStorage.getItem("token")
        }
        return axios.post(Base_url+"admin/updateflight",qs.stringify(data),{headers:header})
    }

    Addroutes(body){
        return axios.post(Base_url+"admin/addroutes",qs.stringify(body))
    }
    viewAllroutes(){
        let token=sessionStorage.getItem("token")
        let header={"Authorization":token}
        return axios.post(Base_url+"admin/viewroutes",{},{headers:header})
    }

    Dashboard(body){
        return axios.get(Base_url+"admin/dashboard",qs.stringify(body))  
    }
    ////////ticket//////////////////
    Addticket(body){
        return axios.post(Base_url+"admin/addticket",qs.stringify(body))  
    }
    viewtickets(){
        let token=sessionStorage.getItem("token")
        let header={"Authorization":token}
        return axios.post(Base_url+"admin/viewticket",{},{headers:header})
    }
    singleTicket(body){
        let header={
            "Authorization":sessionStorage.getItem("token")
        }
        // console.log(header)
        return axios.post(Base_url+"admin/singleticket",qs.stringify(body),{headers:header})
    }
    updateTicket(data){
        let header={
            "Authorization":sessionStorage.getItem("token")
        }
        return axios.post(Base_url+"admin/updateticket",qs.stringify(data),{headers:header})
    }


    mytickets(data){
        let token=sessionStorage.getItem("token")
        let header={"Authorization":token}
        return axios.post(Base_url+"admin/viewticket",qs.stringify(data),{headers:header})
    }
    singleTicket(data){
        let token=sessionStorage.getItem("token")
        let header={"Authorization":token}
        return axios.post(Base_url+"admin/singleticket",qs.stringify(data),{headers:header})
    }
    
  booking(body){
    
        return axios.post(Base_url+"admin/bookticket",qs.stringify(body))  
    }


}
export default new ApiServices