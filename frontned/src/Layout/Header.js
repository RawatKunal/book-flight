import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Header() {
  const nav=useNavigate()
  const token=sessionStorage.getItem("token")
  const logout=()=>{
    if(window.confirm("do you really want to logout"==true)){
      sessionStorage.clear()
      nav("/login")
    }
  }
  
  return (
<>


  {/* ======= Property Search Section ======= */}
  <div className="click-closed"></div>
  {/*/ Form Search Star /*/}
  <div className="box-collapse">
    <div className="title-box-d">
      <h3 className="title-d">Search Property</h3>
    </div>
    <span className="close-box-collapse right-boxed bi bi-x"></span>
    <div className="box-collapse-wrap form">
      <form className="form-a">
        <div className="row">
          <div className="col-md-12 mb-2">
            <div className="form-group">
              <label className="pb-2" for="Type">Keyword</label>
              <input type="text" className="form-control form-control-lg form-control-a" placeholder="Keyword"/>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group mt-3">
              <label className="pb-2" for="Type">Type</label>
              <select className="form-control form-select form-control-a" id="Type">
                <option>All Type</option>
                <option>For Rent</option>
                <option>For Sale</option>
                <option>Open House</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group mt-3">
              <label className="pb-2" for="city">City</label>
              <select className="form-control form-select form-control-a" id="city">
                <option>All City</option>
                <option>Alabama</option>
                <option>Arizona</option>
                <option>California</option>
                <option>Colorado</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group mt-3">
              <label className="pb-2" for="bedrooms">Bedrooms</label>
              <select className="form-control form-select form-control-a" id="bedrooms">
                <option>Any</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group mt-3">
              <label className="pb-2" for="garages">Garages</label>
              <select className="form-control form-select form-control-a" id="garages">
                <option>Any</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group mt-3">
              <label className="pb-2" for="bathrooms">Bathrooms</label>
              <select className="form-control form-select form-control-a" id="bathrooms">
                <option>Any</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group mt-3">
              <label className="pb-2" for="price">Min Price</label>
              <select className="form-control form-select form-control-a" id="price">
                <option>Unlimite</option>
                <option>$50,000</option>
                <option>$100,000</option>
                <option>$150,000</option>
                <option>$200,000</option>
              </select>
            </div>
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn btn-b">Search Property</button>
          </div>
        </div>
      </form>
    </div>
  </div>{/* End Property Search Section */}

  {/* ======= Header/Navbar ======= */}
  <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
    <div className="container">
      <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <a className="navbar-brand text-brand" href="index.html">Airline<span className="color-b">Booking</span></a>

      <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
        <ul className="navbar-nav">

          <li className="nav-item">

          <Link to="/">
            <a className="nav-link" href="#">Home
            </a>
            </Link>
          </li>

          <li className="nav-item">
          <Link to="/about">
            <a className="nav-link active" href="#">About 
            </a>
            </Link>
          </li>

          <li className="nav-item">
          <Link to="/service">
            <a className="nav-link" href="#">Services
            </a>
            </Link>
          </li>

          <li className="nav-item">
          <Link to="/login">
            <a className="nav-link " href="#">Booking
            </a>
            </Link>
            
          </li>

          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
            <div className="dropdown-menu">
              <a className="dropdown-item " href="property-single.html">Property Single</a>
              <a className="dropdown-item " href="blog-single.html">Blog Single</a>
              <a className="dropdown-item " href="agents-grid.html">Agents Grid</a>
              <a className="dropdown-item " href="agent-single.html">Agent Single</a>
            </div>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>

          {
            !token||token=="null"||token==null?
            <>
          <li className="nav-item">
          <Link to="/registration">
            <a className="nav-link " href="#">Register
            </a>
            </Link>
          </li>
          
          <li className="nav-item">
          <Link to="/login">
            <a className="nav-link" href="#">Login
            </a>
            </Link>
          </li>
            </>:
               <li className="nav-item">
               <a className="nav-link" href="#" onClick={logout}>
                 Logout
               </a>
             </li>
          }
       

          {/* <li className="nav-item">
            <a className="nav-link ,btn-btn-primary" href="contact.html">
              <Link to="/login">Login</Link>

            </a>
          </li> */}
        </ul>
      </div>

      <button type="button" className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
        <i className="bi bi-search"></i>
      </button>

    </div>
  </nav>{/* End Header/Navbar */}

</>
  )
}
