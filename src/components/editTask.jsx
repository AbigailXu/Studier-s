import React, { Fragment } from "react";
import Form from "./form";
import { apiTask } from "../api/index";
import Joi from "joi-browser";
import "../styles/forms.css";


class EditTask extends Form {
  state = {
    data: { title: "", genre: "", due: 0, priority: "" },
    errors: {},
  };

  schema = {
    title: Joi.string(),
    genre: Joi,
    due: Joi,
    priority: Joi.string(),
  };

  doSubmit = () => {
    const { title, genre, due, priority } = this.state.data;
    const {onReturn,id} = this.props;
    const curDate = new Date();
    const dueDate = (due===0 ? curDate.getTime() : due.getTime()) 
    const newTask = {
      title: title,
      genre: genre,
      time: ["1", "2"],
      due: dueDate,
      priority: priority,
      checked: false,
    };
    //console.log(dueDate);
    if(id) apiTask.updateTaskById(id,newTask);
    else apiTask.insertTask(newTask);
    onReturn("/tasks/main");
  };

  render() {
    const { allGenres } = this.props;

    const options = [];
    allGenres.map((genre) => {
      options.push({ value: genre.name, label: genre.name, topic: "genre" });
      return null;
    });
    options.push({ value: "", label:"-none-", topic: "genre" });

    const priorities = [
      { value: "1", label: "High (1)", topic: "priority" },
      { value: "2", label: "Mid (2)", topic: "priority" },
      { value: "3", label: "Low (3)", topic: "priority" },
    ];

    const {id} = this.props;
    const addOrEdit = id ? "Edit" : "Add"

    return (
      <Fragment>
        {/* {console.log(this.state.data)} */}
        <form onSubmit={this.handleSubmit} className="form-mov">
          <h1> {addOrEdit} Task</h1>
          {this.renderInput("title", "Title")}
          {this.renderDropdown("genre", "Genre", options)}
          {/* renderDropdown(name, lable, options) */}
          {/* {this.renderInput("due", "Due date")} */}
          {this.renderDatepicker("due", "Due date")}
          {this.renderDropdown("priority", "Priority", priorities)}
          {this.renderSubmitBtn(`${addOrEdit} Movie`)}
        </form>
      </Fragment>
      //renderInput(name, lable, placeholder, isAutoFocus=false, type="text")
      // renderSubmitBtn(lable)
    );
  }
}

export default EditTask;
