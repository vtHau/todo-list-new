import React from "react";
import { Row, Col } from "antd";
import { Form, Input, Button, DatePicker } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};

function NewTodo(props) {
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
              <DatePicker placeholder="Thời gian hết hạn" />
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
