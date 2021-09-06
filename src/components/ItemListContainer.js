import { Container } from "react-bootstrap";
const ItemListContainer = (props) => {
    return (
            <Container>
                <p> {props.greeting} </p>   
            </Container>
    )
}

export default ItemListContainer;