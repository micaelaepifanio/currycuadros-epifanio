import { Container, Image } from "react-bootstrap";
const Item = (props) => {
    return (
            <Container>
               <h2>{props.itemData.title}</h2>
               <p>{props.itemData.id}</p>
               <p>{props.itemData.price}</p>
               <Image src =  {props.itemData.pictureUrl} thumbnail></Image>
            </Container>
    )
}

export default Item;