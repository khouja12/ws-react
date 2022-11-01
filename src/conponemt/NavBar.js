import React from 'react'
import { Container, Nav, Navbar, } from 'react-bootstrap'
import './NavBar.css'
const NavBar = () => {
    return (
        <div className='navss'>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">MSK</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar