import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import RoomCard from "./../../components/room-card/index";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAuth } from "../../../redux/slice/userAuthSlice";

const Rooms = () => {
  const { loading, data, error } = useSelector((state) => state.userAuthSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserAuth());
  }, [dispatch]);

  const useAuth = () => {
    return data && data;
  };

  const isAuth = useAuth();
  return isAuth ? (
    <main id="rooms">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rooms</title>
      </Helmet>
      <section className="sub-banner">
        <div className="container">
          <h1>Rooms</h1>
          <nav>
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="active">Rooms</li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="room-cards">
        <div className="container">
          <RoomCard />
        </div>
      </section>
    </main>
  ) : (
    <Link to="/sign-in">Log in First</Link>
  );
};

export default Rooms;
