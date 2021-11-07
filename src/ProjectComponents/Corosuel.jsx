import React from "react";


const Corosuel = () => {
  return (
    <>
      <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-inner">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
    <div class="carousel-item active">
      <img src="https://39.cdn.ekm.net/ekmps/shops/allwallpapers/images/avengers-infinity-war-61x91-5cm-movie-poster-31588-1-p.jpg" class="d-block w-50" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://39.cdn.ekm.net/ekmps/shops/allwallpapers/images/avengers-infinity-war-61x91-5cm-movie-poster-31588-1-p.jpg" class="d-block w-50" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://m.media-amazon.com/images/M/MV5BMTkxNzc0MjgwN15BMl5BanBnXkFtZTgwMzY3Nzk1NzE@._V1_.jpg" class="d-block w-50" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
};

export default Corosuel;
