import React, { useEffect } from "react";
import "./index.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardDataById } from "../../../redux/slice/getCardDataById";
import { Helmet } from "react-helmet";
import Slider from "react-slick";

const Booking = () => {
  const { roomID } = useParams();

  const dispatch = useDispatch();

  const { loading, data, error } = useSelector(
    (state) => state.getCardDataById
  );

  useEffect(() => {
    dispatch(fetchCardDataById(roomID));
  }, [dispatch]);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
  };

  return (
    <main id="booking">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Booking</title>
      </Helmet>
      <section className="slider">
        <Slider {...settings}>
          {data?.images.map((img, i) => {
            return (
              <div key={i} className="slide">
                <img src={`${img}`} alt="" />
              </div>
            );
          })}
        </Slider>
      </section>
      <section className="main-info">
        <div className="container">
          <div className="box">
            <div className="image">
              <img src={`${data?.thumbnailImage}`} alt="" />
            </div>
            <div className="content">
              <div className="for-rent">For Rent</div>
              <h1>
                {data?.type}
                <span>
                  {`$${data?.price}.99`}
                  <span>/Night</span>
                </span>
              </h1>
              <div className="facilities">
                <ul>
                  <li>
                    <i className="fa-solid fa-bed"></i>Beds
                  </li>
                  <li>
                    <i className="fa-solid fa-snowflake"></i>AC
                  </li>
                  <li>
                    <i className="fa-solid fa-tv"></i>TV
                  </li>
                  <li>
                    <i className="fa-solid fa-dumbbell"></i>GYM
                  </li>
                  <li>
                    <i className="fa-solid fa-wifi"></i>Wi-Fi
                  </li>
                  <li>
                    <i className="fa-solid fa-square-parking"></i>Parking
                  </li>
                </ul>
              </div>
              <p>
                <Link to="#">
                  <i className="fa-solid fa-location-dot"></i>
                  {data?.address}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="room-details">
        <div className="container">
          <div className="room-about">
            <div className="description">
              <h3>Description</h3>
              <p>{data?.description}</p>
            </div>
            <div class="extra-service">
              <h3>Extra Service</h3>
              <div class="extra-service-item">
                <p>Air Conditioner </p>
                <div class="border-center"></div>
                <div class="label-items-value">
                  <span class="price">+24$</span>to price per person
                </div>
              </div>
              <div class="extra-service-item">
                <p>Free Internet </p>
                <div class="border-center"></div>
                <div class="label-items-value">
                  <span class="price">+14$</span>to price per person
                </div>
              </div>
              <div class="extra-service-item">
                <p>LCD Television </p>
                <div class="border-center"></div>
                <div class="label-items-value">
                  <span class="price">+15$</span>to price per person
                </div>
              </div>
              <div class="extra-service-item">
                <p>Microwave </p>
                <div class="border-center"></div>
                <div class="label-items-value">
                  <span class="price">+30$</span>to price per person
                </div>
              </div>
            </div>
          </div>
          <div className="payment">
            <div className="box">
              <h3>Payment</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Booking;
