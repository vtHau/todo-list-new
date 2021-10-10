import React, { useState } from "react";
import { Col, Popconfirm, Modal, Form, Input, Button, DatePicker } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import moment from "moment";
import { updateTodo, deleteTodo } from "./../actions/action";
import toast from "./../helpers/toast";

function TodoItem(props) {
  const dispatch = useDispatch();
  const { todo } = props;
  const [isPopVisible, setIsPopVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showPopconfirm = () => {
    setIsPopVisible(true);
  };

  const handlePopOk = () => {
    setConfirmLoading(true);
    dispatch(deleteTodo(todo.id));
    setConfirmLoading(false);
    setIsPopVisible(false);
    toast.success("Thành công", "Xóa công việc thành công");
  };

  const handlePopCancel = () => {
    setIsPopVisible(false);
  };

  const onFinish = (values) => {
    const data = {
      ...todo,
      name: values.name,
      time: moment(values.time).format("DD/MM/YYYY").toString(),
    };

    dispatch(updateTodo(data));
    setIsModalVisible(false);
    toast.success("Thành công", "Cập nhập công việc thành công");
  };

  const onFinishTodo = () => {
    const data = {
      ...todo,
      complete: true,
    };

    dispatch(updateTodo(data));
    setIsModalVisible(false);
    toast.success("Thành công", "Đã hoàn thành công việc");
  };

  return (
    <Col xs={2} sm={4} md={6} lg={6} xl={6}>
      <div className="todo-item">
        <div className="item-star">
          <div className="item-status">
            {todo.complete ? (
              <CheckCircleOutlined
                style={{ fontSize: "40px", color: "#4BB543" }}
              />
            ) : (
              <CloseCircleOutlined
                style={{ fontSize: "40px", color: "#FC100D" }}
              />
            )}
          </div>
        </div>
        <div className="item-body">
          <h3 className="todo-name">{todo.name}</h3>
          <p className="todo-time">{todo.time}</p>
          <p className="todo-status">
            {todo.complete ? "Đã hoàn thành" : "Chưa hoàn thành"}
          </p>
        </div>
        <div className="item-end">
          {!todo.complete && (
            <div className="item-icon" onClick={onFinishTodo}>
              <FileDoneOutlined
                style={{ fontSize: "18px", color: "#2577fd" }}
              />
            </div>
          )}
          <div className="item-icon" onClick={showModal}>
            <EditOutlined style={{ fontSize: "18px", color: "#08c" }} />
          </div>
          <div className="item-icon">
            <Popconfirm
              title="Bạn có thật sự muốn xóa ?"
              visible={isPopVisible}
              onConfirm={handlePopOk}
              okButtonProps={{ loading: confirmLoading }}
              onCancel={handlePopCancel}
              okText="Có chứ"
              cancelText="Không nha"
            >
              <DeleteOutlined
                style={{ fontSize: "18px", color: "#FC100D" }}
                onClick={showPopconfirm}
              />
            </Popconfirm>
          </div>
        </div>
      </div>
      <Modal
        title="Chỉnh sửa công việc"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          labelCol={{
            span: 12,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            name: todo.name,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên công viêc!",
              },
            ]}
          >
            <Input placeholder="Tên công việc" />
          </Form.Item>

          <Form.Item
            name="time"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn thời gian !",
              },
            ]}
          >
            <DatePicker placeholder="Thời gian hết hạn" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Cập nhập
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Col>
  );
}

export default TodoItem;
