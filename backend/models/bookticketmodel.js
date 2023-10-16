const mongo =require("mongoose")
const bookticketSchema = mongo.Schema({
  'userid':{type:mongo.Schema.Types.ObjectId,ref:'user'},
   "ticketid":{type:mongo.Schema.Types.ObjectId,ref:'ticket'},
     'type':{type:String,default:null},
    'Noofseats':{type:String,default:false},
    "transaction_id":{type:String,default:false},
    "total_amount":{type:String,default:false},
    "paymentMode":{type:String,default:false},
    'is_blocked' : {type: Boolean, default:false},
    'created_at': {type: Date, default:Date.now()}, 
})

module.exports =mongo.model('bookticket',bookticketSchema)