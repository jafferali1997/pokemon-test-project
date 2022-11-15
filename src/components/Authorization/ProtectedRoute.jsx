import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import FullscreenLoader from "./FullScreenLoader.jsx";
import PATH from "../../utils/path";
import AppLayout from "../Layout/AppLayout.jsx";

function ProtectedRoute({ element }) {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
       navigate(PATH.LOGIN);
    }
  }, [user, navigate]);

  if (!user) return <FullscreenLoader />;

  return <AppLayout>{element}</AppLayout>;
}

ProtectedRoute.propTypes = {
  element: PropTypes.node.isRequired,
};

export default ProtectedRoute;
