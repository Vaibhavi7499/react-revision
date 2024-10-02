import React, { useContext } from "react";
import "./RoomDetails.scss";
import { RoomContext } from "./contexts/RoomContext";

const RoomDetails = () => {
  let roomDetails = useContext(RoomContext);

  return (
    <div className="main-container">
      <h2>Room Details</h2>
      <hr />
      {roomDetails.map((e) => (
        <div key={e?.rNumber}>
          <div className="rnumber">
            <h4>Room Number :</h4>
            <p>{e?.rNumber}</p>
          </div>
          <div className="rprice">
            <h4>Price : </h4>
            <p>{e?.rPrice}</p>
          </div>
          <div className="rstatus">
            <h4>Status : </h4>
            <p>{e?.rStatus}</p>
          </div>
        <hr/>
        </div>
      ))}
    </div>
  );
};

export default RoomDetails;
