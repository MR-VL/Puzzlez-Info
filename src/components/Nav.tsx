import React from 'react';
import { Navbar, NavDropdown, Nav as BootstrapNav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Nav() {
    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand>Puzzlez Info</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <BootstrapNav className="mr-auto">
                    <LinkContainer to="/">
                        <BootstrapNav.Link>Home</BootstrapNav.Link>
                    </LinkContainer>
                    <NavDropdown title="Security Info" id="basic-nav-dropdown">
                        <LinkContainer to="/Security">
                            <NavDropdown.Item>Security Overview</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/Registration">
                            <NavDropdown.Item>Registration</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/Authentication">
                            <NavDropdown.Item>Authentication</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/Login">
                            <NavDropdown.Item>Login</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/Logout">
                            <NavDropdown.Item>Logout</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                </BootstrapNav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Nav;
