const mongo =require("mongoose")
const routesSchema=mongo.Schema({
 'flightId' : { type:String,ref:'flight',default:"null"}, 
 'from' : { type:String,ref:'destination',default:"null"},
 'to' : { type:String,ref:'destination',default:"null"},

})
module.exports =mongo.model("route",routesSchema)
