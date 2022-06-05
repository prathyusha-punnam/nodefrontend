import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bottom from "../bottom/Bottom";
import axios from "axios";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("https://blogbackendapp.herokuapp.com/api/blog")
      .then((res) => {
        setJobs(res.data);
      });
  }, []);
    return (
      <div>
        <h1 className="tollyh">Jobs</h1><hr className="thhr"/>
        {jobs.filter((render)=>render.id>8 && render.id<13).map((wood) => (
          <div key={jobs.imgt} className="tolly">
            <Link to={`/jobs/${wood.id}`} className="tolly">
              <div className="tollyi"><img src={wood.img} alt="" /></div>
              <h3 className="tollyt">{wood.det}</h3>
            </Link>
            <h5 className="tollyd">{wood.date}</h5>
            <hr/>
          </div>
        ))}
        <div className="adv"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN6CkcBZ5Oxes8-Zwt3-YOQs2WnK5XaJDNGg&usqp=CAU" className="adv" alt="" /></div><br/>
        <button className="loadmore">LoadMore <span>&#8595;</span></button>
        <Bottom/>
      </div>
    );
  };
  
  export default Jobs;