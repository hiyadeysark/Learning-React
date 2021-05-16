import React from 'react'
import {Link} from 'react-router-dom'

const Homepage = () => {
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
        <Link to="/" className="nav-item nav-link active">Home</Link>
        <Link to="/about" className="nav-item nav-link">About</Link>
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
  {/* Hero Start */}
  <div className="hero">
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-sm-12 col-md-6">
          <div className="hero-text">
            <h1>We care for you</h1>
            <p>
              Lorem ipsum dolor sit amet elit. Phasell nec pretum mi. Curabi ornare velit non. Aliqua metus tortor auctor quis sem.
            </p>
            <div className="hero-btn">
            <Link to="/register" className="btn">Register Now</Link>
            <Link to="/contact" className="btn">Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 d-none d-md-block">
          <div className="hero-image">
            <img src="img/hero.png" alt="Hero Image" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Hero End */}
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
              Hi. We at STree strive hard to let every woman feel at utmost ease when they’re on their periods. We want to reach every corner of the country and help remove the taboo of menstrual cycles.
            </p>
            <p>
              The woman body works so phenomenally and yet so little amount of people actually know about it. We want every female to talk of their concerns openly without being stared at, buy menstrual products without being hideous and live comfortably without any struggles.
            </p>
            <Link to="/about" className="btn">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Service Start */}
  <div className="service">
    <div className="container">
      <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
        <p>What we do</p>
        <h2>Menstrual Hygiene For All</h2>
      </div>
      <div className="row">
        <div className="col-lg-10 col-md-3 wow fadeInUp box" data-wow-delay="0.0s">
        <Link to="/service" className="btn"></Link>
          <div className="service-item"><Link to="/service" className="btn">
              <div className="service-icon">
                <img src="img/periodicon1.png" className="periodicon" />
              </div>
              <br />    
              <h3>Understaning Your Needs</h3>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.
              </p>
              </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
  {/* Discount Start */}
  <div className="discount wow zoomIn" data-wow-delay="0.1s">
    <div className="container">
      <div className="section-header text-center">
        <h2>Get <span>50%</span> Discount on your First Order</h2>
        <br />
      </div>
      <div className="container discount-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. 
        </p>
        <br />
        <Link to="/products" className="btn">Buy Now!</Link>
      </div>
    </div>
  </div>
  {/* Discount End */}
  
  {/* Testimonial Start */}
  <div className="testimonial wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
      <div className="section-header text-center">
        <p>Testimonial</p>
        <h2>Our Client Say!</h2>
      </div>
      <div className="owl-carousel testimonials-carousel">
        <div className="testimonial-item">
          <div className="testimonial-img">
            <img src="img/testimonial-1.jpg" alt="Image" />
          </div>
          <div className="testimonial-text">
            <p>
              Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum.
            </p>
            <h3>Customer Name</h3>
            <h4>Profession</h4>
          </div>
        </div>
        <div className="testimonial-item">
          <div className="testimonial-img">
            <img src="img/testimonial-2.jpg" alt="Image" />
          </div>
          <div className="testimonial-text">
            <p>
              Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum.
            </p>
            <h3>Customer Name</h3>
            <h4>Profession</h4>
          </div>
        </div>
        <div className="testimonial-item">
          <div className="testimonial-img">
            <img src="img/testimonial-3.jpg" alt="Image" />
          </div>
          <div className="testimonial-text">
            <p>
              Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum.
            </p>
            <h3>Customer Name</h3>
            <h4>Profession</h4>
          </div>
        </div>
        <div className="testimonial-item">
          <div className="testimonial-img">
            <img src="img/testimonial-4.jpg" alt="Image" />
          </div>
          <div className="testimonial-text">
            <p>
              Lorem ipsum dolor sit amet consec adipis elit. Etiam accums lacus eget velit tincid, quis suscip justo dictum.
            </p>
            <h3>Customer Name</h3>
            <h4>Profession</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
  
</>

        </div>
    )
}

export default Homepage
