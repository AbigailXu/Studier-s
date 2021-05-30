// Tools
import "./App.css";
import React, { Component, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Pages
import Home from "./pages/home"
import Tasks from "./pages/tasksMainPg.jsx";
import Cites from "./pages/cites";
import NotFound from "./pages/notFound";
import Music from "./pages/music";
import Login from './pages/login';
import Register from './pages/register';

// Common components
import NavBar from "./components/navbar.jsx";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <div className="">
          <Switch>
            {/* <Route path="/movies/:id" component={MovieDetail}/> */}
            {/* <Redirect from="/home" to="/movies" /> */}
            <Route path="/home" component={Home} />

            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            {/* <Route path="/editTask/:id?" component={AddMovie} /> */}
            <Route path="/tasks/main" 
                   render={(props) => <Tasks status="main" {... props}/>} />
            <Route path="/tasks/edit/:id?" 
                   render={(props) => <Tasks status="edit"  {... props}/>} />
            <Redirect from="/tasks" to="/tasks/main" component={Tasks} />

            <Route path="/cites" component={Cites} />
            <Route path="/music" component={Music} />
            <Route path="/notFound" component={NotFound} />

            <Redirect exact from="/" to="/home" />
            <Redirect from="/" to="/notFound" />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default App;
