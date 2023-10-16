const mongo=require("mongoose")

const ticketSchema=mongo.Schema({
    // "routId":{type:mongo.Schema.Types.ObjectId,ref:'route',default:''},
    "from":{ type:String,ref:'destination',default:"null"},
    "to":{ type:String,ref:'destination',default:"null"},
    "flightId":{ type:String,ref:'flight',default:"null"},
    "datefrom":{type:Date,default:""},
    "timestart":{type:String,default:""},
    "timearrival":{type:String,default:""},
    "datereturn":{type:Date,default:""},
    "timereturnstart":{type:String,default:""},
    "timereturnarrived":{type:String,default:""},
    "price_economy":{type:String,default:""},
    "price_business":{type:String,default:""},
    "descriptions":{type:String,default:""},
    "totalticket":{type:String,default:""}

})
module.exports=mongo.model('ticket',ticketSchema)