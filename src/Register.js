import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
    return (
        <div>
            <>
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
        <Link to="/products" className="nav-item nav-link">Products</Link>
        <Link to="/register" className="nav-item nav-link active">Register</Link>
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
          <h2>Register Now!</h2>
        </div>
        <div className="col-12">
        <Link to="/">Home</Link>
          <a href>Join Us</a>
        </div>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/*Registration From*/}
  {/*Registration hello hello From*/}
  {/*Registration From*/}
  <div className="contact bg-img">
    <div className="container">
      <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
        <p>Sign up with</p>
        <h2>STree</h2>
      </div>
      <div className="row">
        <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
          <div className="contact-form">
            <div id="success" />
            <form name="sentMessage" id="contactForm" noValidate="novalidate">
              <div className="form-group">
                <input type="text" className="form-control" id="name" placeholder="Name" name="name" required="required" data-validation-required-message="Please enter your name" />
                <p className="help-block text-danger" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                <p className="help-block text-danger" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="address" placeholder="Address" required="required" data-validation-required-message="Please enter your address" />
                <p className="help-block text-danger" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="password" placeholder="Password" required="required" data-validation-required-message="Please enter a password" />
                <p className="help-block text-danger" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="confirmpassword" placeholder="Confirm password" required="required" data-validation-required-message="Please enter confirm password" />
                <p className="help-block text-danger" />
              </div>
              <div className="form-group">
                <textarea className="form-control" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message" defaultValue={""} />
                <p className="help-block text-danger" />
              </div>
              <div>
                <button className="btn" type="submit" id="sendMessageButton">Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

        </div>
    )
}

export default Register
