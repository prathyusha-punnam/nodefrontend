import React, { useContext,useState } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../context/Context";

const Footer = () => {

  const [category]=useContext(CategoryContext);
  const [load, setload] = useState(false)

  const loadMore=()=>{
      setload(true)
  }
  const loadLess=()=>{
      setload(false)
  }
  return (
    <div className="h1">
      <div>
        {load ?
        <> 
            <div className="flex2">
            <div className="hc1">
                {category.filter(data=>data.id==="7").map((latest)=>(
                <Link to={`/technology/${latest.id}`} key={category.id} className="hcc1">
                    <div className="himg"><img src={latest.img} alt="" /></div>
                    <div className="c1h3"><h3>{latest.det}</h3></div>
                    <div className="c1h5"><h5>{latest.date}</h5></div>
                    <div className="c1h4"><h4>Category: {latest.category}</h4></div>
                </Link>
                ))}
            </div>
            <div className="hc1">
                {category.filter(data=>data.id==="4").map((latest)=>(
                    <Link to={`/tollywood/${latest.id}`} key={category.id} className="hcc1">
                    <div className="himg"><img src={latest.img} alt="" /></div>
                    <div className="c1h3"><h3>{latest.det}</h3></div>
                    <div className="c1h5"><h5>{latest.date}</h5></div>
                    <div className="c1h4"><h4>Category: {latest.category}</h4></div>
                    </Link>
                ))}
            </div>
            <div className="hc1">
                {category.filter(data=>data.id==="11").map((latest)=>(
                    <Link to={`/jobs/${latest.id}`} key={category.id} className="hcc1">
                    <div className="himg"><img src={latest.img} alt="" /></div>
                    <div className="c1h3"><h3>{latest.det}</h3></div>
                    <div className="c1h5"><h5>{latest.date}</h5></div>
                    <div className="c1h4"><h4>Category: {latest.category}</h4></div>
                    </Link>
                ))}
            </div><br/>
            </div>
            <button className="loadmore" style={{marginLeft:"0px"}} onClick={loadLess}>LoadLess  &#8593;</button>
        </>
        :
        <button className="loadmore" style={{marginLeft:"0px"}} onClick={loadMore}>LoadMore <span>&#8595;</span></button>
        }
      </div>
    </div>
  );
};

export default Footer;