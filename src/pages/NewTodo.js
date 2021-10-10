import React from "react";
import { Row, Col, Form, Input, Button, DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { addTodo } from "./../actions/action";
import toast from "./../helpers/toast";

function NewTodo(props) {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const data = {
      id: uuidv4(),
      name: values.name,
      time: moment(values.time).format("DD/MM/YYYY").toString(),
      complete: false,
    };
    
    dispatch(addTodo(data));
    toast.success("Thành công", "Thêm công việc thành công");
  };

  return (
    <>
      <Row>
        <h2>New todo</h2>
      </Row>
      <Row>
        <Col span={12}>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{}}
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
              <DatePicker placeholder="Thời gian hết hạn" format="DD/MM/YYYY" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Thêm công việc
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default NewTodo;
