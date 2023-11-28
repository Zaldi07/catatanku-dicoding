import React from "react";
import Seacrh from "./Seacrh";

const Header = ({ onSeacrh }) => {
  return (
    <div className="flex justify-between  bg-blue-400 p-4 rounded-md ">
      <div className="text-xl font-semibold">CatatanKu</div>
      <Seacrh onSeacrh={onSeacrh} />
    </div>
  );
};

export default Header;
