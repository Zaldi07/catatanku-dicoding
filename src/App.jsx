import React, { Component, Fragment } from "react";
import "./App.css";
import { getInitialData } from "./utils/data";
import Header from "./components/Header";
import Body from "./components/Body";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      notesBackup: getInitialData(),
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onDeleteHandler(id) {
    console.log(id);
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
    console.log("berhasil delete");
  }
  onArchiveHandler(id) {
    console.log(id);
    const notes = this.state.notes.find((note) => note.id === id);
    notes.archived = !notes.archived;
    this.setState((prev) => {
      return {
        notes: [...prev.notes],
      };
    });
  }

  onSearchHandler(title) {
    console.log(title);
    this.setState((prev) => {
      return {
        ...prev,
        notes: this.state.notesBackup,
      };
    });
    this.setState((prev) => {
      return {
        ...prev,
        notes: prev.notes.filter((note) => note.title.toLowerCase().includes(title.toLowerCase())),
      };
    });
  }

  onSubmitHandler({ title, body }) {
    this.setState((prev) => {
      return {
        notes: [
          ...prev.notes,
          {
            id: Math.floor(Math.random() * 100),
            title,
            body,
            createdAt: Date.now(),
            archived: false,
          },
        ],
      };
    });
  }
  render() {
    return (
      <Fragment>
        <Header onSeacrh={this.onSearchHandler} />
        <Body addNote={this.onSubmitHandler} onDelete={this.onDeleteHandler} notes={this.state.notes} onArchive={this.onArchiveHandler} />
      </Fragment>
    );
  }
}
