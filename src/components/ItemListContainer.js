import { Container } from "react-bootstrap";
import ItemList from "./ItemList";
const ItemListContainer = (props) => {
    return (
            <Container>
                <p> {props.greeting} </p>
                <ItemList/>
            </Container>
    )
}

export default ItemListContainer;