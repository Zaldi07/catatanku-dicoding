import React, { Component } from "react";
import FormBody from "./FormBody";
import ButtonOpenForm from "./ButtonOpenForm";

export default class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      max: 50,
      remainingChar: 50,
      isOpen: true,
    };

    this.onChangeBodyHandler = this.onChangeBodyHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeTitleHandler = this.onChangeTitleHandler.bind(this);
    this.isOpenHandler = this.isOpenHandler.bind(this);
  }

  isOpenHandler = () => {
    this.setState((prev) => {
      return {
        ...prev,
        isOpen: !prev.isOpen,
      };
    });
  };

  onChangeTitleHandler = (e) => {
    this.setState((previousState) => {
      while (e.target.value.length <= this.state.max) {
        return {
          ...previousState,
          title: e.target.value,
          remainingChar: this.state.max - e.target.value.length,
        };
      }
    });
  };
  onChangeBodyHandler = (e) => {
    this.setState((prev) => {
      return {
        ...prev,
        body: e.target.value,
      };
    });
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.addNote(this.state);

    this.setState(() => {
      return {
        title: "",
        body: "",
        max: 50,
        remainingChar: 50,
      };
    });
  };

  render() {
    return (
      <div>
        <form className={`${this.state.isOpen === true ? "flex" : "hidden"}  flex-col gap-8 pb-5`} onSubmit={this.onSubmitHandler}>
          <div className="flex justify-between pt-4">
            <h1 className="text-xl text-center">Buat catatan</h1>
            <h1 className="text-end text-xl">Sisa Karakter : {this.state.remainingChar}</h1>
          </div>
          <FormBody valueTitle={this.state.title} onChangeTitleHandler={this.onChangeTitleHandler} valueNote={this.state.body} onChangeBodyHandler={this.onChangeBodyHandler} />
        </form>
        <ButtonOpenForm isOpen={this.state.isOpen} isOpenHandler={this.isOpenHandler} />
      </div>
    );
  }
}
