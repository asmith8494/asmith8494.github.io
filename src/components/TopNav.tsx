import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import anthonyIcon from '../assets/AnthonySmithIcon.svg';

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
                        className="d-inline-block align-top"
                    />{' '}
                    Anthony Smith
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#link">Contact</Nav.Link>
                        <NavDropdown title="Portfolio" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/ProfessionalProjects">Professional Projects</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Header>Personal Projects</NavDropdown.Header>
                            <NavDropdown.Item href="#action/3.4">
                                Sudoku App
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">
                                Idle Game
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.6">
                                Inventory Tracker App
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNav;