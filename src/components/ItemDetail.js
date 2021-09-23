import { Container, Image, Row, Col } from "react-bootstrap";
import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
    return (
            <Container>

            <Row>
                <Col xs={6} md={4}>
                </Col>
                <Col xs={6} md={4}>
                    <h2>{props.content.title}</h2>
                    <p>{props.content.id}</p>
                    <p>{props.content.price}</p>
                    <Image src ={props.content.pictureUrl} thumbnail></Image>
                    <ItemCount stock="10" initial="1" />
                </Col>
                <Col xs={6} md={4}>
                </Col>
            </Row>
        
    
            </Container>
    )
}

export default ItemDetail;