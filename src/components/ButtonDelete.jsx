import React from "react";

export default function ButtonDelete({ id, onDelete }) {
  return (
    <button className="w-full border-2 border-blue-400 py-1 rounded-md" onClick={() => onDelete(id)}>
      Hapus
    </button>
  );
}
