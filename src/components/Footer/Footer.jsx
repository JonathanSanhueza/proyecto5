import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";

export const Footer = ()=> {
    return (
    <Navbar bg="dark" data-bs-theme="dark" className="justify-content-center" fixed="bottom">
    <Container>
    <Nav >
        <Nav.Link href="mailto:Joyeria@gmail.com">Contáctanos</Nav.Link>
        <Nav.Link href="/home">Inicio</Nav.Link>
        <Nav.Link target="_blank" href="https://es-la.facebook.com/">Visitanos en Facebook</Nav.Link>
    </Nav>
    </Container>
</Navbar>)
}
