const mongo = require("mongoose") 

const flightsSchema = mongo.Schema({
    // 'destinationId':{type:mongo.Schema.Types.ObjectId,ref:'destination',default:"null"},
    'flightname' : { type: String, default:''},
    // 'from' : { type:mongo.Schema.Types.ObjectId,ref:'destination',default:"null"},
    // 'to' : { type:mongo.Schema.Types.ObjectId,ref:'destination',default:"null"},

    'flightnumber' : { type:String,default:""},
    // 'bookigDate':{type:Date,default:""},  
    // 'returnDate':{type:Date,default:""},
    'is_blocked' : { type: Boolean, default:false},
    'created_at' : { type: Date, default:Date.now()},
})

module.exports =mongo.model("flight",flightsSchema)