import React, { useState } from "react";
import FavoriteBtn from "./FavoriteBtn";
import FavoriteMovie from "./FavoriteMovie";
import HeaderBar from "./HeaderBar";
import "./MxPlayer.css";
import SearchBar from "./SearchBar";
import ReadMoreReact from "read-more-react";

const MxPlayerCards = (props) => {
  return (
    <div className="scrollMenu">
      {props.data.map((items, index) => {
        return (
          <div
            className="container"
            style={{ width: "30rem" }}
            key={items.title}
          >
            <div className="row">
              <div className="col-sm">
                <div className="card" key={index}>
                  <div>
                    <img
                      src={props.MImg + items.poster_path}
                      alt="webseries"
                      className="card-img-top"
                    />
                  </div>
                  <div>
                    <h2 className="card-title">{items.title} </h2>
                  </div>
                  <div height="100px">
                    <h3 className="card-text">
                      <ReadMoreReact text={items.overview} />
                    </h3>
                  </div>
                  <div>
                    <h3 className="card-text">
                      popularity: {items.popularity}{" "}
                    </h3>
                  </div>
                  <div>
                    <h3 className="card-text">
                      {" "}
                      Release Date: {items.release_date}{" "}
                    </h3>
                  </div>
                  <div>
                    <h3 className="card-text">
                      Vote Count: {items.vote_count}{" "}
                    </h3>
                  </div>
                  <button
                    href={items.link}
                    target="_Blank"
                    type="button"
                    className="btn btn-outline-success"
                  >
                    Watch Now
                  </button>

                  {/* <button onClick={()=>{props.fav(items)}}>My Favorite</button> */}
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => {
                      props.handle(items);
                    }}
                  >
                    My Favorite
                  </button>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MxPlayerCards;
