import React from "react";
import InputTitle from "./InputTitle";
import InputNote from "./InputNote";
const FormBody = ({ isOpen, valueTitle, valueNote, onChangeBodyHandler, onChangeTitleHandler, isOpenHandler }) => {
  return (
    <>
      <InputTitle valueTitle={valueTitle} onChangeTitleHandler={onChangeTitleHandler} />
      <InputNote valueNote={valueNote} onChangeBodyHandler={onChangeBodyHandler} />

      <button
        className=" border-2 group duration-500 border-blue-400 py-2 rounded-md hover:bg-blue-400 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 "
        type="submit"
      >
        <h1 className="text-lg  duration-500 font-semibold text-blue-400 group-hover:text-white">Submit</h1>
      </button>
    </>
  );
};

export default FormBody;
