import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/common.css";
import { Fragment } from "react";

class Genre extends Component {
  state = { showDeleGenre: false };

  render() {
    const { currentGenre, allGenre, onGenre, onAddTask, handleDeleteGenre } =
      this.props;
    const { showDeleGenre } = this.state;
    return (
      <Fragment>
        <div
          className="btn-group top-btn-group"
          role="group"
          aria-label="Basic example"
        >
          <button
            onClick={() => {
              this.setState({ showDeleGenre: !showDeleGenre });
            }}
            className="btn btn-outline-secondary edit-genre-btn"
          >
            <FontAwesomeIcon icon={["fas", "folder-minus"]} />
          </button>
          <button
            className="btn btn-outline-secondary add-task-btn"
            onClick={onAddTask}
          >
            <i className="fa fa-plus addTaskBtn"></i> Task
          </button>
        </div>

        <div className="list-group" id="list-tab" role="tablist">
          {/* Top buttons */}
          <button
            key={0}
            className={
              "list-group-item list-group-item-action " +
              (!currentGenre
                ? "active_genre"
                : Object.keys(currentGenre).length === 0
                ? " active_genre"
                : "")
            }
            data-toggle="list"
            href="#list-home"
            role="tab"
            aria-controls="home"
            onClick={() => onGenre()}
          >
            All Genre
          </button>

          {/* Display genres */}
          {allGenre.map((genre) => {
            return (
              <Fragment key={genre._id}>
                <button
                  className={
                    "list-group-item list-group-item-action" +
                    (genre === currentGenre ? " active_genre" : "")
                  }
                  data-toggle="list"
                  href="#list-home"
                  role="tab"
                  aria-controls="home"
                  onClick={() => onGenre(genre)}
                >
                  <div className="row g-0 genreGroup">
                    <div className="col-sm-6 col-md-11">{genre.name}</div>
                    {showDeleGenre ? (
                      <div
                        onClick={()=>handleDeleteGenre(genre)}
                        className="col-6 col-md-1 deleBtn"
                      >
                        <FontAwesomeIcon icon={["far", "trash-alt"]} />
                      </div>
                    ) : null}
                  </div>
                </button>
              </Fragment>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default Genre;
