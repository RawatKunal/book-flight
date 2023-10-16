const Ticket=require("../models/ticketModel")



function addtickets(req,res){

    let ticketObj = new Ticket()
    //    ticketObj.routId=req.body.routId
         ticketObj.flightId=req.body.flightId
         ticketObj.from=req.body.from
         ticketObj.to=req.body.to
        ticketObj.datefrom = req.body.datefrom
        ticketObj.timestart = req.body.timestart
        ticketObj.timearrival = req.body.timearrival
        ticketObj.datereturn = req.body.datereturn
        ticketObj.timereturnstart = req.body.timereturnstart
        ticketObj.timereturnarrived = req.body.timereturnarrived
        ticketObj.price_economy = req.body.price_economy
        ticketObj.price_business = req.body.price_business
        ticketObj.descriptions = req.body.descriptions
        ticketObj.totalticket = req.body.totalticket
        console.log(ticketObj);
        ticketObj.save()

        res.json({
            'status':200,
            'success':true,
            'message':'Tickets added',
            'data':ticketObj
        })
}
  
function viewticket(req,res){
    Ticket.find(req.body).exec()
    .then(ticketObj=>{
        res.json({
            'status':200,
            'success':true,
            'message':'ticket loaded',
            'total':ticketObj.length,
            'data':ticketObj
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


function singleticket(req,res){
    if(req.body!=null&&req.body._id!=undefined)
    {
        Ticket.findOne({"_id":req.body._id}).exec()
        .then(ticketObj=>{
            if(ticketObj!==null){
                res.json({
                    "status":200,
                    "success":true,
                    "message":"data loaded",
                    "data":ticketObj,
                })
            }
            else{
                res.json({
                    "status":200,
                    "success":false,
                    "message":"no data loaded ",
                    "data":ticketObj

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


function updateticket(req,res){
    console.log(req.body);
     validator=""
     if(req.body.datefrom==undefined||req.body.datefrom==""){
         {
             validator +=" datefrom is required"
         }
     }
     if(req.body.timestart==undefined||req.body.timestart==""){
         {
             validator +="timestart is required"
         }
     }
     
     if(!!validator)
     res.json({
         "status":422,
         "success":false,
         "message":validator
     })
     else{
         Ticket.findOne({"_id":req.body._id}).exec()
         .then(ticketObj=>{
             if(ticketObj==null)
             {
                 res.json({
                     "status":200,
                     "success":false,
                     "message":"ticket not found"
                 })
             }
             else{
                ticketObj.routId=req.body.routId
        ticketObj.datefrom = req.body.datefrom
        ticketObj.timestart = req.body.timestart
        ticketObj.timearrival = req.body.timearrival
        ticketObj.datereturn = req.body.datereturn
        ticketObj.timereturnstart = req.body.timereturnstart
        ticketObj.timereturnarrived = req.body.timereturnarrived
        ticketObj.price_economy = req.body.price_economy
        ticketObj.price_business = req.body.price_business
        ticketObj.descriptions = req.body.descriptions
        ticketObj.totalticket = req.body.totalticket
        ticketObj.save()
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




module.exports={addtickets,viewticket,singleticket,updateticket}
