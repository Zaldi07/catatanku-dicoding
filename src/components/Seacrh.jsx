import React from "react";

const Seacrh = ({ onSeacrh }) => {
  return (
    <div>
      <input type="text" className="text-xl px-3 w-full border-2 rounded-md" placeholder="Cari catatanmu" onChange={(e) => onSeacrh(e.target.value)} />
    </div>
  );
};

export default Seacrh;
