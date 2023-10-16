import logo from './logo.svg';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Master from './Layout/Master';
import Login from './Pages/user/Login';
import Service from './Pages/Service';
import AdminMaster from './Admin/aLayout/AdminMaster';
import Flights from './Admin/aPages/Flights/Flights';
import Ticket from './Admin/aPages/Tickets/Ticket';
import Destination from './Admin/aPages/Destination/Destination';
import Registraion from './Pages/user/Registraion';
import AllCoustomer from './Pages/user/AllCoustomers'
import Allflights from './Admin/aPages/Flights/Allflights' 
import AllDestination from './Admin/aPages/Destination/AllDestination';
import AdminLogin from './Admin/aPages/login/AdminLogin'
import Addroutes from './Admin/aPages/Routes/Addroutes';
import Viewroutes from './Admin/aPages/Routes/Viewroutes'
import Dashboard from './Admin/aPages/Dashboard/Dashboard';
import AllTickets from './Admin/aPages/Tickets/AllTickets';
import UpdateTicket from './Admin/aPages/Tickets/UpdateTicket';
import TicketSearch from './Pages/user/Search/TicketSearch';
import Updateflight from './Admin/aPages/Flights/Updateflight';
import Booking from './Pages/user/Booking/Booking';



function App() {
  return (
  <>
  <Router>
<Routes>
<Route path="/" element={<Master/>}>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/service"element={<Service/>}/>
  <Route path="/registration"element={<Registraion/>}/>
  <Route path="/search"element={<TicketSearch/>}/>
  <Route path="/booking/:id"element={<Booking/>}/>
 

 
  
</Route>
<Route path='/admin' element={<AdminLogin/>}/>
<Route path="/admin" element={<AdminMaster/>}>
  <Route path="/admin/flights" element={<Flights/>}/>
  <Route path="/admin/viewflights"element={<Allflights/>}/>
  <Route path="/admin/updateflight/:id" element={<Updateflight/>}/>

  <Route path="/admin/ticket" element={<Ticket/>}/>
  <Route path="/admin/viewticket" element={<AllTickets/>}/>
  <Route path="/admin/updateticket/:id" element={<UpdateTicket/>}/>


  <Route path="/admin/destination" element={<Destination/>}/>
  <Route path="/admin/AllDestination"element={<AllDestination/>}/>
  <Route path="/admin/Allcustomer"element={<AllCoustomer/>}/>
  <Route path="/admin/addroutes"element={<Addroutes/>}/>
  <Route path="/admin/viewroutes"element={<Viewroutes/>}/>
  <Route path="/admin/dashboard" element={<Dashboard/>}/>
  


</Route>


</Routes>


  </Router>
  </>
  );
}

export default App;
