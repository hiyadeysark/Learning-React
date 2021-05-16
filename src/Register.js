import React from 'react'
import {Link} from 'react-router-dom'
import Signup from './Signup.js'


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
  <Signup></Signup>

</>

        </div>
    )
}

export default Register
