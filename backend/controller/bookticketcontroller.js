
const bookticket = require('../models/bookticketmodel')

function booking(req,res){
     
    let bookingobj = new bookticket()
      bookingobj.userid=req.body.userid
      bookingobj.ticketid=req.body.ticketid
       bookingobj.type=req.body.type
       bookingobj.Noofseats=req.body.Noofseats
       bookingobj.transaction_id=req.body.transaction_id
       bookingobj.total_amount=req.body.total_amount
        bookingobj.save()
        .then((bookingobj)=>{
            res.json({
                'status':200,
                'success':true,
                'message':'booking',
                data:bookingobj
            })
        })
    
        .catch((e)=>{
            res.send({status:500, success:false,
                message:e.message})
    
        })
       
}

function viewbooking(req,res){
    bookticket.find(req.body).exec()
    .then(bookingobj=>{
        res.json({
            'status':200,
            'success':true,
            'message':'Flights Loaded',
            'data':bookingobj
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


module.exports={
   booking,
   viewbooking
}