import { Container, Image } from "react-bootstrap";
const CartWidget = (props) => {
    return (
            <Container>
               <Image src =  {props.path} thumbnail></Image>
            </Container>
    )
}

export default CartWidget;