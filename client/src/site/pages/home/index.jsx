import React, { useEffect } from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchForm from "./../../components/search-form/index";
import { fetchData } from "./../../../redux/slice/dataSlice";
import axios from "axios";

const Home = () => {
  // const data = useSelector((state) => state.getDataSlice);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, [dispatch]);

  // console.log(data);

  const getUser = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/user", {
        withCredentials: true,
      });
      console.log(data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <main id="home">
      <section id="greeting">
        <div className="container">
          <div className="welcome">
            <h2>Welcome To Hotel Alpha</h2>
            <p>
              Lorem ipsum dolor sit amet, conconsectetuer adipiscing elit Lorem
              ipsum dolor sit amet, conconsectetuer
            </p>
            <Link to="/booking">Get Started Now</Link>
          </div>
          <SearchForm />
        </div>
      </section>
    </main>
  );
};

export default Home;
