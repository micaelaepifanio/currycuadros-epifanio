import { Container, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const CartWidget = () => {
    const cart = useCart();
    return (
            <Container>
                {cart.getTotalItemQty()> 0 && <>
                    <Link to={"/cart" }> <Image src ="/carrito.png" thumbnail></Image></Link>
                    <p>{cart.getTotalItemQty()}</p>
                    </>
                }
                
            </Container>
    )
}

export default CartWidget;