import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidget from "./CartWidget";


const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Curry Cuadros</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Productos</Nav.Link>
                    <Nav.Link href="#link">Sobre nosotros</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <CartWidget path="carrito.png"/>
            </Container>
        </Navbar>
    )
}

export default NavBar;