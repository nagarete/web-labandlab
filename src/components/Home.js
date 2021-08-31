import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <section className="page-container">
        <div className="motto-container">
          <div className="motto-text">
            Creating Style with anime is our way.
          </div>
          <div className="motto-cr">&copy; 2021 Lab and Lab</div>
          <Link className="motto-btn" to="/catalog">
            Browse Catalog
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
