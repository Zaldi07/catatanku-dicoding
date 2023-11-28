import React from "react";

export default function ButtonArchive({ id, onArchive, archived }) {
  return (
    <button className="w-full border-2 border-blue-400  rounded-md" onClick={() => onArchive(id)}>
      {archived ? "Pindahkan" : "Arsipkan"}
    </button>
  );
}
