import React from "react";
import FormInput from "./FormInput";
import List from "./List";

const Body = ({ addNote, notes, onDelete, onArchive }) => {
  return (
    <div className="py-5">
      <FormInput addNote={addNote} />
      <h1 className="py-6 text-xl font-semibold">NOTES</h1>
      <List notes={notes.filter((note) => note.archived === false)} onDelete={onDelete} onArchive={onArchive} archive={notes.archived} />
      <h1 className="py-6 text-xl font-semibold">ARSIP CATATAN</h1>
      <List notes={notes.filter((note) => note.archived === true)} onDelete={onDelete} onArchive={onArchive} archive={notes.archived} />
    </div>
  );
};

export default Body;
