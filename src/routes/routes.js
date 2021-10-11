import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Todos from "../pages/Todos";
import NewTodo from "../pages/NewTodo";
import Timelime from "../pages/Timelime";

function Routes(props) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/todos" component={Todos} />
      <Route exact path="/todos/input" component={NewTodo} />
      <Route exact path="/todos/timeline" component={Timelime} />
    </Switch>
  );
}

export default Routes;
