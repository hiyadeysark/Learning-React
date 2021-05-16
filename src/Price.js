import React from 'react'
import {Link} from 'react-router-dom'

const Price = () => {
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
        <Link to="/price" className="nav-item nav-link active">Price</Link>
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
          <h2>Purchase</h2>
        </div>
        <div className="col-12">
        <Link to="/">Home</Link>
          <a href>Purchase</a>
        </div>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* Price Start */}
  <div className="price">
    <div className="container">
      <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
        <p>All Products</p>
        <h2>Buy Now</h2>
      </div>
      <div className="row">
        <div className="col-md-3 wow fadeInUp" data-wow-delay="0.0s">
          <div className="price-item">
            <div className="price-header">
              <div className="price-title">
                <h2>Sanitary Pads</h2>
              </div>
              <div className="price-prices">
                <h2><small>Varieties</small><span /></h2>
              </div>
            </div>
            <div className="price-body">
              <div className="price-description">
                <form action>
                  <input type="radio" name="Choose" defaultValue="Organic Cotton Sanitary Pad" /> Organic Cotton Sanitary Pad<br />
                </form>
                <form action>
                  <input type="radio" name="Choose" defaultValue="Cloth Sanitary Pad" /> Cloth Sanitary Pad<br />
                </form>
                <form action>
                  <input type="radio" name="Choose" defaultValue="Reusable Sanitary Pad" /> Reusable Sanitary Pad<br />
                </form>
                <form action>
                  <input type="radio" name="Choose" defaultValue="Regular and Heavy Flow Sanitary Pad" /> Regular and Heavy Flow Sanitary Pad<br />
                </form>
              </div>
            </div>
            <div className="price-footer">
              <div className="price-action">
                <br /> 
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 wow fadeInUp" data-wow-delay="0.0s">
          <div className="price-item">
            <div className="price-header">
              <div className="price-title">
                <h2>Medicines</h2>
              </div>
              <div className="price-prices">
                <h2><small>Varieties</small><span /></h2>
              </div>
            </div>
            <div className="price-body">
              <div className="price-description">
                <form action>
                  <input type="radio" name="Choose" defaultValue="Painkillers" /> Painkillers<br />
                </form>
                <form action>
                  <input type="radio" name="Choose" defaultValue="Birth Control Pills" /> Birth Control Pills<br />
                </form>
              </div>
            </div>
            <div className="price-footer">
              <div className="price-action">
                <br /><br /><br /><br /><br />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 wow fadeInUp" data-wow-delay="0.6s">
          <div className="price-item">
            <div className="price-header">
              <div className="price-title">
                <h2>Tampons</h2>
              </div>
              <div className="price-prices">
                <h2><small>Varieties</small><span> </span></h2>
              </div>
            </div>
            <div className="price-body">
              <div className="price-description">
                <form action>
                  <input type="radio" name="Choose" defaultValue="Light/Junior Tampon" /> Light/Junior Tampon<br />
                </form>
                <form action>
                  <input type="radio" name="Choose" defaultValue="Regular Tampon" /> Regular Tampon<br />
                </form>
                <form action>
                  <input type="radio" name="Choose" defaultValue="Super Tampon" />Super Tampon<br />
                </form>
                <form action>
                  <input type="radio" name="Choose" defaultValue="Super Plus Tampon" /> Super Plus Tampon<br />
                </form>
                <form action>
                  <input type="radio" name="Choose" defaultValue="Super Plus Extra/Ultra Tampon" /> Super Plus Extra/Ultra Tampon<br />
                </form>
              </div>
            </div>
            <div className="price-footer">
              <div className="price-action">
                <br /><br />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 wow fadeInUp" data-wow-delay="0.0s">
          <div className="price-item">
            <div className="price-header">
              <div className="price-title">
                <h2>Menstrual Cups</h2>
              </div>
              <div className="price-prices">
                <h2><small>Varieties</small><span /></h2>
              </div>
            </div>
            <div className="price-body">
              <div className="price-description">
                <form action>
                  <input type="radio" name="Choose" defaultValue="Menstrual Cup" /> Menstrual Cup<br />
                </form>
                <form action>
                  <input type="radio" name="Choose" defaultValue="Disposable Menstrual Cup" /> Disposable Menstrual Cup<br />
                </form>
                <form action>
                  <input type="radio" name="Choose" defaultValue="Inexpensive Menstrual Cup" />Inexpensive Menstrual Cup<br />
                </form>
                <form action>
                  <input type="radio" name="Choose" defaultValue="Menstrual Cup for Sensitive Skin" /> Menstrual Cup for Sensitive Skin<br />
                </form>
                <form action>
                  <input type="radio" name="Choose" defaultValue="Menstrual Cup for Beginners" /> Menstrual Cup for Beginners<br />
                </form>
              </div>
            </div>
            <div className="price-footer">
              <div className="price-action">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container discount-text">
        <br />
        <a className="btn" href="">Buy Now!</a>
      </div>
    </div>
  </div>
  {/* price end */}
  <br/><br/><br/><br/><br/><br/>
</>

        </div>
    )
}

export default Price
