import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidget from "../CartWidget";
import './navbar.css'
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Link to={"/" }><Navbar.Brand href="/">Curry Cuadros</Navbar.Brand></Link>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to={"/" }><Nav.Link href="/">Home</Nav.Link></Link>
                    <Link to={"/category/catalogo" }> <Nav.Link href="/category/catalogo" >Productos</Nav.Link></Link>
                </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar;