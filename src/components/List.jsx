import React from "react";
import Card from "./Card";

const List = ({ notes, onDelete, onArchive }) => {
  if (notes.length === 0) {
    return <h1 className="text-center py-10">Catatan tidak ada / Tidak ditemukan</h1>;
  } else {
    return (
      <div className=" md:grid-cols-2 lg:grid-cols-3  grid gap-10">
        {notes.map((note) => (
          <Card key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} archive={note.archived} {...note} />
        ))}
      </div>
    );
  }
};

export default List;
