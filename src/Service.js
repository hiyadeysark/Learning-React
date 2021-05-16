import React from 'react'
import {Link} from 'react-router-dom'

const Service = () => {
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
        <Link to="/service" className="nav-item nav-link active">Service</Link>
        <Link to="/price" className="nav-item nav-link">Price</Link>
        <Link to="/products" className="nav-item nav-link">Products</Link>
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
          <h2>Service</h2>
        </div>
        <div className="col-12">
        <Link to="/">Home</Link>
          <a href>Services</a>
        </div>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* Service Start */}
  <div className="service">
    <div className="container">
      <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
        <p>What we do</p>
        <h2>Menstrual Hygiene For All</h2>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.0s">
          <div className="service-item">
            <div className="service-icon">
              <img src="img/sanitary-pad.png" className="periodicon" />
            </div>
            <h3>Heal emotions</h3>
            <p>
              Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
          <div className="service-item">
            <div className="service-icon">
              <img src="img/tampon.png" className="periodicon" />
            </div>
            <h3>Body Refreshes</h3>
            <p>
              Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
          <div className="service-item">
            <div className="service-icon">
              <img src="img/vagina.png" className="periodicon" />
            </div>
            <h3>Mind &amp; Serenity</h3>
            <p>
              Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
          <div className="service-item">
            <div className="service-icon">
              <img src="img/secure.png" className="periodicon" />
            </div>
            <h3>Enjoy Your life</h3>
            <p>
              Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.8s">
          <div className="service-item">
            <div className="service-icon">
              <img src="img/menstrual-cup.png" className="periodicon" />
            </div>
            <h3>Body &amp; Spirituality</h3>
            <p>
              Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="1s">
          <div className="service-item">
            <div className="service-icon">
              <img src="img/menstruation.png" className="periodicon" />
            </div>
            <h3>Body &amp; Mind</h3>
            <p>
              Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
</>

        </div>
    )
}

export default Service
