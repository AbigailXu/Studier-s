import React, {Component} from "react";
import SearchBar from "./searchBar";
import Genre from "./genre";
import Pagination from "./pagination";
import TasksDisplay from "./tasksLayout";
import GenreForm from "./addGenre";

import "../styles/tasks.css";

class DisplayTasks extends Component {
  state = {  }

  render() { 
    //console.log(this.props.onSearch)
    const { handleAddTask, handleAddGenre, ...rest } = this.props;
    return (
      <table className="layoutTable">
        <thead>
          <tr>
            <th className="genreCol">
  
              

              {/* Display genre */}
              <Genre handleAddTask={handleAddTask}  onAddTask={handleAddTask} {...rest} />

              {/* Add genre */}
              <GenreForm onAddGenre={handleAddGenre}/>

            </th>
            <th className="tasksCol">
              <SearchBar handleSearch={this.props.onSearch} placeholder="search tasks by title" />
              <TasksDisplay {...rest} />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=""></td>
            <td className="">
              <Pagination {...rest} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
 
export default DisplayTasks;
