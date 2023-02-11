import React from "react";
import "./index.scss";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { MDBContainer } from "mdb-react-ui-kit";
import siteLogo from "../../assets/images/logo/alpha-logo1.png";

const Header = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("currentUser");
    navigate("/sign-in");
  };

  const items = [
    { key: "1", label: <Link to="/gallery">Gallery</Link> },
    { key: "2", label: <Link to="/about-us">About Us</Link> },
    { key: "3", label: <Link to="/staff">Staff</Link> },
    { key: "4", label: <Link to="/events">Events</Link> },
    { key: "5", label: <Link to="/fag">FAQ</Link> },
  ];

  const items2 = [
    { key: "6", label: <NavLink to="/rooms">Bookings</NavLink> },
    { key: "7", label: <a onClick={() => logOut()}>Log Out</a> },
  ];
  const { pathname } = useLocation();
  const user = JSON.parse(localStorage.getItem("currentUser"));
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
            {pathname === "/rooms" ? (
              <li>
                <MDBContainer className="py-5">
                  <input
                    type="text"
                    className="search-click"
                    placeholder="Search ..."
                  />
                  <i className="fa-solid fa-magnifying-glass"></i>
                </MDBContainer>
              </li>
            ) : null}
            {!user ? (
              <li>
                <NavLink
                  to="sign-in"
                  className={pathname === "/" ? "btn-orange" : "btn-none"}
                >
                  Booking System
                </NavLink>
              </li>
            ) : (
              <button style={{ color: "white" }} onClick={() => logOut()}>
                {user.fullname}
              </button>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
