import React from "react";

const InputNote = ({ valueNote, onChangeBodyHandler }) => {
  return (
    <textarea
      className="border-2 border-blue-400 p-3 rounded-md"
      placeholder="Tuliskan Catatan disini!"
      value={valueNote}
      onChange={onChangeBodyHandler}
      cols="30"
      rows="5"
    ></textarea>
  );
};

export default InputNote;
