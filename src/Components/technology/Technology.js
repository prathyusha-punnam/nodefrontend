import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bottom from "../bottom/Bottom";
import axios from "axios";

const Technology = () => {
  const [tech, setTech] = useState([]);

  useEffect(() => {
    axios
      .get("https://blogbackendapp.herokuapp.com/api/blog")
      .then((res) => {
        setTech(res.data);
      });
  }, []);

  return (
    <div>
      <h1 className="tollyh">Technology</h1><hr className="thhr"/>
      {tech.filter((render)=>render.id>4 && render.id<9).map((tec) => (
        <div key={tech.id} className="tolly">
          <Link to={`/technology/${tec.id}`} className="tolly">
          <div className="tollyi"><img src={tec.img} alt="" /></div>
          <h3 className="tollyt">{tec.det}</h3>
          </Link>
          <h5 className="tollyd">{tec.date}</h5>
          <hr/>
        </div>
      ))}
      <div className="adv"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4f9NHMeskjPMQBVPQPWKLycjkO6pjdHlv3Q&usqp=CAU" className="adv" alt="" /></div><br/>
      <button className="loadmore">LoadMore <span>&#8595;</span></button>
      <Bottom />
    </div>
  );
};

export default Technology;