import React from "react";
import { Row, Col } from "antd";
import TodoItem from "./../components/TodoItem";

function Todos(props) {
  return (
    <>
      <Row>
        <h2>All todo list</h2>
      </Row>
      <Row>
        <Col span={24}>
          <Row>
            <TodoItem />
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Todos;
