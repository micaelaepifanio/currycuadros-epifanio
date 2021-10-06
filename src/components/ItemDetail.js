import { useState } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { useCart } from "../contexts/CartContext";

const CountDetail = (props) => {
    return  <p>Cantidad comprada: {props.quantity}</p>
}

const ItemDetail = (props) => {
    const cart = useCart();
    const [quantity, setQuantity] = useState(0)

    const addQty = (qty) => {
        setQuantity (qty)
       cart.addItem(props.content, qty)
    }
    const Count = quantity === 0 ? ItemCount : CountDetail
    return (
            <Container>

            <Row>
                <Col xs={6} md={4}>
                </Col>
                <Col xs={6} md={4}>
                    <h2>{props.content.nombre}</h2>
                    <p>{props.content.price}</p>
                    <Image src ={props.content.pictureUrl} thumbnail></Image>
                    <Count stock="10" addQty={addQty} initial="1"  quantity={quantity}/>
                </Col>
                <Col xs={6} md={4}>
                </Col>
            </Row>
        
    
            </Container>
    )
}

export default ItemDetail;