import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const HeaderBar = () => {
  return (
    <>
      <h1 className="heading_style">
        Welcome to <span className="headingSub_style">MX</span>
        <span className="headingSub2_Style">Player</span>
      </h1>
      <h5 className="headingSub3_Style">next Level of Experience</h5>
      <ul className="headingSub2_Style">
        <Link to="/anup_thakurwar">
          <li>Home</li>
        </Link>
        <a href="https://www.mxplayer.in/web-series">
          <li>WebSeries</li>
        </a>

        <a href="https://www.mxplayer.in/music">
          <li>Music</li>
        </a>

      </ul>
    </>
  );
};

export default HeaderBar;
