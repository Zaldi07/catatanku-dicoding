import React from "react";

const CardBody = ({ title, body, createdAt }) => {
  const date = new Date(createdAt);
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-lg font-semibold">{title}</h1>
      <p>{date.toLocaleString()}</p>
      <p className="text-sm">{body}</p>
    </div>
  );
};

export default CardBody;
