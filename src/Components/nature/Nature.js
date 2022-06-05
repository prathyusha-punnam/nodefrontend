import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bottom from "../bottom/Bottom";
import axios from "axios";

const Nature = () => {
  const [nature, setNature] = useState([]);

  useEffect(() => {
    axios
      .get("https://blogbackendapp.herokuapp.com/api/blog")
      .then((res) => {
        setNature(res.data);
      });
  }, []);
  
    return (
      <div >
        <h1 className="tollyh">Environment</h1><hr className="thhr"/>
        {nature.filter((render)=>render.id>12&&render.id<17).map((wood) => (
          <div key={nature.imgt} className="tolly">
            <Link to={`/nature/${wood.id}`} className="tolly">
              <div className="tollyi"><img src={wood.img} alt="" /></div>
              <h3 className="tollyt">{wood.det}</h3>
            </Link>
            <div className="tollyn"><h5>{wood.date}</h5></div>
            <hr/>
          </div>
        ))}
        <div className="adv"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYlqQWJfookmuHjWdKwYzmhqAxkl_FepyUg&usqp=CAU" className="adv" alt="" /></div><br/>
        <button className="loadmore">LoadMore <span>&#8595;</span></button>
        <Bottom />
      </div>
    );
  };
  
  export default Nature;