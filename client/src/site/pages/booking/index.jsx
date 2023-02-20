import React, { useEffect } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardDataById } from "../../../redux/slice/getCardDataById";

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

  return <div>BookingPage</div>;
};

export default Booking;
