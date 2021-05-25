import React, { Component } from "react";
import { Link } from "react-router-dom";
import Check from "./check.jsx";

import "../styles/tasksTable.css";

class TasksDisplay extends Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <h5 style={{ margin: "1em 0em" }}>
            Showing {this.countDisplay()} tasks
          </h5>
          {this.props.count === 0 ? "" : this.rowsDisplay()}
        </main>
      </React.Fragment>
    );
  }

  countDisplay() {
    var { count } = this.props;
    return count === 0 ? "no" : count;
  }

  rowsDisplay() {
    const { data, onSort, currentSort } = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th onClick={() => onSort("title")} className="titleCol">
                Title <span>&nbsp;</span>{" "}
                {this.getSortArrow("title", currentSort)}
              </th>
              <th onClick={() => onSort("genre")} className="genreCol">
                Genre <span>&nbsp;</span>{" "}
                {this.getSortArrow("genre", currentSort)}
              </th>
              <th onClick={() => onSort("due")} className="dueCol">
                Due <span>&nbsp;</span> {this.getSortArrow("due", currentSort)}
              </th>
              <th onClick={() => onSort("priority")} className="priorityCol">
                Priority <span>&nbsp;</span>{" "}
                {this.getSortArrow("priority", currentSort)}
              </th>
              <th className="deleteCol"></th>
              <th className="checkCol"></th>
            </tr>
          </thead>
          <tbody>{data.map((task) => this.getRow(task))}</tbody>
        </table>
      </div>
    );
  }

  getRow(task) {
    return (
      <tr key={task._id}>
        <th className="taskTableInfo" scope="row">
          <Link to={`/tasks/edit/${task._id}`} className="taskTitle">
            {task.title}
          </Link>
        </th>
        <td className="taskTableInfo">{task.genre}</td>
        <td className="taskTableInfo">{this.dateFormater(task.due)}</td>
        <td className="taskTableInfo">{task.priority}</td>
        <td className="taskTableInfo">
          <Check
            checked={task.checked}
            onClick={this.props.onCheck}
            task={task}
          />
        </td>
        <td className="taskTableInfo">
          <button
            onClick={() => this.props.onDelete(task._id)}
            className="btn btn-outline-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }

  dateFormater(date) {
    const realDate = new Date(date);
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return(`${months[realDate.getMonth()]} ${realDate.getDate()}`)
  }

  getSortArrow(thisCol, currentSort) {
    return thisCol === currentSort.sortedField ? (
      currentSort.direction === 1 ? (
        <i className="fa fa-sort-up"></i>
      ) : (
        <i className="fa fa-sort-down"></i>
      )
    ) : (
      <i className="fa fa-sort"></i>
    );
  }
}

export default TasksDisplay;
