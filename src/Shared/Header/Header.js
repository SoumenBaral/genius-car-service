import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../src/images/logo.png'
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <>

            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={30} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#service">Services</Nav.Link>
                            <Nav.Link href="home#experts">Experts</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="/add">ADD user</Nav.Link>
                                    <Nav.Link as={Link} to="/manage">Manage User</Nav.Link>
                                    <Nav.Link as={Link} to="orders">Orders</Nav.Link>
                                </>
                            }
                            {user ? <Nav.Link eventKey={2} onClick={() => signOut(auth)} as={Link} >
                                SignOut
                            </Nav.Link> : <Nav.Link eventKey={2} as={Link} to="/login">
                                Login
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
};

export default Header;