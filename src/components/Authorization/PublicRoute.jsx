import PropTypes from "prop-types";
import AddUserRedirect from "../Layout/AddUserRedirect";

function PublicRoute({ element }) {
  return <AddUserRedirect>{element}</AddUserRedirect>;
}

PublicRoute.propTypes = {
  element: PropTypes.node.isRequired,
};

export default PublicRoute;
