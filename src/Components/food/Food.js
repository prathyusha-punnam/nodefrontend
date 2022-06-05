import * as React from "react";
import Bottom from "../bottom/Bottom";
// import Bottom from "../bottom/Bottom";

const Food = () => {

  return (
    <div>
      <h1 className="tollyh">Contact Us</h1><hr className="thhr"/>
      <div className="name">
        <h1 className="nam">Name : prathyusha <br />Email :prathyusha.punnam@gmail.com <br /> contact :9000000000 <span className="na"></span></h1>
        <div className="social">
        <a href="https://www.facebook.com"><i className="fab fa-facebook-square"></i></a>
        <a href="https://www.instagram.com"><i className="fab fa-instagram-square"></i></a>
        <a href="https://www.twitter.com"><i className="fab fa-twitter-square"></i></a>
        <a href="https://www.linked.in"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.github.com"><i className="fab fa-github-square"></i></a>
        </div>
        <div style={{marginLeft:"-10%"}}><Bottom /></div>
      </div>
    </div>
  );
};

export default Food;