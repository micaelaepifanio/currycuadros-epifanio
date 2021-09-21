import { Container, Image } from "react-bootstrap";
const ItemDetail = (props) => {
    return (
            <Container>
                <h2>{props.content.title}</h2>
                <p>{props.content.id}</p>
                <p>{props.content.price}</p>
                <Image src =  {props.content.pictureUrl} thumbnail></Image>
            </Container>
    )
}

export default ItemDetail;