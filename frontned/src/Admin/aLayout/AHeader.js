import React from 'react'
import { Link } from 'react-router-dom'

export default function AHeader() {
  return (
    <div>

  {/* ======= Intro Section ======= */}
  {/* <div className="intro intro-carousel swiper position-relative">

<div className="swiper-wrapper">

  <div className="swiper-slide carousel-item-a intro-item bg-image" style={{backgroundImage: "url('/assets/img/property-6.1.jpg')"}}>
    <div className="overlay overlay-a"></div>
    <div className="intro-content display-table">
      <div className="table-cell">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="intro-body">
                <p className="intro-title-top">Doral, Florida
                  <br/> 78345
                </p>
                <h1 className="intro-title mb-4 ">
                  <span className="color-b">204 </span> Mount
                  <br/> Olive Road Two
                </h1>
                <p className="intro-subtitle intro-price">
                  <a href="#"><span className="price-a">rent | $ 12.000</span></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="swiper-slide carousel-item-a intro-item bg-image" style={{backgroundImage: "url(assets/img/slide-2.jpg)"}}>
    <div className="overlay overlay-a"></div>
    <div className="intro-content display-table">
      <div className="table-cell">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="intro-body">
                <p className="intro-title-top">Doral, Florida
                  <br/> 78345
                </p>
                <h1 className="intro-title mb-4">
                  <span className="color-b">204 </span> Rino
                  <br/> Venda Road Five
                </h1>
                <p className="intro-subtitle intro-price">
                  <a href="#"><span className="price-a">rent | $ 12.000</span></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="swiper-slide carousel-item-a intro-item bg-image" style={{backgroundImage:" url(assets/img/slide-3.jpg)"}}>
    <div className="overlay overlay-a"></div>
    <div className="intro-content display-table">
      <div className="table-cell">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="intro-body">
                <p className="intro-title-top">Doral, Florida
                  <br/> 78345
                </p>
                <h1 className="intro-title mb-4">
                  <span className="color-b">204 </span> Alira
                  <br/> Roan Road One
                </h1>
                <p className="intro-subtitle intro-price">
                  <a href="#"><span className="price-a">rent | $ 12.000</span></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="swiper-pagination"></div>
</div>End Intro Section */}


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
          <Link to="/admin/Allcustomer">
            <a className="nav-link " href="#">Users
            </a>
            </Link>
          </li>

       <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Flights</a>
            <div class="dropdown-menu">
            <Link to="/admin/flights">
              <a class="dropdown-item " href="#">Add Flights
              </a>
              </Link>

              <Link to="/admin/viewflights">
              <a class="dropdown-item " href="#">view flights
                </a>
                </Link>
            </div>
          </li>

         
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tickets</a>
            <div class="dropdown-menu">

            <Link to="/admin/ticket">
              <a class="dropdown-item " href="#">Add Ticket
              </a>
              </Link>


              <Link to="/admin/viewticket">
              <a class="dropdown-item " href="#">view Ticket
              </a>
              </Link>
            </div>
          </li>


          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Destination</a>
            <div class="dropdown-menu">

            <Link to="/admin/destination">
              <a class="dropdown-item " href="#">Add Destination
              </a>
              </Link>

              <Link to="/admin/AllDestination">
              <a class="dropdown-item " href="#">view Destination
              </a>
              </Link>
            </div>
          </li>
         

         
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Routes</a>
            <div class="dropdown-menu">
               
            <Link to="/admin/addroutes">
              <a class="dropdown-item " href="#">Add Routes
              </a>
              </Link>

              <Link to="/admin/viewroutes">
              <a class="dropdown-item" href="#">view Routes
              </a>
              </Link>
            </div>
          </li>

          <li className="nav-item">

          <Link to="/login">
            <a className="nav-link ,btn-btn-primary" href="#">Logout
            </a>
            </Link>
          </li>
        </ul>
      </div>

     
    </div>
  </nav>{/* End Header/Navbar */}







    </div>
  )
}
