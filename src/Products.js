import React from 'react'
import {Link} from 'react-router-dom'

const Products = () => {
    return (
        <div>
           <>
  {/* Nav Bar Start */}
  <div className="navbar navbar-expand-lg bg-dark navbar-dark">
    <div className="container-fluid">
    <Link to="/" className="navbar-brand">ST<span>ree</span></Link>
      <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
        <div className="navbar-nav ml-auto">
        <Link to="/" className="nav-item nav-link">Home</Link>
        <Link to="/about" className="nav-item nav-link">About</Link>
        <Link to="/service" className="nav-item nav-link">Service</Link>
        <Link to="/price" className="nav-item nav-link">Price</Link>
        <Link to="/products" className="nav-item nav-link active">Products</Link>
        <Link to="/register" className="nav-item nav-link">Register</Link>
        <Link to="/contact" className="nav-item nav-link">Contact</Link>
        </div>
      </div>
    </div>
  </div>
  {/* Nav Bar End */}
  {/* Page Header Start */}
  <div className="page-header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Products</h2>
        </div>
        <div className="col-12">
            <Link to="/">Home</Link>
          <a href>Products</a>
        </div>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* Class Start */}
  <div className="class">
    <div className="container">
      <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
        <p>Our Products</p>
      </div>
      <div className="row">
        <div className="col-12">
          <ul id="class-filter">
            <li data-filter=".filter-1">Sanitary Pads</li>
            <li data-filter=".filter-2">Medicines</li>
            <li data-filter=".filter-3">Tampons</li>
            <li data-filter=".filter-4">Menstrual Cups</li>
          </ul>
        </div>
      </div>
      <div className="row class-container">
        <div className="col-lg-3 col-md-6 col-sm-12 class-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
          <div className="class-wrap">
            <div className="class-img">
              <img src="img/class-1.jpg" alt="Image" />
            </div>
            <div className="class-text">
              <div className="class-teacher">
                <h3>Sanitary Pads</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 class-item filter-2 wow fadeInUp" data-wow-delay="0.2s">
          <div className="class-wrap">
            <div className="class-img">
              <img src="img/class-2.jpg" alt="Image" />
            </div>
            <div className="class-text">
              <div className="class-teacher">
                <h3>Painkillers</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 class-item filter-3 wow fadeInUp" data-wow-delay="0.4s">
          <div className="class-wrap">
            <div className="class-img">
              <img src="img/class-3.jpg" alt="Image" />
            </div>
            <div className="class-text">
              <div className="class-teacher">
                <h3>Tampons</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 class-item filter-4 wow fadeInUp" data-wow-delay="0.6s">
          <div className="class-wrap">
            <div className="class-img">
              <img src="img/class-4.jpg" alt="Image" />
            </div>
            <div className="class-text">
              <div className="class-teacher">
                <img src="img/teacher-4.png" alt="Image" />
                <h3>Menstrual Cups</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br /><br /><br />
</>
 
        </div>
    )
}

export default Products
