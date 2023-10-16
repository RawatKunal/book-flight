const User = require('../models/userModel')
const Customer = require('../models/customerModel')
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const secretKey = "Ashish"
const saltRound =10;

function example(req,res){
    console.log(req.body)
    res.json({
        'status':422,
        'success':false,
        'message':'examples works'
    })
}


function register(req,res){
    validator=''
    if(req.body.name==undefined || req.body.name=='')
    {
        validator+='name is required'
    }
    if(req.body.email==undefined || req.body.email=='')
    {
        validator+='email is required'
    }
    if(req.body.password==undefined || req.body.password=='')
    {
        validator+='password is required'
    }
    if(!!validator)
    {
        res.json({
            'status':422,
            'success':false,
            'message':validator
        })
    }
    else{
        User.findOne({'email':req.body.email}).exec()
        .then(user=>{
            if(user==null){
                let userObj=new User()
        userObj.name=req.body.name
        userObj.email=req.body.email
        userObj.password=bcrypt.hashSync(req.body.password,saltRound)
        userObj.usertype=1
        userObj.save()

        .then( async userdata=>{
            const Customercount = await Customer.countDocuments().exec()
            customerobj = new Customer()
            customerobj.sno = Customercount + 1
            customerobj.userid = userdata._id
            customerobj.name = req.body.name
            customerobj.email = req.body.email
            customerobj.password = req.body.password
            customerobj.contact = req.body.contact
            customerobj.gender = req.body.gender
            customerobj.dob = req.body.dob
             
            customerobj.save()
            res.json({
                'status':200,    
                'success':true,
                'message':'Customer registed',
                'data':customerobj
            })
        })
        .catch(err=>{
            res.json({
                'status':500,
                'success':false,
                'message':"Error While Inserting User",
                'error':String(err)
            })
        })
    }
    else{
        res.json({
            'status':200,
            'success':false,
            'message':"User Already exists"
        })
    }
        })
        
        .catch(err=>{
            res.json({
                'status':500,
                'success':false,
                'message':"Error while inserting user",
                'error':String(err)
            })
        })
        }
}


// function register(req,res){
//     validator = ''
//     if(req.body.email == undefined || req.body.email == '')
//     {
//         validator+="Email is required"
//     }
//     if(req.body.name == undefined || req.body.name == '')
//     {
//         validator+="name is required"
//     }
//     if(req.body.password == undefined || req.body.password == '')
//     {
//         validator+="password is required"
//     }
//     if(req.body.dob == undefined || req.body.dob == '')
//     {
//         validator+="dob is required"
//     }
//     if(req.body.gender == undefined || req.body.gender == '')
//     {
//         validator+="gender is required"
//     }

//     if(req.body.contact == undefined || req.body.contact == '')
//     {
//         validator+="contact is required"
//     }

//     if(!!validator)
//     {
//         res.json({
//             'status':422,
//             'success':false,
//             'message':validator
//         })
//     }
//     else{
        
//         User.findOne({'email':req.body.email}).exec()
//         .then(u=>{
//             if(u==null)
//             {
//                 let userobj = new User()
//                 userobj.name = req.body.name
//                 userobj.email = req.body.email
//                 userobj.password = bcrypt.hashSync(req.body.password,saltRound)
//                 userobj.user_type = 1
//                 userobj.save()
//                .then(async userdata=>{
//                     // const customercount = await Customer.countDocuments().exec()
//                    let customerobj = new Customer()
//                     customerobj.sno = customercount+1
//                     customerobj.userid = userdata._id
//                     customerobj.name = req.body.name
//                     customerobj.email = req.body.email
//                     customerobj.password = req.body.password
//                     customerobj.contact = req.body.contact
//                     customerobj.dob = req.body.dob
//                     customerobj.gender = req.body.gender

//                     customerobj.save()

//                     res.json({
//                         'status':200,
//                         'success':true,
//                         'message':'customer registed',
//                         'data':customerobj
//                     })
                
                  
//                 })  
//                 .catch(err=>{
//                     res.json({
//                         'status':500,
//                         'success':false,
//                         'message':"Error While Inserting User",
//                         'error':String(err)
//                     })
//                 })
//             }
        
//         })
      
//     }}



function login(req,res){

    User.findOne({'email':req.body.email}).exec()
    .then(userobj=>{
        if(userobj==null)
        {
            res.json({
                'status':422,
                'success':false,
                'message':'Email does not exist'
            })
        }
        else{
            if(bcrypt.compareSync(req.body.password,userobj.password))
            {
                let payload = {
                    '_id' : userobj._id,
                    'name' : userobj.name,
                    'email' : userobj.email,
                    'password': userobj.password,
                }

                const token = jwt.sign(payload,secretKey,{expiresIn:60*20})

                res.json({
                    'status':200,
                    'success':true,
                    'message':"login successfully",
                    'data':userobj,
                    'token':token
                })
            }
            else{
                res.json({
                    'status':200,
                    'success':false,
                    'message':"Invalid password"
                })
            }
            
        }
    })
    .catch(err=>{
        res.json({
            'status':500,
            'success':false,
            'message':String(err)
        })
    })

}

function getuser(req,res){
    Customer.find(req.body).exec()
    .then(customerdata=>{
        res.json({
            'status':200,
            'success':true,
            'message':"data loaded",
            'data':customerdata
        })
    })
    .catch(err=>{
        res.json({
            'status':500,
            'success':false,
            'message':String(err)
        })
    })
}




module.exports = {
    register,
    login,
    getuser,
    example
}


