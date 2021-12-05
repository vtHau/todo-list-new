import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import TodoList from "../pages/TodoList";
import TodoForm from "../pages/TodoForm";
import Timelime from "../pages/Timelime";
import Team from "../pages/Team";
import Profile from "../pages/Profile";
import Product from "../pages/Product";
import Cart from "../pages/Cart";

function Routes(props) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/product" component={Product} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/todos" component={TodoList} />
      <Route exact path="/todos/input" component={TodoForm} />
      <Route exact path="/todos/timeline" component={Timelime} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/team" component={Team} />
    </Switch>
  );
}

export default Routes;
