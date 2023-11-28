import React from "react";
import ButtonDelete from "./ButtonDelete";
import ButtonArchive from "./ButtonArchive";

const ButtonCard = ({ id, onDelete, onArchive, archived }) => {
  return (
    <div className="flex justify-between gap-4">
      <ButtonDelete id={id} onDelete={onDelete} />
      <ButtonArchive id={id} onArchive={onArchive} archived={archived} />
    </div>
  );
};

export default ButtonCard;
