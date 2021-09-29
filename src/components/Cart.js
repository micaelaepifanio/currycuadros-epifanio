import { useCart } from "../contexts/CartContext";
import { Container, Button } from "react-bootstrap";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cart = useCart();
    console.dir(cart.getItems())
    const eraseAll = () => cart.clear()
    return (
            <Container>
                <h2> Carrito </h2>
                <p>Precio total: ${cart.getTotalPrice()}</p>
              { 
                cart.getItems().map (i => {return <CartItem content={i}/> })
              } 
              <Button  onClick={eraseAll}>Borrar todos</Button>
              
            </Container>
    )
}

export default Cart;