const mongo =require("mongoose")

const customerSchema = mongo.Schema({
    'userid':{type:mongo.Schema.Types.ObjectId,ref:'user',default:''},
    'sno':{type:Number,default:1},
    'name':{type:String,default:''},
    'email' : {type: String, default:''},
    'password' : {type: String, default:''},
    'contact':{type:Number,default:'0'},
     'dob':{type:String,default:''},
     'gender':{type:String,default:"0"},
    'is_blocked' : {type: Boolean, default:false},
    'created_at': {type: Date, default:Date.now()}, 
})

module.exports =mongo.model('customer',customerSchema)