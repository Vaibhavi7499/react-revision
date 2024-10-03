import React, { useEffect, useState } from "react";
import "./HookuseEffect.scss"

const HookuseEffect = () => {
  let [user, setUser] = useState([]);

  async function getUserAPI() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const user = await res.json();
    setUser(user);
  }

  useEffect(() => {
    getUserAPI();
  }, []);

  return (
    <div className="effect-container">
      {user?.map((e) => (
        <div className="card" style={{ width: "18rem" }}>
          <div key={e?.id} className="card-body">
            <h5 className="card-title">{e?.id}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{e?.name}</h6>
            <p className="card-text">{e?.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HookuseEffect;
