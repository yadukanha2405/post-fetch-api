import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((err) => err);
  }, []);

  return (
    <div className="App">
      <h1>User details with the use of post requests using fetch API</h1>

      {data.map((item) => (
        <div className="box">
          <p>Name:{item.name}</p>
          <p>Email:{item.email} </p>
          <p>Phone-No: {item.phone}</p>
          <p>Website: {item.website} </p>
          <p>Company: {item.company.name} </p>
        </div>
      ))}
    </div>
  );
}
