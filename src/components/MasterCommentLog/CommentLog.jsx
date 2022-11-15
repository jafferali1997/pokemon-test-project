import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import IMAGES from "../../assets/images";

function CommentLog() {
  return (
    <Card className="mt-2">
      <Card.Header className="bg-white font-weight ">
        <strong>Master Comment Log</strong>
      </Card.Header>
      <Card.Body className="pt-0 pb-0">
        <Row>
          <Col className="border-right ">
            <Row>
              <div className="d-flex my-2">
                <Col className="mt-1">
                  <h4>Comment</h4>
                </Col>
                <Col className=" d-flex  justify-content-end  text-end mt-1">
                  <div
                    style={{ borderRadius: "28%" }}
                    className="align-items-center d-flex h-75 h-auto me-2 p-2 pin"
                  >
                    <img
                      className="p-1"
                      src={IMAGES.PIN}
                      alt="PIN-IAMGE"
                      style={{ width: "18px" }}
                    />
                  </div>
                  <p className="text-dark mb-0 ">Attachment</p>
                </Col>
              </div>

              <div>
                <FloatingLabel controlId="floatingTextarea2">
                  <Form.Control
                    as="textarea"
                    placeholder="]"
                    style={{ height: "161px" }}
                  />
                </FloatingLabel>
              </div>
              <div className="d-flex mt-2 justify-content-end mb-2">
                <Button
                  variant="primary"
                  className="me-2 color-layout border-0 px-4"
                >
                  Send
                </Button>{" "}
                <Button
                  variant="light"
                  className="border-0 px-4"
                  style={{
                    backgroundColor: "#F4F3F3",
                  }}
                >
                  {" "}
                  Cancel
                </Button>{" "}
              </div>
            </Row>
          </Col>
          <Col>
            <Row className="pt-2" style={{ fontSize: "smaller" }}>
              <Col className="align-items-center d-flex justify-content-center p-0">
                <div className="h-auto">
                  <img
                    src={IMAGES.USERS}
                    alt="user-img"
                    style={{
                      borderRadius: "50%",
                      height: "76px",
                    }}
                  />
                </div>
              </Col>
              <Col className="p-0">
                <div className="d-flex">
                  <p className="mb-0">R/14</p>

                  <p className=" ms-1">4/27/2022 1:11 PM</p>
                </div>

                <p className="mb-0 m-0">
                  simply dummy text of the printing and typesetting industry.
                </p>
              </Col>
            </Row>
            <hr className="p-0" />
            <Row style={{ fontSize: "smaller" }}>
              <Col className="align-items-center d-flex justify-content-center p-0">
                <div className="h-auto">
                  <img
                    src={IMAGES.USERS}
                    alt="user-img"
                    style={{
                      borderRadius: "50%",
                      height: "76px",
                    }}
                  />
                </div>
              </Col>
              <Col className="p-0">
                <div className="d-flex">
                  <p className="mb-0">R/14</p>

                  <p className=" ms-1">4/27/2022 1:11 PM</p>
                </div>

                <p className="mb-0 m-0">
                  simply dummy text of the printing and typesetting industry.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CommentLog;
