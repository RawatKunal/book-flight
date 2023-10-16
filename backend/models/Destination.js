const mongo=require("mongoose")

const destinationSchema=mongo.Schema({

    "addDestination":{type:String,default:""},
    'is_blocked' : { type: Boolean, default:false},
    'created_at' : { type: Date, default:Date.now()},
})
module.exports =mongo.model("destination",destinationSchema)