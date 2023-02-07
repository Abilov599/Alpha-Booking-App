import React from "react";
import "./index.scss";
import { DatePicker } from "antd";

const SearchForm = () => {
  const dateFormatList = "DD/MM/YYYY";
  return (
    <div className="search-room">
      <form action="" method="get">
        <h4>
          Search Your <span>Rooms</span>
        </h4>
        <div className="form-group">
          <DatePicker placeholder="Check In" format={dateFormatList} />
        </div>
        <div className="form-group">
          <DatePicker placeholder="Check Out" format={dateFormatList} />
        </div>
        <div className="form-group">
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
