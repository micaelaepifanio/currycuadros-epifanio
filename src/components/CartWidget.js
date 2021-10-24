import { Container, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const CartWidget = () => {
    const cart = useCart();
    return (
            <div className='cart-widget'>
                {cart.getTotalItemQty()> 0 && <>
                    <Link to={"/cart" }> <img className = 'img-carrito' src ="/carrito.png" thumbnail></img><p className= 'cart-qty'>{cart.getTotalItemQty()}</p></Link>
                    
                    </>
                }
                
            </div>
    )
}

export default CartWidget;