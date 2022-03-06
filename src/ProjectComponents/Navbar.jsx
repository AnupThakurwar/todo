import { render } from '@testing-library/react';
import React from 'react'
import { Link } from "react-router-dom";

const Navbar=(props)=>{
    return(
    <>
 <nav class="navbar navbar-expand-lg navbar-dark bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Mx Player</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <Link to="/anup_thakurwar">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
     </Link>
        <li class="nav-item">
          <a class="nav-link" href="https://www.mxplayer.in/web-series" target="_blank">WebSeries</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="https://www.mxplayer.in/music" target="_blank" >Music</a>
        </li>
        <Link to="/favourite">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Favourite</a>
        </li>
     </Link>
      </ul>
     
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search Movies Here" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={props.InputData} value={props.searchData}/>
       
      </form>
    </div>
  </div>
</nav>
    </>
    );
}

export default Navbar;