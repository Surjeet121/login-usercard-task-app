import React, { useEffect, useState } from "react";
import "./userCardStyle.css";
import avtarImg from "./avatar1.jpeg";

const Users = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  // const navigate = useNavigate();

  const fetchData = () => {
    fetch("https://coralmango.com/api/react-test")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="user_card_container">
      <div className="search__box">
        <input
          placeholder="Search.."
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="filter_alert_box">
        {name ? <p>You are viewing filtered results !</p> : ""}
      </div>
      <div className="card_itoms">
        {products
          .filter((data) => data.name.toLowerCase().includes(name))
          .map((item, index) => (
            <div key={index} className="card_data">
              <img src={avtarImg} alt='user-profile-img' />
              <h3>{item.name}</h3>
              <p>{item.occupation}</p>
              <h4>{item.age}</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Users;
