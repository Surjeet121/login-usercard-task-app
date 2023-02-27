import React, { useEffect, useState } from "react";
import "./userTableStyle.css";

const Users = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");

  const fetchData = () => {
    fetch("https://coralmango.com/api/react-test")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="user_data_container">
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
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter((data) => data.name.toLowerCase().includes(name))
            .map((item, i) => (
              <tr key={i}>
                <td>{++i}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.occupation}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
