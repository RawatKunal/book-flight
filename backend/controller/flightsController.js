const flight = require('../models/flightsModel')

function addflights(req,res){
     
    let flightObj = new flight()
        flightObj.flightname = req.body.flightname
        flightObj.flightnumber = req.body.flightnumber
        
        flightObj.save()

        res.json({
            'status':200,
            'success':true,
            'message':'Flights added',
            'data':flightObj
        })
}

function viewflights(req,res){
    flight.find(req.body).exec()
    .then(flightObj=>{
        res.json({
            'status':200,
            'success':true,
            'message':'Flights Loaded',
            'data':flightObj
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

function singleflight(req,res){
    if(req.body!=null&&req.body._id!=undefined)
    {
        flight.findOne({"_id":req.body._id}).exec()
        .then(flightObj=>{
            if(flightObj!==null){
                res.json({
                    "status":200,
                    "success":true,
                    "message":"data loaded",
                    "data":flightObj,
                })
            }
            else{
                res.json({
                    "status":200,
                    "success":false,
                    "message":"no data loaded ",
                    "data":flightObj

                })
            }
        })
        .catch(err=>{
            res.json({
                "status":500,
                "success":false,
                "message":"server error",
                "erroe":err
            })
        })
            
        
     }
    else{
        res.json({
            "status":500,
            "success":false,
            "message":"_id is required"
        })
    }


}


function updateflight(req,res){
    console.log(req.body);
     validator=""
     if(req.body.flightname==undefined||req.body.datefrom==""){
         {
             validator +=" flightname is required"
         }
     }
   
     
     if(!!validator)
     res.json({
         "status":422,
         "success":false,
         "message":validator
     })
     else{
         flight.findOne({"_id":req.body._id}).exec()
         .then(flightObj=>{
             if(flightObj==null)
             {
                 res.json({
                     "status":200,
                     "success":false,
                     "message":"ticket not found"
                 })
             }
             else{

                  
   
    flightObj.flightname = req.body.flightname
    flightObj.flightnumber = req.body.flightnumber
    
    flightObj.save()

                
                 res.json({
                     "status":200,
                     "success":true,
                     "message":"ticket update"
                 })
             }
         })
         .catch(err=>{
             res.json({
                 "status":200,
                 "success":true,
                 "message":String(err)
             })
         })
     }
 }




function deleteflight(req,res){
    if(req.body._id == undefined)
    {
        res.json({
            'status':200,
            'success':false,
            'message':'_id is required'
        })
    }
    else{
        flight.findOne({'_id':req.body._id}).exec()
        .then(data=>{
            flight.deleteOne({'_id':req.body._id}).exec()
            .then(delObj =>{
                res.json({
                    'status':200,
                    'success':true,
                    'messsage':'Flight Deleted'
                })
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
}



module.exports ={
    addflights,
    viewflights,
    deleteflight,
    singleflight,
    updateflight
}
