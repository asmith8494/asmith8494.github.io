import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import anthonyIcon from '../assets/AnthonySmithIcon.svg';
import { EnvelopeAt, Github, Linkedin } from 'react-bootstrap-icons';

function TopNav() {
    return (
        <Navbar expand="md" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={anthonyIcon}
                        width="30"
                        height="30"
                        className="d-none d-sm-inline-block d-inline-block align-top rounded rounded-3 me-2"
                    />
                    <span className="d-inline-block">Anthony Smith {<span className="d-none d-sm-inline-block">| Software Engineer</span>}</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#/resume">Resume</Nav.Link>
                        <NavDropdown title="Portfolio" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#/professional-projects">Professional Projects</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Header>Personal Projects</NavDropdown.Header>
                            {/* <NavDropdown.Item href="#action/3.4">
                                Sudoku App
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">
                                Idle Game
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.6">
                                Inventory Tracker App
                            </NavDropdown.Item> */}
                        </NavDropdown>
                        <Nav.Link
                            href="https://www.linkedin.com/in/anthony-smith-41a24543/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin />
                        </Nav.Link>
                        <Nav.Link
                            href="mailto:anthony.smith353@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <EnvelopeAt />
                        </Nav.Link>
                        <Nav.Link
                            href="https://github.com/asmith8494"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNav;