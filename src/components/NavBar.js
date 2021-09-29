import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to={"/" }><Navbar.Brand href="/">Curry Cuadros</Navbar.Brand></Link>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to={"/" }><Nav.Link href="/">Home</Nav.Link></Link>
                    <Link to={"/category/catalogo_tbd" }> <Nav.Link >Productos</Nav.Link></Link>
                </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar;