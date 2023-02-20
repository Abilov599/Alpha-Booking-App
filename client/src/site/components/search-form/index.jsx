import React, { useState } from "react";
import "./index.scss";
import { DatePicker, Select } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const SearchForm = () => {
  const navigate = useNavigate();
  const [checkInValue, setCheckInValue] = useState(null);
  const [checkOutValue, setCheckOutValue] = useState(null);
  const [roomValue, setRoomValue] = useState("Single Room");
  const [adultsValue, setAdultsValue] = useState(1);
  const [childrenValue, setChildrenValue] = useState(0);

  const { pathname } = useLocation();

  const dateFormatList = "DD-MM-YYYY";

  const totalDaysValue =
    checkInValue && checkOutValue
      ? moment
          .duration(
            moment(checkOutValue, dateFormatList).diff(
              moment(checkInValue, dateFormatList)
            )
          )
          .asDays()
      : 1;

  const obj = {
    checkInValue: checkInValue,
    checkOutValue: checkOutValue,
    roomValue: roomValue,
    adultsValue: adultsValue,
    childrenValue: childrenValue,
    totalDaysValue: totalDaysValue,
  };

  console.log(obj.totalDaysValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    checkInValue &&
      checkOutValue &&
      localStorage.setItem("formObj", JSON.stringify(obj));
    if (pathname === "/") {
      navigate("/rooms");
    }
    // if (params) {
    // }
    // navigate("/rooms");
  };

  const { checkInVal, checkOutVal, roomVal, adultsVal, childrenVal } =
    JSON.parse(localStorage.getItem("formObj"));

  return (
    <div className="search-room">
      <form action="" method="get" onSubmit={(e) => handleSubmit(e)}>
        <h4>
          Search Your <span>Rooms</span>
        </h4>
        <div className="form-group">
          <DatePicker
            onChange={(_date, dateString) => setCheckInValue(dateString)}
            placeholder="Check In"
            format={dateFormatList}
          />
        </div>
        <div className="form-group">
          <DatePicker
            onChange={(_date, dateString) => setCheckOutValue(dateString)}
            placeholder="Check Out"
            format={dateFormatList}
          />
        </div>
        <div className="form-group">
          <Select
            placeholder="Rooms"
            onChange={(value) => {
              setRoomValue(value);
            }}
            options={[
              { value: "Single Room", label: "Single Room" },
              { value: "Double Room", label: "Double Room" },
              { value: "Deluxe Room", label: "Deluxe Room" },
              { value: "Super Deluxe Room", label: "Super Deluxe Room" },
            ]}
          />
        </div>
        <div className="form-group">
          <Select
            placeholder="Adults"
            onChange={(value) => {
              setAdultsValue(value);
            }}
            options={[
              { value: 1, label: "1" },
              { value: 2, label: "2" },
              { value: 3, label: "3" },
              { value: 4, label: "4" },
            ]}
          />
        </div>
        <div className="form-group">
          <Select
            placeholder="Children"
            onChange={(value) => {
              setChildrenValue(value);
            }}
            options={[
              { value: 1, label: "1" },
              { value: 2, label: "2" },
              { value: 3, label: "3" },
              { value: 4, label: "4" },
            ]}
          />
        </div>
        <div className="form-group">
          <button type="submit">
            {pathname === "/rooms" ? "Confirm" : "Search"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
