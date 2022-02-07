import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Breadcrumb,
  Form,
  Col
} from "react-bootstrap";
import { useAuth } from "@shared/components/AuthProvider";
import { HeaderStyle, NavLink, SearchInput, TopHeaderRow, TopNavElementCol } from "./Header.styles";
import { useHistory } from "react-router-dom";
import brandLogo from "./brand-logo.svg"

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const authProvider = useAuth();
  const history = useHistory();
  const { isLoggedIn } = authProvider;
  const logout = () => {
    authProvider.provideLogout();
    window.location.href = "/account/login/";
  };
  return (
    <>
      <HeaderStyle>
        <Navbar expand="lg" className="pt-3 pb-3">
          <Container>
            <TopHeaderRow>
              <Col>
                  <Navbar.Brand href="#home" className="align-middle">
                    <img
                      alt=""
                      src={ brandLogo }
                      className="d-inline-block align-top"
                    />
                  </Navbar.Brand>
                </Col>
                <Col lg={7}>
                  <Form className="d-flex">
                    <SearchInput 
                      type="search"
                      placeholder="Search"
                      aria-label="Search">
                    </SearchInput>
                  </Form>
                </Col>
                <TopNavElementCol>
                  <NavDropdown title="" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </TopNavElementCol>
            </TopHeaderRow>
          </Container>
        </Navbar>
        
        <div>
        <Container>
          <Navbar id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink href="/">Home</NavLink>
                {isLoggedIn ? (
                  <NavLink
                    href="#"
                    onClick={() => {
                      logout();
                    }}
                  >
                    Logout
                  </NavLink>
                ) : (
                  <NavLink href="/account/login/">Login</NavLink>
                )}
                <NavLink href="/product/">Product Landing Page</NavLink>
                <NavLink href="/profile/">Profile View</NavLink>
                <NavLink href="/profile/edit/">Profile Edit</NavLink>
                <NavLink href="/profile/products/">Product List</NavLink>
                <NavLink href="/product/edit">Product Edit</NavLink>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar>
            </Container>
        </div>
      </HeaderStyle>
      
    </>
  );
};

export default Header;
