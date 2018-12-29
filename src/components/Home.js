import React from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import smbusiness from "../img/smbusiness.jpeg";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Carousel />
        <section id="home-icons" className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-4 text-center">
                <i className="fas fa-cog fa-3x mb-2" />
                <h3>Increase Sales</h3>
                <p>Do you want to learn how to increase your sales?</p>
              </div>
              <div className="col-md-4 mb-4 text-center">
                <i className="fas fa-cloud fa-3x mb-2" />
                <h3>Secure your business</h3>
                <p>
                  Do you want to learn how to secure your business and client
                  data?
                </p>
              </div>
              <div className="col-md-4 mb-4 text-center">
                <i className="fas fa-cart-plus fa-3x mb-2" />
                <h3>Making Money</h3>
                <p>
                  Would you be happier if your business started generating more
                  income?
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="home-heading" className="p-5">
          <div className="dark-overlay">
            <div className="col">
              <div className="container pt-5">
                <h3>Did you answer yes to any of the questions above?</h3>
                <a href="/contact" className="btn btn-primary">
                  Free Consult!
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section id="info" className="py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <h3>Reach more customers</h3>
                <p>
                  There are many ways to reach more customers. Finding out the
                  right way for your business is key.
                </p>
                <a href="/contact" className="btn btn-outline-danger btn-lg">
                  Learn How!
                </a>
              </div>
              <div className="col-md-6">
                <img src={smbusiness} alt="laptop" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;
