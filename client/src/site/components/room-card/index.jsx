import React from "react";
import "./index.scss";

const RoomCard = () => {
  return (
    <div id="room-card">
      <div className="row">
        <div className="card">
          <div className="card-image">
            <div className="photo"></div>
            <div className="room-price">$100</div>
          </div>
          <div className="card-details">
            <h3></h3>
            <p>
              <i class="fa-solid fa-location-dot"></i> <a href=""></a>
            </p>
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
                  <i class="fa-solid fa-square-parking"></i>Parking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
