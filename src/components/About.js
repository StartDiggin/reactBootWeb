import React from "react";
import Footer from "./Footer";
import about2 from "../img/about2.jpeg";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <header id="page-header">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto text-center">
                <h1>About Us</h1>
                <p>"If you do what you love, it is the best way to relax."</p>
                <cite>--Christian Louboutin</cite>
              </div>
            </div>
          </div>
        </header>
        {/* About section */}
        <section id="about" className="py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>What we do</h1>
                <p>
                  We collaborate with our customers to design a website that is
                  right for them. We will put on the finishing touches and
                  launch it to the world. We are fast and affordable and service
                  small businesses to help them grow.
                </p>
                <p>
                  My business philosophy is to always be honest and always have
                  integrity both in business and in life. We strive for an
                  enjoyable work/life balance that has helped lead to our
                  success and to our customer’s success. We keep our team up to
                  date with the latest technology so we can better serve you. We
                  anticipate your needs and are proactive with our communication
                  and collaboration with you.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src={about2}
                  alt="me"
                  className="img-fluid rounded-circle d-none d-md-block about-img"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Icon Boxes */}
        <section id="icon-boxes" className="p-5">
          <div className="container">
            <div className="row mb-4">
              <div className="col-md-4">
                <div className="card text-center">
                  <div className="card-body">
                    <i className="fas fa-building fa-3x" />
                    <h3>Website Development</h3>
                    Design it, Build it, Lanch it!
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-dark text-white text-center">
                  <div className="card-body">
                    <i className="fas fa-bullhorn fa-3x" />
                    <h3>SEO</h3>
                    Let's bring your customers to find you!
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center">
                  <div className="card-body">
                    <i className="fas fa-comments fa-3x" />
                    <h3>Collaboration</h3>
                    Work with us to help us build a site that you and your
                    customers will love.
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-4">
                <div className="card bg-dark text-white text-center">
                  <div className="card-body">
                    <i className="fas fa-coffee fa-3x" />
                    <h3>Have coffee with us!</h3>
                    Sometimes the best business ideas happen away from the
                    office.
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center">
                  <div className="card-body">
                    <i className="fas fa-credit-card fa-3x" />
                    <h3>Pricing</h3>
                    We keep our pricing low so you can get more!
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-dark text-white text-center">
                  <div className="card-body">
                    <i className="fas fa-box fa-3x" />
                    <h3>Growth</h3>
                    We focus on helping small businesses grow!
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

export default About;
