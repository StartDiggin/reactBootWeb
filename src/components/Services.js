import React from "react";
import Footer from "./Footer";

class Services extends React.Component {
  render() {
    return (
      <div className="services">
        {/* <div className="dark-overlay"> */}
        <header id="page-header-services">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto text-white text-center">
                <div className="service-dark-overlay">
                  <h1>Our Services</h1>
                  <p className="text-white" id="servicesText">
                    "Being of service to others is what brings true happiness."
                  </p>
                  <cite>~Marie Osmond</cite>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* </div> */}

        {/* Services */}
        <section id="services" className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="card text-center">
                  <div className="card-header bg-dark text-white">
                    <h3>Basic Plan</h3>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">$750.00</h4>
                    <p className="card-text">
                      This basic plan includes the following:
                    </p>
                    <ul className="list-group">
                      <li className="list-group-item">
                        <i className="fas fa-check" /> Includes up to 6 pages
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check" /> Professional Responsive
                        Website Design: <strong> Value $500+</strong>
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check" /> Domain setup and hosting
                        accounts:
                        <strong> Value $50+</strong>
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check" /> Responsive mobile design:
                        <strong> Value $500+</strong>
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check" /> SEO setup to make your
                        site Search Engine Friendly:
                        <strong> Value $100+</strong>
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check" /> Email address setup on
                        your domain (username@domain.com)
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check" /> Initial setup and
                        testing:<strong> Value $350+</strong>
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check" />
                        <strong>Total Value: $1500+</strong>
                      </li>
                    </ul>
                    <a
                      href="/contact"
                      className="btn btn-danger btn-block mt-2"
                    >
                      Get It
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card text-center">
                  <div className="card-header bg-dark text-white">
                    <h3>Premium Plan</h3>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">$999.00</h4>
                    <p className="card-text">Premium Plan includes:</p>
                    <ul className="list-group">
                      <li className="list-group-item">
                        <i className="fas fa-check" /> Includes up to 12 pages
                        and all of the Basic plan
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check" /> Keyword Research for
                        Search Engine Marketing with Google Analytics:
                        <strong> Value $200+</strong>
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check" /> Professional stock images
                        for site: <strong> Value $200+</strong>
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check" /> Blog setup (one page)
                        <strong> Value $100+</strong>
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check" /> Website and strategy
                        consultation: <strong> Value $300+</strong>
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check" />
                        <strong>Total Value: $1799+</strong>
                      </li>
                    </ul>
                    <a
                      href="/contact"
                      className="btn btn-danger btn-block mt-2"
                    >
                      Get It
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default Services;
