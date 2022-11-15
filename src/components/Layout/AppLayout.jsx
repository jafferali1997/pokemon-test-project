import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import PropTypes from "prop-types";
// import { BsChatLeftDots } from "react-icons/bs";
// import { VscBellDot } from "react-icons/vsc";
// import { ProSidebar, SidebarContent } from 'react-pro-sidebar';
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import IMAGES from "../../assets/images";
import PATH from "../../utils/path";
import { logout } from "../../app/features/auth/auth.slice";

export default function AppLayout({ children }) {
  const dispatch = useDispatch();
  const logoutFunction = () => {
    dispatch(logout());
  };
  return (
    <div className="" style={{ width: "100%" }}>
      <section className="navBar">
        <Navbar bg="light" expand="lg" className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#home">
              <Link to={PATH.ADMIN_DASHBOARD}>
                <img
                  alt=""
                  src={IMAGES.BUYCON_LOGO}
                  width="150vh"
                  height="100%"
                  className="d-inline-block align-top"
                />
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Link
                className="me-4 d-flex color-layout rounded-1 border btn btn-primary"
                to="/"
              >
                Dashboard
              </Link>
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Murtaza
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ marginLeft: "-3rem" }}>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <div
                      onClick={logoutFunction}
                      onKeyDown={logoutFunction}
                      role="presentation"
                    >
                      Logout
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Container>
        </Navbar>
      </section>

      <div className="main-box">{children}</div>
    </div>
  );
}
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
