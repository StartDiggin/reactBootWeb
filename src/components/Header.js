import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container">
            <a href="index.html" className="navbar-brand">
              InteleSite
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
                <li
                  className="nav-item active"
                  id="home"
                  name="home"
                  onClick={this.onClick}
                >
                  <a href="/" name="home" className="nav-link" id="home">
                    Home
                  </a>
                </li>
                <li
                  className="nav-item"
                  id="about"
                  name="about"
                  onClick={this.onClick}
                >
                  <a href="/about" name="about" className="nav-link" id="about">
                    About Us
                  </a>
                </li>
                <li
                  className="nav-item"
                  id="services"
                  name="services"
                  onClick={this.onClick}
                >
                  <a
                    href="/services"
                    name="services"
                    className="nav-link"
                    id="services"
                  >
                    Services
                  </a>
                </li>
                <li
                  className="nav-item"
                  id="contact"
                  name="contact"
                  onClick={this.onClick}
                >
                  <a
                    href="/contact"
                    name="contact"
                    className="nav-link"
                    id="contact"
                  >
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
