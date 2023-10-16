const Destination=require("../models/Destination")



function addDestination(req,res){
     
    let destinationobj = new Destination()
    destinationobj.addDestination=req.body.addDestination
        destinationobj.save()
        .then((destinationobj)=>{


            res.json({
                'status':200,
                'success':true,
                'message':'add',
                data:destinationobj
            })
        })
    
        .catch((e)=>{
            res.send({status:500, success:false,
                message:e.message})
    
        })
       
}

function viewdestination(req,res){
    Destination.find(req.body).exec()
    .then(destinationobj=>{
        res.json({
            'status':200,
            'success':true,
            'message':'Flights Loaded',
            'data':destinationobj
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

function deleteDestination(req,res){
    if(req.body._id==undefined)
    {
        res.json({
            "status":200,
            "success":false,
            "message":"_id is required"

        })
    }
    else{
        Destination.findOne({"_id":req.body._id}).exec()
        .then(data=>{
            data.isBlocked=true
            //  data.standardId=req.body.standardId
            data.save()
            res.json({
                "status":200,
                "success":true,
                "message":"destination blocked"
            })
        })
        .catch(err=>{
            res.json({
                "status":500,
                "success":false,
                "message":String(err)
            })
    
        })
    }

}

module.exports={addDestination,viewdestination}