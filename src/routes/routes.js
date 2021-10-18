import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import TodoList from "../pages/TodoList";
import TodoForm from "../pages/TodoForm";
import Timelime from "../pages/Timelime";
import Profile from "../pages/Profile";

function Routes(props) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/todos" component={TodoList} />
      <Route exact path="/todos/input" component={TodoForm} />
      <Route exact path="/todos/timeline" component={Timelime} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  );
}

export default Routes;
