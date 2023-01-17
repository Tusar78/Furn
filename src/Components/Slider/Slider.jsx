import React from "react";
import { images } from "../../Constant";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";



// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// Import Own Style
import './Slider.css'

// import required modules
import { EffectFade, Pagination } from "swiper";

const Slider = () => {
  return (
    <div className="hero__slider">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination]}
        className="mySwiper slider__list"
      >
        <SwiperSlide className="slider__item">
          <div className="slider__item-wrap">
            <div className="slider__wrap-content">
              <span className="slider__subtitle">Great Design Collection</span>
              <h2 className="slider__title">Cloth Covered Accent Chair</h2>
              <p className="slider__text">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do
                Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad
                Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut
                Aliquip.
              </p>
              <div className="slider__price">
                <span>--- $ 399.00</span>
                <del>$ 499.00</del>
              </div>
              <div className="slider__buttons">
                <a href="/home" className="slider__btn slider__btn--pill">
                  <AiOutlinePlusCircle className="slider__btn--icon" />
                  Add to Cart
                </a>
                <a href="/home" className="slider__btn slider__btn--noPill">
                  More Info
                </a>
              </div>
            </div>
            <div className="slider__wrap-image">
              <img
                src={images.slider01}
                alt="Slider Img"
                className="slider__img"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider__item">
          <div className="slider__item-wrap">
            <div className="slider__wrap-content">
              <span className="slider__subtitle">Great Design Collection</span>
              <h2 className="slider__title">Cloth Covered Accent Chair</h2>
              <p className="slider__text">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do
                Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad
                Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut
                Aliquip.
              </p>
              <div className="slider__price">
                <span>--- $ 399.00</span>
                <del>$ 499.00</del>
              </div>
              <div className="slider__buttons">
                <a href="/home" className="slider__btn slider__btn--pill">
                  <AiOutlinePlusCircle className="slider__btn--icon" />
                  Add to Cart
                </a>
                <a href="/home" className="slider__btn slider__btn--noPill">
                  More Info
                </a>
              </div>
            </div>
            <div className="slider__wrap-image">
              <img
                src={images.slider02}
                alt="Slider Img"
                className="slider__img"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider__item">
          <div className="slider__item-wrap">
            <div className="slider__wrap-content">
              <span className="slider__subtitle">Great Design Collection</span>
              <h2 className="slider__title">Cloth Covered Accent Chair</h2>
              <p className="slider__text">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do
                Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad
                Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut
                Aliquip.
              </p>
              <div className="slider__price">
                <span>--- $ 399.00</span>
                <del>$ 499.00</del>
              </div>
              <div className="slider__buttons">
                <a href="/home" className="slider__btn slider__btn--pill">
                  <AiOutlinePlusCircle className="slider__btn--icon" />
                  Add to Cart
                </a>
                <a href="/home" className="slider__btn slider__btn--noPill">
                  More Info
                </a>
              </div>
            </div>
            <div className="slider__wrap-image">
              <img
                src={images.slider03}
                alt="Slider Img"
                className="slider__img"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
