const route=require("../models/RoutesModle")

function addroutes(req,res){
    let routesObj= new route()
    routesObj.flightId=req.body.flightId
    routesObj.from=req.body.from
    routesObj.to=req.body.to
        routesObj.save()
        

            res.json({
                'status':200,
                'success':true,
                'message':'add routs',
                'data':routesObj
            })
    
        .catch((e)=>{
            res.send({'status':500, 'success':false,
                'message':e.message})
    
        })
    }


        function viewroutes(req,res){
            route.find(req.body).exec()
            .then(routesObj=>{
                res.json({
                    'status':200,
                    'success':true,
                    'message':'Flights Loaded',
                    'data':routesObj
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
        

module.exports={addroutes,viewroutes}
