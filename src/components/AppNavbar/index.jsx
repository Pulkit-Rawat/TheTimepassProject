import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";

import SampleLogo from "../../assets/logo.png";

import "react-toastify/dist/ReactToastify.css";

const AppNavbar = () => {
  let userName = localStorage.getItem("userName") || "";
  let role = localStorage.getItem("role") == 1 ? "Manager" : "Employee";
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <Navbar color="light" light expand="md" className="header">
        <NavbarBrand href="/" className="d-flex align-items-center">
          <img
            src={SampleLogo}
            height={30}
            width={30}
            alt="logo"
            className="rounded-circle"
          />
          <div className="d-flex align-items-center">
            <p className="mx-2">{userName}</p>
            <small>({role})</small>
          </div>
        </NavbarBrand>
        <Nav className="ml-auto- w-100" navbar>
          <NavItem className="d-flex flex-grow-1 justify-content-center align-items-center">
            <b>Employee Managment System</b>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={handleLogout}>
              <Button color="danger" size="sm" outline>
                Logout
              </Button>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
