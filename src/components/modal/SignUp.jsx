import { useState, useEffect } from "react";
import { Form, Input, Button, notification, Select } from "antd";

import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../app/features/signup/signup.slice";

function SignUp() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const signup = useSelector((state) => state.signup);
  const openNotificationWithIcon = (type, msg) => {
    notification[type]({
      message: msg,
    });
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { Option } = Select;
  const onFinish = (data) => {
    dispatch(
      signUp({ payload: data, callBackMessage: openNotificationWithIcon })
    );
  };
  // const handleChange = (value) => {
  //   console.log(`selected ${value}`);
  // };

  useEffect(() => {
    if (signup && signup.isHide) {
      handleClose();
    }
  }, [signup]);

  return (
    <>
      <Button
        className="d-flex color-layout rounded-1 border text-white fw-700 color-layout"
        variant="primary"
        onClick={handleShow}
      >
        Create User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            name="basic"
            wrapperCol={{
              span: 24,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              // className="d-block"
              name="firstName"
              label="First Name"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                size="large"
                className="input-transperant"
                placeholder="First Name"
              />
            </Form.Item>

            <Form.Item
              // className="d-block"
              name="lastName"
              label="Last Name"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                size="large"
                className="input-transperant"
                placeholder="Last Name"
              />
            </Form.Item>
            <Form.Item
              // className="d-block"
              name="roleId"
              label="role Id"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="Select Role">
                <Option value="4">Vendor</Option>
                <Option value="5">Buyer</Option>
              </Select>
            </Form.Item>

            <Form.Item
              // className="d-block"
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input
                size="large"
                className="input-transperant"
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              // className="d-block"
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Password"
                className="input-transperant"
              />
            </Form.Item>

            <Button
              type="primary"
              className="login-btn w-100 color-layout"
              htmlType="submit"
            >
              Create User
            </Button>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default SignUp;
