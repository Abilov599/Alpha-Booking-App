import React, { useEffect } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardDataById } from "../../../redux/slice/getCardDataById";
import { Helmet } from "react-helmet";

const Booking = () => {
  const { roomID } = useParams();

  const dispatch = useDispatch();

  const { loading, data, error } = useSelector(
    (state) => state.getCardDataById
  );

  useEffect(() => {
    dispatch(fetchCardDataById(roomID));
  }, [dispatch]);

  data && console.table(data);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Booking</title>
      </Helmet>
      BookingPage
    </div>
  );
};

export default Booking;
