import React from "react";
import "./index.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import siteLogo from "../../assets/images/logo/alpha-logo1.png";

const items = [
  {
    key: "1",
    label: <Link to="/gallery">Gallery</Link>,
  },
  {
    key: "2",
    label: <Link to="/about-us">About Us</Link>,
  },
  {
    key: "3",
    label: <Link to="/staff">Staff</Link>,
  },
  {
    key: "4",
    label: <Link to="/events">Events</Link>,
  },
  {
    key: "5",
    label: <Link to="/fag">FAQ</Link>,
  },
];

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className={pathname == "/" ? "bg-transparent" : ""}>
      <div className="container">
        <nav>
          <Link to="/">
            <img src={siteLogo} alt="ALPHA" />
          </Link>
          <ul className={pathname === "/" ? "color-white" : ""}>
            <li className="nav-items">
              <NavLink to="/">HOME</NavLink>
            </li>
            <li className="nav-items">
              <NavLink to="/rooms">ROOMS</NavLink>
            </li>
            <li className="nav-items">
              <Dropdown
                menu={{
                  items,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    PAGES
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li className="nav-items">
              <NavLink to="/blogs">BLOG</NavLink>
            </li>
            <li className="nav-items">
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
            <li>
              <NavLink to="/booking-system" className="btn-orange">
                Booking System
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
