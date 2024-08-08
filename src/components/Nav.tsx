import { Navbar, NavDropdown, Nav as BootstrapNav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './nav.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'
function Nav() {
    const element = <FontAwesomeIcon icon={faPuzzlePiece} style={{ color: '#FF5F1F' }} />;
    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to="/Home">
                <Navbar.Brand className={"margin"}>{element}Puzzlez Info</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <BootstrapNav className="mr-auto">

                    <LinkContainer className={"margin"} to="/Home">
                        <BootstrapNav.Link>Home</BootstrapNav.Link>
                    </LinkContainer>

                    <NavDropdown className={"margin"} title="Security Info" id="basic-nav-dropdown">
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

                    <NavDropdown className={"margin"} title="Puzzle Info" id="basic-nav-dropdown">
                        <LinkContainer to="/Puzzle">
                            <NavDropdown.Item>Puzzle Overview</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/Create Puzzle">
                            <NavDropdown.Item>Create a Puzzle</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/Edit Puzzle">
                            <NavDropdown.Item>Edit Puzzle</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/Archive Puzzle">
                            <NavDropdown.Item>Archive Puzzle</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/Share Puzzle">
                            <NavDropdown.Item>Share Puzzle</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>

                    <LinkContainer className={"margin"} to="/My Puzzlez">
                        <BootstrapNav.Link>My Puzzlez</BootstrapNav.Link>
                    </LinkContainer>

                    <LinkContainer className={"margin"} to="/My Completed Puzzlez">
                        <BootstrapNav.Link>My Completed Puzzlez</BootstrapNav.Link>
                    </LinkContainer>

                    <LinkContainer className={"margin"} to="/Approve Puzzlez">
                        <BootstrapNav.Link>Approve Completion</BootstrapNav.Link>
                    </LinkContainer>
                </BootstrapNav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Nav;
