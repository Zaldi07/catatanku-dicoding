import React from "react";
import CardBody from "./CardBody";
import ButtonCard from "./ButtonCard";

const Card = ({ id, title, body, createdAt, onDelete, onArchive, archived }) => {
  return (
    <div className=" border-2  rounded-md hover:bg-blue-50 border-blue-400 p-2 h-[300px]  flex  flex-col justify-between">
      <CardBody title={title} body={body} createdAt={createdAt} />
      <ButtonCard id={id} onDelete={onDelete} onArchive={onArchive} archived={archived} />
    </div>
  );
};

export default Card;
