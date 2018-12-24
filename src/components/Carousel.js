import React from "react";

const Carousel = () => (
  <section id="showcase">
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active" />
        <li data-target="#myCarousel" data-slide-to="1" />
        <li data-target="#myCarousel" data-slide-to="2" />
      </ol>
      <div className="carousel-inner">
        {/* Image 1 on carousel */}
        <div className="carousel-item carousel-image-1 active">
          <div className="container">
            <div className="carousel-caption d-none d-sm-block text-right mb-5">
              <h1 className="display-4">Value of Time</h1>
              <p className="lead">Where would you go if you had more time?</p>
              <a href="/contact" className="btn btn-danger btn-lg">
                <small>Do you want to save time?</small>
              </a>
            </div>
          </div>
        </div>
        {/* Image 2 on carousel */}
        <div className="carousel-item carousel-image-2 ">
          <div className="container">
            <div className="carousel-caption d-none d-sm-block text-left mb-5">
              <h1 className="display-3">Are you Adventurous?</h1>
              <p className="lead text-white">
                Where would you go if you had more money?
              </p>
              <a href="/contact" className="btn btn-dark btn-lg">
                Learn How!
              </a>
            </div>
          </div>
        </div>
        {/* Image 3 on carousel */}
        <div className="carousel-item carousel-image-3 ">
          <div className="container">
            <div className="carousel-caption d-none d-sm-block text-right mb-5">
              <h1 className="display-3">How well do you know your city?</h1>
              <p className="lead">
                Exploring a new city takes time and money, learn how to have
                more of both.
              </p>
              <a href="/contact" className="btn btn-light btn-lg">
                Explore now
              </a>
            </div>
          </div>
        </div>
      </div>
      <a href="#myCarousel" data-slide="prev" className="carousel-control-prev">
        <span className="carousel-control-prev-icon" />
      </a>
      <a href="#myCarousel" data-slide="next" className="carousel-control-next">
        <span className="carousel-control-next-icon" />
      </a>
    </div>
  </section>
);

export default Carousel;
