import React from "react";
import { Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./../components/TodoItem";

function Todos(props) {
  const todos = useSelector((state) => state.todoReducer.todos);
  return (
    <>
      <Row>
        <h2>All todo list</h2>
      </Row>
      <Row>
        <Col span={24}>
          <Row>
            {todos.map((todo) => (
              <TodoItem todo={todo} key={todo.id} />
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Todos;
