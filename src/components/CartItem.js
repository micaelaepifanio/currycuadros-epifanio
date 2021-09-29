import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { useCart } from "../contexts/CartContext";

const CartItem = (props) => {
    const cart = useCart()

    const removeItem = () => cart.removeItem(props.content.id)


    return (
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                    </Col>
                    <Col xs={6} md={4}>
                        <Card body>
                            <h3>{props.content.title}</h3>
                            <p>{props.content.price}</p>
                            <p>Cantidad :{props.content.qty}</p>
                            Eliminar <Button variant="danger"  onClick={removeItem}>x</Button>
                        </Card>
                    </Col>
                    <Col xs={6} md={4}>
                    </Col>
                </Row>
            </Container>
    )
}

export default CartItem;