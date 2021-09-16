import { Container } from "react-bootstrap";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
const ItemListContainer = (props) => {
    return (
            <Container>
                <p> {props.greeting} </p>
                <ItemCount stock="10" initial="1" />
                <ItemList/>
            </Container>
    )
}

export default ItemListContainer;