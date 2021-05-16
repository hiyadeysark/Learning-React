import React from 'react'

const Header = () => {
    return (
        <div>
            <div className="top-bar d-none d-md-block">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-8">
        <div className="top-bar-left">
          <div className="text">
            <i className="far fa-clock" />
            <h2>Open 24 x 7</h2>
          </div>
          <div className="text">
            <i className="fa fa-phone-alt" />
            <p>Helpline Number: +91 72571 89471</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="top-bar-right">
          <div className="social">
            <a href><i className="fab fa-twitter" /></a>
            <a href><i className="fab fa-facebook-f" /></a>
            <a href><i className="fab fa-linkedin-in" /></a>
            <a href><i className="fab fa-instagram" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Header
