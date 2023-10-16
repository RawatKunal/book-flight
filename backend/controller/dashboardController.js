 const user=require("../models/userModel")
 const destination=require("../models/Destination")
 const flight=require("../models/flightsModel")
 const ticket=require("../models/ticketModel")

 async function dashboard(req,res){
    var users= await user.find({userType:1})
    var destinations=await destination.countDocuments().exec()
    var flights=await flight.countDocuments().exec()
    var tickets=await ticket.countDocuments().exec()

  res.json({
    success:true,
    status:200,
    users:users.length,     
    destinations:destinations,
    flights:flights,
    tickets:tickets,
   

})
 }
module.exports={
    dashboard
}