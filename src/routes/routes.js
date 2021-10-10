import React from "react";
import { Route, Switch } from "react-router-dom";
import Todos from "../pages/Todos";
import NewTodo from "../pages/NewTodo";

function Routes(props) {
  return (
    <Switch>
      <Route exact path="/todos" component={Todos} />
      <Route exact path="/todos/input" component={NewTodo} />
    </Switch>
  );
}

export default Routes;
