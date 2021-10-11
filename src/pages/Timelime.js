import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useSelector } from "react-redux";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as WorkIcon } from "./../work.svg";

function Timelime(props) {
  const todos = useSelector((state) => state.todoReducer.todos);

  return (
    <div style={{}}>
      <VerticalTimeline>
        {todos.map((todo) => (
          <VerticalTimelineElement
            key={todo.id}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#f1f9fe", color: "#2577fd" }}
            contentArrowStyle={{ borderRight: "7px solid  #f1f9fe" }}
            date={todo.time}
            iconStyle={{ background: "#f1f9fe", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">{todo.name}</h3>
            <h4 className="vertical-timeline-element-subtitle">{todo.time}</h4>
            {todo.complete ? (
              <p className="vertical-timeline-element-desc success">
                Đã hoàn thành
              </p>
            ) : (
              <p className="vertical-timeline-element-desc">
                Chưa hoàn hoàn thành
              </p>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Timelime;
