const mongo =require("mongoose")

const userSchema = mongo.Schema({
    
    'name' : { type: String, default:''},
    'email' : { type: String, default:''},
    'password' : { type: String, default:''},
    'usertype':{type:String,default:1},//0 admin,1 custmoer 
    'is_blocked' : { type: Boolean, default:false},
    'created_at' : { type: Date, default:Date.now()},
})

module.exports =mongo.model('user',userSchema)