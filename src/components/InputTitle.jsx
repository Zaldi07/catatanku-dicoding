import React from "react";

const InputTitle = ({ valueTitle, onChangeTitleHandler }) => {
  return <input required className="border-2  border-blue-400 p-3 rounded-md" placeholder="Judul Catatan" type="text" value={valueTitle} onChange={onChangeTitleHandler} />;
};

export default InputTitle;
