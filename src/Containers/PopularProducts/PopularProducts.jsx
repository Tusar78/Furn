import React from "react";
import "./PopularProducts.css";

// Import necessary Images
import popularProduct1 from "../../assets/images/p1.png";
import popularProduct2 from "../../assets/images/p2.png";
import popularProduct3 from "../../assets/images/p3.png";

const PopularProducts = () => {
  return (
    <section className="popular-product">
      <div className="custom-container">
        <div className="popular-product__list">
          <div className="popular-product__item">
            <div className="popular-product__img-wrap popular--one">
              <img
                src={popularProduct1}
                alt="Popular product img"
                className="popular-product__img"
              />
            </div>
            <div className="popular-product__content-wrap">
              <h2 className="popular-product__title">Arm Chair</h2>
              <p className="popular-product__text">
                Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit
                aut fugit.
              </p>
            </div>
          </div>
          <div className="popular-product__item">
            <div className="popular-product__img-wrap popular--two">
              <img
                src={popularProduct2}
                alt="Popular product img"
                className="popular-product__img"
              />
            </div>
            <div className="popular-product__content-wrap">
              <h2 className="popular-product__title">
                Latest Designed Stool and Chair
              </h2>
              <p className="popular-product__text product__text--two">
                Edi Ut Perspiciatis Unde Omnis Iste Natusina Error Sit
                Voluptatem Accusantium Doloret Mque Laudantium, Totam Rem
                Aperiam.
              </p>
              <h4 className="popular-product__price">
                Sales Start from
                <span className="popular-product__price--number"> $99.00</span>
              </h4>
              <button className="popular-product__btn">Discover More</button>
            </div>
          </div>
          <div className="popular-product__item">
            <div className="popular-product__img-wrap">
              <img
                src={popularProduct3}
                alt="Popular product img"
                className="popular-product__img"
              />
            </div>
            <div className="popular-product__content-wrao">
              <h2 className="popular-product__title">Hanging Lamp</h2>
              <p className="popular-product__text">
                Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit
                aut
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
