const router =require("express").Router()
const flightController = require("../controller/flightsController")
const destinationController=require("../controller/DestinationController")
const dashboardController=require("../controller/dashboardController")
const routesController=require("../controller/RoutesController")
const ticketControler=require("../controller/ticketController")
const bookingController=require("../controller/bookticketcontroller")
 

///////-----dashboard-------//////////
router.get("/dashboard",dashboardController.dashboard)
////////------dashboard-----//////////

//-------Flight API-------//
router.post("/addflights",flightController.addflights)
router.post("/viewflights",flightController.viewflights)
router.post("/updateflight",flightController.updateflight)
router.post("/singleflight",flightController.singleflight)

//-------Flight API-------//

//------destination//////////
router.post("/addDestination",destinationController.addDestination)
router.post("/viewdestination",destinationController.viewdestination)
//------destination//////////
//---------Tickets API---------//
 router.post("/addticket",ticketControler.addtickets)
 router.post("/viewticket",ticketControler.viewticket)
 router.post("/singleticket",ticketControler.singleticket)
 router.post("/updateticket",ticketControler.updateticket)

//---------Tickets API---------//
//---------routes ---------//
router.post("/addroutes",routesController.addroutes)
router.post("/viewroutes",routesController.viewroutes)
//---------routes--------//
///-------------------booking---------------//////
router.post("/bookticket",bookingController.booking)
router.post("/viewbookticket",bookingController.viewbooking)

///-------------------booking---------------//////

module.exports = router