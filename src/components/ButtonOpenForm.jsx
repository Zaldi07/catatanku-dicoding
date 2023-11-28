import React from "react";

export default function ButtonOpenForm({ isOpenHandler, isOpen }) {
  return (
    <button
      onClick={() => isOpenHandler()}
      className=" w-full border-2 group duration-500 border-blue-400 py-2 rounded-md hover:bg-blue-400 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 "
    >
      <h1 className="text-lg  duration-500 font-semibold text-blue-400 group-hover:text-white">{isOpen === true ? "Tutup Form" : "Buka Form"}</h1>
    </button>
  );
}
