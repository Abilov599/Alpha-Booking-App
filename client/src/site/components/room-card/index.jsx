import React, { useEffect } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardData } from "./../../../redux/slice/getCardDataSlice";
import { Space, Spin } from "antd";
import { Link } from "react-router-dom";

const RoomCard = () => {
  const { loading, data, error } = useSelector((state) => state.getCardData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCardData());
  }, [dispatch]);

  return (
    <div id="room-card">
      <div className="row">
        {loading ? (
          <Space size="middle">
            <Spin size="small" />
            <Spin />
            <Spin size="large" />
          </Space>
        ) : (
          data &&
          data.map((el) => {
            return (
              <div key={el._id} className="card">
                <div className="card-image">
                  <div className="photo">
                    <img src={`${el.thumbnailImage}`} alt="" />
                    <Link to={`/${el._id}`}>
                      <span></span>
                    </Link>
                  </div>
                  <div className="room-price">{`$${el.price}.99/Night`}</div>
                </div>
                <div className="card-details">
                  <h3>
                    <Link to={`/${el._id}`}>{el.name}</Link>
                  </h3>
                  <p>
                    <Link to="#">
                      <i className="fa-solid fa-location-dot"></i>
                      {el.address}
                    </Link>
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
            );
          })
        )}
      </div>
    </div>
  );
};

export default RoomCard;
