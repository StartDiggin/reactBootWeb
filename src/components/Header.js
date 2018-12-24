import React from "react";

class Header extends React.Component {
  // clicked = e => {
  //   e.preventDefault();
  //   e.currentTarget.classList.add("active");
  // };

  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container">
            <a href="index.html" className="navbar-brand">
              JGDesign
            </a>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active" onClick={this.clicked}>
                  <a href="/" className="nav-link" id="home">
                    Home
                  </a>
                </li>
                <li className="nav-item" onClick={this.clicked}>
                  <a href="/about" className="nav-link" id="about">
                    About Us
                  </a>
                </li>
                <li className="nav-item" onClick={this.clicked}>
                  <a href="/services" className="nav-link" id="services">
                    Services
                  </a>
                </li>
                <li className="nav-item" onClick={this.clicked}>
                  <a href="/contact" className="nav-link" id="contact">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/contact" id="consult" className="btn btn-primary">
                    Free Consult!
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;