import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { MDBContainer } from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { fetchUserAuth } from "../../../redux/slice/userAuthSlice";
import siteLogo from "../../assets/images/logo/alpha-logo1.png";
import "./index.scss";

const Header = () => {
  const userState = useSelector((state) => state.userAuthSlice);
  const dispatch = useDispatch();

  const items = [
    { key: "1", label: <Link to="/gallery">Gallery</Link> },
    { key: "2", label: <Link to="/about-us">About Us</Link> },
    { key: "3", label: <Link to="/staff">Staff</Link> },
    { key: "4", label: <Link to="/events">Events</Link> },
    { key: "5", label: <Link to="/fag">FAQ</Link> },
  ];
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(fetchUserAuth());
  }, [dispatch]);

  console.log(userState.data);

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
            <li>
              <NavLink
                to="sign-in"
                className={pathname === "/" ? "btn-orange" : "btn-none"}
              >
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
