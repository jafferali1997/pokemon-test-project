import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import PATH from "../../utils/path";

export default function SideBar({
  vehicleInspectionSubCategories,
  vinNumber,
  subCategoryName,
}) {
  return (
    <Col
      md={2}
      className=" bg-white sidebar-box"
      style={{
        borderTopRightRadius: "56px",
      }}
    >
      <div
        className=""
        style={{
          height: "643px",
          overflowY: "scroll",
          borderTopRightRadius: "56px",
        }}
      >
        {vehicleInspectionSubCategories.map((item) => (
          <Link
            to={PATH.TRADE_DETAILS.replace(
              ":subCategoryName",
              `${item.subCategoryName.replaceAll(" ", "").replaceAll("/", "")}`
            ).replace(":vinNumber", `${vinNumber}`)}
            className={`d-flex py-2 my-1 text-decoration-none active text-dark border-bottom p-2 py-3
   }`}
            style={{
              fontSize: "14px",
              color: "black",
              height: "10%",
            }}
          >
            <div className="d-flex align-items-center justify-content-start w-100">
              {/* <div className=" w-100icon me-2">{item.icon}</div> */}
              <div className=" sidebar-text">
                {item.subCategoryName
                  .replaceAll(" ", "")
                  .replaceAll("/", "") === subCategoryName ? (
                  <b>{item.subCategoryName}</b>
                ) : (
                  item.subCategoryName
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Col>
  );
}

SideBar.propTypes = {
  vehicleInspectionSubCategories: PropTypes.array.isRequired,
  vinNumber: PropTypes.string.isRequired,
  subCategoryName: PropTypes.number,
};

SideBar.defaultProps = {
  subCategoryName: undefined,
};
