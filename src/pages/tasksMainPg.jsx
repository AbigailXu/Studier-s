import React, { Component } from "react";
import EditTask from "../components/editTask";
import { apiTask, apiGenre } from "../api/index.js";

import "../styles/tasks.css";
import DisplayTasks from "../components/tasksPage";

class Products extends Component {
  state = {
    count: 0,
    data: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    currentGenre: {},
    currentSearch: "",
    currentSort: { sortedField: null, direction: 1 }, // 1=ascending, -1=decending
    isLoading: false,
    reloadHelper: 0,
  };

  componentDidMount = () => {
    this.syncTasks();
    this.syncGenre();
  };

  syncTasks = async () => {
    this.setState({ isLoading: true });

    await apiTask.getAllTasks().then((tasks) => {
      this.setState({
        data: [...tasks.data.data],
        isLoading: false,
      });
    });
  };

  syncGenre = async () => {
    this.setState({ isLoading: true });

    await apiGenre.getAllGenres().then((genres) => {
      this.setState({
        genres: [...genres.data.data],
        isLoading: false,
      });
    });
  };

  render() {
    const {
      data,
      genres,
      pageSize,
      currentPage,
      currentGenre,
      currentSort,
      currentSearch,
    } = this.state;
    const { sortedField, direction } = this.state.currentSort;

    // parameters
    const { id } = this.props.match.params;
    const { status } = this.props;

    // genre
    let curGenreTasks = data;

    if (currentGenre) {
      if (Object.keys(currentGenre).length !== 0) {
        curGenreTasks = curGenreTasks.filter((m) => {
          return m.genre === currentGenre.name;
        });
      }
    }

    // sort
    if (sortedField !== null) {
      curGenreTasks.sort((m1, m2) => {
        let m1Content = m1[sortedField];
        let m2Content = m2[sortedField];

        if (m1Content > m2Content) {
          return direction;
        } else if (m1Content < m2Content) {
          return -direction;
        } else {
          return 0;
        }
      });
    }

    // search
    curGenreTasks = curGenreTasks.filter((m) =>
      m.title.toLowerCase().includes(currentSearch.toLowerCase())
    );

    // page
    const curLastIdx = currentPage * pageSize;
    const curFirstIdx = curLastIdx - pageSize;
    const curPageTasks = curGenreTasks.slice(curFirstIdx, curLastIdx);

    if (status === "main") {
      return (
        <DisplayTasks
          allGenre={genres}
          handleAddTask={this.handleAddTask}
          handleAddGenre={this.handleAddGenre}
          handleDeleteGenre={this.handleDeleteGenre}
          onGenre={this.handleGenreChange}
          onSearch={this.handleSearch}
          onDelete={this.handleDeleteTask}
          onCheck={this.handleCheck}
          onPageChange={this.handlePageChange}
          onSort={this.handleSort}
          data={curPageTasks}
          count={curGenreTasks.length}
          pageSize={pageSize}
          currentPage={currentPage}
          currentSort={currentSort}
          currentGenre={currentGenre}
        />
      );
    } else if (status === "edit") {
      return (
        <div>
          <EditTask
            id={id}
            allGenres={this.state.genres}
            onReturn={this.handleReturn}
          />
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  handleReturn = (path) => {
    this.props.history.push(path);
    window.location.reload();
  };

  handleDeleteTask = (id) => {
    apiTask.deleteTaskById(id);
    window.location.reload();
    this.syncTasks();
    this.syncGenre();
  };

  handleDeleteGenre = (genre) => {
    let curGenreTasks = this.state.data.filter((t) => {
      return t.genre === genre.name;
    });
    curGenreTasks.map((t) => apiTask.deleteTaskById(t._id));
    apiGenre.deleteGenreById(genre._id);
    this.setState({currentGenre:""});
    this.syncTasks();
    this.syncGenre();
    window.location.reload();
  };

  handleCheck = (task) => {
    const tasks = [...this.state.data];
    const idx = tasks.indexOf(task);
    tasks[idx].checked = !tasks[idx].checked;
    this.setState({ tasks });
    const { _id } = task;
    apiTask.updateTaskById(_id, task);
  };

  handlePageChange = (pageNum) => {
    this.setState({ currentPage: pageNum });
  };

  handleGenreChange = (genre) => {
    this.setState({ currentGenre: genre });
    this.setState({ currentPage: 1 });
  };

  handleSort = (path) => {
    const { sortedField, direction } = this.state.currentSort;
    var newDirection;
    path === sortedField ? (newDirection = -direction) : (newDirection = 1);
    this.setState({
      currentSort: { sortedField: path, direction: newDirection },
    });
  };

  handleAddTask = () => {
    this.props.history.push("/tasks/edit");
  };

  handleAddGenre = (name) => {
    const newGenre = { name: name };
    apiGenre.insertGenre(newGenre);
    window.location.reload();
  };

  handleSearch = (input) => {
    this.setState({ currentSearch: input });
    this.setState({ currentGenre: "" });
  };
}

export default Products;
