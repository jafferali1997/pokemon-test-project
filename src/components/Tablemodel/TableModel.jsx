import { Form, notification } from "antd";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import TextArea from "antd/lib/input/TextArea";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

import { updateDealerAndCityUpdate } from "../../app/features/dashboard/dashboard.slice";

function TableModel({ show, handleClose, modalData }) {
  //   const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const openNotificationWithIcon = (type, msg) => {
    notification[type]({
      message: msg,
    });
  };
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  const onFinish = (data) => {
    handleClose();
    dispatch(
      updateDealerAndCityUpdate({
        payload: { ...data, vinNumber: modalData.vinNumber },
        callBackMessage: openNotificationWithIcon,
      })
    );
  };

  return (
    <>
      <Button
        className="bg-transparent border-0 w-100 model-btn"
        variant="primary"
        // onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{`Add ${modalData?.rowName}`}</Modal.Title>
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
              name={modalData?.apiAttribute}
              label={modalData?.rowName}
            >
              <TextArea rows={4} defaultValue={modalData?.dealerName} />
            </Form.Item>

            <Button
              type="primary"
              className="login-btn w-75 text-center d-block m-auto color-layout"
              htmlType="submit"
            >
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

TableModel.defaultProps = {
  modalData: undefined,
};

TableModel.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  modalData: PropTypes.object,
};

export default TableModel;
