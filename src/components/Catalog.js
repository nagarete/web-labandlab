import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import data from "../assets/data";
import tpLogo from "../assets/tokopedia-logo.png";
import spLogo from "../assets/shopee-logo.png";
import { IoFilter } from "react-icons/io5";
import "../styles/catalog.css";

const Catalog = () => {
  const all = data;
  const hoodies = data.filter((item) => item.type === "hoodie");
  const sweaters = data.filter((item) => item.type === "sweater");
  const tshirts = data.filter((item) => item.type === "tshirt");
  const aot = data.filter((item) => item.series === "aot");
  const bc = data.filter((item) => item.series === "blackClover");
  const [filterVal, setFilterVal] = useState("all");
  const [display, setDisplay] = useState(all);
  const [showFilter, setShowFilter] = useState(false);
  const handleShow = () => {
    setShowFilter((curr) => !curr);
  };
  const handleAll = () => {
    setDisplay(all);
    setFilterVal("all");
    setShowFilter(false);
  };
  const handleHoodies = () => {
    setDisplay(hoodies);
    setFilterVal("hoodies");
    setShowFilter(false);
  };
  const handleSweaters = () => {
    setDisplay(sweaters);
    setFilterVal("sweaters");
    setShowFilter(false);
  };
  const handleTshirts = () => {
    setDisplay(tshirts);
    setFilterVal("tshirts");
    setShowFilter(false);
  };
  const handleAOT = () => {
    setDisplay(aot);
    setFilterVal("aot");
    setShowFilter(false);
  };
  const handleBC = () => {
    setDisplay(bc);
    setFilterVal("bc");
    setShowFilter(false);
  };

  return (
    <>
      {showFilter ? <div className="fog" onClick={handleShow}></div> : null}
      <Header />
      <Sidebar />
      <section className="catalog">
        <div className={"catalog-filter " + (showFilter ? "shown" : "")}>
          <p className="filter-title">Shop by Clothing</p>
          <button
            className={
              "filter-option " + (filterVal === "all" ? "selected" : "")
            }
            onClick={handleAll}
          >
            all
          </button>
          <button
            className={
              "filter-option " + (filterVal === "hoodies" ? "selected" : "")
            }
            onClick={handleHoodies}
          >
            hoodies
          </button>
          <button
            className={
              "filter-option " + (filterVal === "sweaters" ? "selected" : "")
            }
            onClick={handleSweaters}
          >
            sweaters
          </button>
          <button
            className={
              "filter-option " + (filterVal === "tshirts" ? "selected" : "")
            }
            onClick={handleTshirts}
          >
            tshirts
          </button>
          <p className="filter-title">Shop by Anime</p>
          <button
            className={
              "filter-option " + (filterVal === "aot" ? "selected" : "")
            }
            onClick={handleAOT}
          >
            Attack on Titan
          </button>
          <button
            className={
              "filter-option " + (filterVal === "bc" ? "selected" : "")
            }
            onClick={handleBC}
          >
            Black Clover
          </button>
        </div>
        <div className="filter-button-container">
          <button className="filter-button" onClick={handleShow}>
            filter <IoFilter className="filter-icon" />
          </button>
        </div>
        <div className="catalog-grid">
          {display.map((item) => (
            <div className="catalog-item" key={item}>
              <img src={item.url} alt="item" className="catalog-pic" />
              <p className="catalog-desc">{item.name}</p>
              <p className="catalog-price">
                {item.price.toLocaleString("id", {
                  style: "currency",
                  currency: "IDR",
                })}
              </p>
              <div className="catalog-links">
                <a
                  href="https://tokopedia.com/labandlab"
                  className="link-tokopedia"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={tpLogo}
                    alt="tokopedia logo"
                    className="link-icon"
                  />
                </a>
                <a
                  href="https://shopee.co.id/labandlab.official"
                  className="link-shopee"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={spLogo} alt="shopee logo" className="link-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Catalog;
