import { createContext } from "react";

export const RoomContext = createContext();

const RoomContainer = ({ children }) => {
  let obj = [
    {
    rNumber: 101,
    rPrice: 5000,
    rStatus: "booked",
  },
  {
    rNumber: 102,
    rPrice: 6000,
    rStatus: "available",
  },
  {
    rNumber: 103,
    rPrice: 7000,
    rStatus: "booked",
  },
  {
    rNumber: 104,
    rPrice: 8000,
    rStatus: "available",
  },
  {
    rNumber: 105,
    rPrice: 9000,
    rStatus: "booked",
  },
];

  return <RoomContext.Provider value={obj}>{children}</RoomContext.Provider>;
};

export default RoomContainer;
