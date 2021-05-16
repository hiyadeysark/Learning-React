import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
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
        <Link to="/about" className="nav-item nav-link active">About</Link>
        <Link to="/service" className="nav-item nav-link">Service</Link>
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
          <h2>About Us</h2>
        </div>
        <div className="col-12">
        <Link to="/">Home</Link>
          <a href>About Us</a>
        </div>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* About Start */}
  <div className="about wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5 col-md-6">
          <div className="about-img">
            <img src="img/about.png" alt="Image" />
          </div>
        </div>
        <div className="col-lg-7 col-md-6">
          <div className="section-header text-left">
            <p>Learn About Us</p>
            {/*Change the name*/}
            <h2>Welcome to STree</h2>
          </div>
          <div className="about-text">
            <p>
              We, at STree work endlessly to provide environment friendly products to as many women as possible across the country. Not only that, but we make sure that STree becomes your one stop destination to all period related queries.
            </p>
            <p>
              From menstrual cups, tampons, plastic disposable pads, and cloth pads for usage, in different sizes depending on your flow. The pack also includes of painkiller medicines, contraceptives as well disposable bags. 
            </p>
            <p>
              On the website we provide you an option to customise a calendar schedule as per a period tracker which would send notifications to your registered mobile number.
            </p>
            <p>
              We also accept donations in kind, follow the link below.
            </p>
            <p>All well wishes,<br />Team STree.</p>
            <a className="btn" href>Donate Now!</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Team Start */}
  <div className="team">
    <div className="container">
      <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
        <p>Changing The World</p>
        <h2>Founders</h2>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 wow fadeInUp" data-wow-delay="0.0s">
          <div className="team-item">
            <div className="team-img">
              <img src="img/arshia.jpeg" alt="Image" />
              <div className="team-social">
                <a href><i className="fab fa-twitter" /></a>
                <a href><i className="fab fa-facebook-f" /></a>
                <a href><i className="fab fa-linkedin-in" /></a>
                <a href><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="team-text">
              <h2>Arshia Anand</h2>
              <p>Frontend Developer</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 wow fadeInUp" data-wow-delay="0.2s">
          <div className="team-item">
            <div className="team-img">
              <img src="img/gurleen.jpeg" alt="Image" />
              <div className="team-social">
                <a href><i className="fab fa-twitter" /></a>
                <a href><i className="fab fa-facebook-f" /></a>
                <a href><i className="fab fa-linkedin-in" /></a>
                <a href><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="team-text">
              <h2>Gurleen Kaur</h2>
              <p>Frontend Developer</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 wow fadeInUp" data-wow-delay="0.4s">
          <div className="team-item">
            <div className="team-img">
              <img src="img/hiya.jpeg" alt="Image" />
              <div className="team-social">
                <a href><i className="fab fa-twitter" /></a>
                <a href><i className="fab fa-facebook-f" /></a>
                <a href><i className="fab fa-linkedin-in" /></a>
                <a href><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="team-text">
              <h2>Hiya Dey Sarkar</h2>
              <p>Frontend Developer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row hello">
        <div className="col-lg-5 col-md-4 wow fadeInUp hello2" data-wow-delay="0.6s">
          <div className="team-item">
            <div className="team-img">
              <img src="img/Oishiki .jpg" alt="Image" />
              <div className="team-social">
                <a href><i className="fab fa-twitter" /></a>
                <a href><i className="fab fa-facebook-f" /></a>
                <a href><i className="fab fa-linkedin-in" /></a>
                <a href><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="team-text">
              <h2>Oishiki Ghosh</h2>
              <p>Content Writer</p>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-4 wow fadeInUp hello2" data-wow-delay="0.6s">
          <div className="team-item">
            <div className="team-img">
              <img src="img/muskan.png" alt="Image" />
              <div className="team-social">
                <a href><i className="fab fa-twitter" /></a>
                <a href><i className="fab fa-facebook-f" /></a>
                <a href><i className="fab fa-linkedin-in" /></a>
                <a href><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="team-text">
              <h2>Muskan Chojer</h2>
              <p>Backend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Team End */}
  </div></>

        </div>
    )
}

export default About
