import { Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import PATH from "../../utils/path";

export default function AddUserRedirect({ children }) {
  const history = useNavigate();
  const location = useLocation();
  const moveToUser = () => {
    history(PATH.USER_DETAIL);
  };

  const moveToPokemonList = () => {
    history(PATH.POKEMON_LIST);
  };
  return (
    <div className="main-wrapper-box">
      {location.pathname !== PATH.USER_DETAIL ? (
        <Button onClick={moveToUser}>Go to User Pokemon collection</Button>
      ) : (
        <Button onClick={moveToPokemonList}>Back To Pokemon List</Button>
      )}
      <div className="main-wrapper">{children}</div>
    </div>
  );
}

AddUserRedirect.propTypes = {
  children: PropTypes.element.isRequired,
};
