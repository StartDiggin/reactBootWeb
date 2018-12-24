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
              <div className="col-md-6 m-auto text-dark text-center">
                <h1>Our Services</h1>
                <p className="text-white" id="servicesText">
                  Each plan details what is included and estimated cost.
                </p>
              </div>
            </div>
          </div>
        </header>
        {/* </div> */}

        {/* Services */}
        <section id="services" className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card text-center">
                  <div className="card-header bg-dark text-white">
                    <h3>Pricing Plan 1</h3>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">$750.00</h4>
                    <p className="card-text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae, harum.
                    </p>
                    <ul className="list-group">
                      <li className="list-group-item">
                        <i className="fas fa-check" /> Includes up to 6 pages
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check" /> Feature Two
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check" /> Feature Three
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check" /> Feature Four
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check" /> Feature Five
                      </li>
                    </ul>
                    <a href="/" className="btn btn-danger btn-block mt-2">
                      Get It
                    </a>
                  </div>
                  <div className="card-footer text-muted">1 Year Plan</div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center">
                  <div className="card-header bg-dark text-white">
                    <h3>Service Plan 2</h3>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">$99.99</h4>
                    <p className="card-text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae, harum.
                    </p>
                    <ul className="list-group">
                      <li className="list-group-item">
                        <i className="fas fa-check" /> Feature One
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check" /> Feature Two
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check" /> Feature Three
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check" /> Feature Four
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check" /> Feature Five
                      </li>
                    </ul>
                    <a href="/" className="btn btn-danger btn-block mt-2">
                      Get It
                    </a>
                  </div>
                  <div className="card-footer text-muted">1 Year Plan</div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center">
                  <div className="card-header bg-dark text-white">
                    <h3>Service Plan 3</h3>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">$129.99</h4>
                    <p className="card-text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae, harum.
                    </p>
                    <ul className="list-group">
                      <li className="list-group-item">
                        <i className="fas fa-check" /> Feature One
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check" /> Feature Two
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check" /> Feature Three
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check" /> Feature Four
                      </li>
                      <li className="list-group-item">
                        <i className="fas fa-check" /> Feature Five
                      </li>
                    </ul>
                    <a href="/" className="btn btn-danger btn-block mt-2">
                      Get It
                    </a>
                  </div>
                  <div className="card-footer text-muted">1 Year Plan</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="p-5 bg-dark text-white">
          <div className="container">
            <h1 className="text-center">Frequently Asked Questions</h1>
            <hr />
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <a
                        href="#collapseOne"
                        data-toggle="collapse"
                        data-parent="accordion"
                      >
                        Question One
                      </a>
                    </h5>
                  </div>
                  <div id="collapseOne" className="collapse">
                    <div className="card-body">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Deleniti iste officiis, voluptatum fugiat praesentium
                      libero blanditiis corrupti corporis! Similique, quaerat.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <a
                        href="#collapseTwo"
                        data-toggle="collapse"
                        data-parent="accordion"
                      >
                        Question Two
                      </a>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse">
                    <div className="card-body">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Deleniti iste officiis, voluptatum fugiat praesentium
                      libero blanditiis corrupti corporis! Similique, quaerat.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <a
                        href="#collapseThree"
                        data-toggle="collapse"
                        data-parent="accordion"
                      >
                        Question Three
                      </a>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse">
                    <div className="card-body">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Deleniti iste officiis, voluptatum fugiat praesentium
                      libero blanditiis corrupti corporis! Similique, quaerat.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <a
                        href="#collapseFour"
                        data-toggle="collapse"
                        data-parent="accordion"
                      >
                        Question Four
                      </a>
                    </h5>
                  </div>
                  <div id="collapseFour" className="collapse">
                    <div className="card-body">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Deleniti iste officiis, voluptatum fugiat praesentium
                      libero blanditiis corrupti corporis! Similique, quaerat.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <a
                        href="#collapseFive"
                        data-toggle="collapse"
                        data-parent="accordion"
                      >
                        Question Five
                      </a>
                    </h5>
                  </div>
                  <div id="collapseFive" className="collapse">
                    <div className="card-body">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Deleniti iste officiis, voluptatum fugiat praesentium
                      libero blanditiis corrupti corporis! Similique, quaerat.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h5 className="mb-0">
                      <a
                        href="#collapseSix"
                        data-toggle="collapse"
                        data-parent="accordion"
                      >
                        Question Six
                      </a>
                    </h5>
                  </div>
                  <div id="collapseSix" className="collapse">
                    <div className="card-body">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Deleniti iste officiis, voluptatum fugiat praesentium
                      libero blanditiis corrupti corporis! Similique, quaerat.
                    </div>
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
