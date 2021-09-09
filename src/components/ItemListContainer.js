import { Container } from "react-bootstrap";
import ItemCount from "./ItemCount";
const ItemListContainer = (props) => {
    return (
            <Container>
                <p> {props.greeting} </p>
                <ItemCount stock="10" initial="1" />
            </Container>
    )
}

export default ItemListContainer;