
import { NavLink } from 'react-router-dom';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';


const NavBar = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mt-4 rounded">
            <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            </Nav>
            </Navbar>

        </div>
    )
}


export default NavBar;