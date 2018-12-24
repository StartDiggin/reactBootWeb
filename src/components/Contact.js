import React from "react";
import Footer from "./Footer";
import Person1 from "../img/person1.jpg";
import Person2 from "../img/person2.jpg";
import Person3 from "../img/person3.jpg";
import Person4 from "../img/person4.jpg";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <header id="page-header">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto text-center">
                <h1>Contact Us</h1>
              </div>
            </div>
          </div>
        </header>

        <section id="contact" className="py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card p-4">
                  <div className="card-body">
                    <h4>Get In Touch</h4>
                    <p>Contact us for a free consult! </p>
                    <p>
                      Please submit any questions you may have and we will get
                      back to you with 24 hours!! Thank you!
                    </p>
                    <h1>Address:</h1>
                    <p>Nashua, NH 03062</p>
                    <h4>Email:</h4>
                    <p>J.G.Dean97@gmail.com</p>
                    <h4>Phone:</h4>
                    <p>(971) 570-1978</p>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card p-4">
                  <div className="card-body">
                    <h3 className="text-center">
                      Please fill out this form to contact us
                    </h3>
                    <hr />
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            type="text"
                            className="form-control"
                            placeholder="Message"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="submit"
                            value="submit"
                            className="btn btn-ouline-danger btn-block"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Staff */}
        <section id="staff" className="py-5 text-center bg-dark text-white">
          <div className="container">
            <h1>Our Staff</h1>
            <hr />
            <div className="row">
              <div className="col-md-3">
                <img
                  src={Person1}
                  alt="staff"
                  className="img-fluid rounded-circle mb-2"
                />
                <h4>Jane Doe</h4>
                <small>Marketing Manager</small>
              </div>
              <div className="col-md-3">
                <img
                  src={Person2}
                  alt="staff"
                  className="img-fluid rounded-circle mb-2"
                />
                <h4>Jane Doe</h4>
                <small>Marketing Manager</small>
              </div>
              <div className="col-md-3">
                <img
                  src={Person3}
                  alt="staff"
                  className="img-fluid rounded-circle mb-2"
                />
                <h4>Jane Doe</h4>
                <small>Marketing Manager</small>
              </div>
              <div className="col-md-3">
                <img
                  src={Person4}
                  alt="staff"
                  className="img-fluid rounded-circle mb-2"
                />
                <h4>Jane Doe</h4>
                <small>Marketing Manager</small>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Contact;
