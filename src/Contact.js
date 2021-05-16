import React from 'react'
import {Link} from 'react-router-dom'

const Contact = () => {
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
        <Link to="/register" className="nav-item nav-link">Register</Link>
        <Link to="/contact" className="nav-item nav-link active">Contact</Link>
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
          <h2>Contact</h2>
        </div>
        <div className="col-12">
        <Link to="/">Home</Link>
          <a href>Contact</a>
        </div>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* Contact Start */}
  <div className="contact bg-img">
    <div className="container">
      <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
        <p>Get In Touch</p>
        <h2>For Any Query</h2>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-md-4 contact-item wow zoomIn" data-wow-delay="0.2s">
              <i className="fa fa-map-marker-alt" />
              <div className="contact-text">
                <h2>Location</h2>
                <p>Thapar University, Patiala, Punjab</p>
              </div>
            </div>
            <div className="col-md-4 contact-item wow zoomIn" data-wow-delay="0.4s">
              <i className="fa fa-phone-alt" />
              <div className="contact-text">
                <h2>Phone</h2>
                <p>+91 88001 73088</p>
              </div>
            </div>
            <div className="col-md-4 contact-item wow zoomIn" data-wow-delay="0.6s">
              <i className="far fa-envelope" />
              <div className="contact-text">
                <h2>Email</h2>
                <p>stree.info@thapar.edu</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
          <div className="contact-form">
            <div id="success" />
            <form name="sentMessage" id="contactForm" noValidate="novalidate">
              <div className="control-group">
                <input type="text" className="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                <p className="help-block text-danger" />
              </div>
              <div className="control-group">
                <input type="email" className="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                <p className="help-block text-danger" />
              </div>
              <div className="control-group">
                <input type="text" className="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                <p className="help-block text-danger" />
              </div>
              <div className="control-group">
                <textarea className="form-control" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message" defaultValue={""} />
                <p className="help-block text-danger" />
              </div>
              <div>
                <button className="btn" type="submit" id="sendMessageButton">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
</>

        </div>
    )
}

export default Contact
