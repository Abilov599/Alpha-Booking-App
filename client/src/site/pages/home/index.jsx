import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import SearchForm from "./../../components/search-form/index";

const Home = () => {
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
