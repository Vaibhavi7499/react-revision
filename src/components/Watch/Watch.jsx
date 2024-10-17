import React, { useState } from "react";
import "./Watch.scss";

const Watch = () => {
  let [dateObj, setDateObj] = useState({
    hour: "",
    minute: "",
    second: "",
    ampm: "",
  });

  let displayTime = () => {
    let hrs, mins, sec, ampm;

    let date = new Date();
    ampm = date.getHours > 12 ? "am" : "pm";
    hrs = date.getHours() % 12;
    hrs = hrs < 10 ? `0${hrs}` : hrs;
    mins = date.getMinutes();
    mins = mins < 10 ? `0${mins}` : mins;
    sec = date.getSeconds();
    sec = sec < 10 ? `0${sec}` : sec;

    setDateObj({
      hour: hrs,
      minute: mins,
      second: sec,
      ampm,
    });
  };

  setInterval(() => {
    displayTime();
  }, 1000);

  return (
    <div className="watch-container col-4 m-auto mt-5">
      <div>
        <h1>Digital Watch</h1>
        <div className="head-container">
          <h2>{dateObj?.hour} : </h2>
          <h2>{dateObj?.minute} : </h2>
          <h2>{dateObj?.second} </h2>
          <h2>{dateObj?.ampm}</h2>
        </div>
      </div>
    </div>
  );
};

export default Watch;
