import { Row, Col, Card } from "react-bootstrap";
import PropTypes from "prop-types";

export default function AlbumInForm({ imageList }) {
  return (
    <Card>
      <Card.Header className="bg-white pb-1 mb-0 ">
        <Row>
          <Col lg={8} className="d-flex justify-content-start">
            <p className="text-dark mb-0 font-weight">
              {" "}
              <strong>Master Photo Album</strong>
            </p>
          </Col>
        </Row>
      </Card.Header>

      <Card.Body>
        <Card.Text>
          <Row>
            <Col lg={5}>
              <img
                className="w-100 main-album-img"
                src={`https://redhandedstorage.blob.core.windows.net/assets${imageList?.[0]?.imageURL}`}
                alt="CAR-IAMGE"
              />
            </Col>

            <Col>
              <Row className="mb-1">
                {imageList?.map(
                  (item, index) =>
                    index !== 0 &&
                    index < 4 && (
                      <Col
                        md={4}
                        className="px-1 px-md-2 p-md-3 p-lg-0 album-img"
                      >
                        <img
                          style={{ height: "70px" }}
                          className="w-100"
                          src={`https://redhandedstorage.blob.core.windows.net/assets${item?.imageURL}`}
                          alt="CAR-IAMGE"
                        />
                      </Col>
                    )
                )}
              </Row>
              <Row className="mb-1">
                {imageList?.map(
                  (item, index) =>
                    index > 3 &&
                    index < 7 && (
                      <Col
                        md={4}
                        className="px-1 px-md-2 p-md-3 p-lg-0 album-img"
                      >
                        <img
                          style={{ height: "70px" }}
                          className="w-100 mb-1"
                          src={`https://redhandedstorage.blob.core.windows.net/assets${item?.imageURL}`}
                          alt="CAR-IAMGE"
                        />
                      </Col>
                    )
                )}
              </Row>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

AlbumInForm.propTypes = {
  imageList: PropTypes.array.isRequired,
};
