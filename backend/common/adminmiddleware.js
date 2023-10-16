const jwt = require("jsonwebtoken")
const secretKey = "Ashish"

module.exports = (req,res,next)=>{
     
    const token = req.header['authorization'];
    
    if(token){

        jwt.verify(token,secretKey,function(err,decoded){
            if(err){
                res.json({
                    'status':403,
                    'success':false,
                    'message':'Unauthorised user'
                })
            }
            req.decoded = decoded
            next()
        })
    }
    else{
        res.json({
            'status':403,
            'success':false,
            'message':'Unauthorised user'
        })
    }
}