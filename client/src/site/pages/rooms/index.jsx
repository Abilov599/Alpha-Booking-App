import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import RoomCard from "./../../components/room-card/index";
import { Helmet } from "react-helmet";

const Rooms = () => {
  return (
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
  );
};

export default Rooms;
