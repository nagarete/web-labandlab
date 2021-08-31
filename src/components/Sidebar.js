import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../styles/sidebar.css";

const Sidebar = () => {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive((n) => !n);
  };

  return (
    <>
      <AiOutlineMenu
        size={42}
        onClick={handleActive}
        className="sidebar-icon"
      />
      <nav className={"sidebar " + (active ? "active" : "")}>
        <AiOutlineClose
          size={42}
          color="white"
          onClick={handleActive}
          className="sidebar-close"
        />
        <ul className="sidebar-nav">
          <li className="sidebar-nav-item">
            <a
              href="https://tokopedia.com/labandlab"
              target="_blank"
              rel="noreferrer"
            >
              tokopedia
            </a>
          </li>
          <li className="sidebar-nav-item">
            <a
              href="https://shopee.co.id/labandlab.official"
              target="_blank"
              rel="noreferrer"
            >
              shopee
            </a>
          </li>
          <li className="sidebar-nav-item">
            <a
              href="https://wa.me/message/ZFRIBKZHOVWJN1"
              target="_blank"
              rel="noreferrer"
            >
              contact
            </a>
          </li>
          <li className="sidebar-nav-item">&copy; 2021 Lab and Lab</li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
