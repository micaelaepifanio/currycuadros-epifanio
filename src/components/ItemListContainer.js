import { Container } from "react-bootstrap";
import ItemList from "./ItemList";
const ItemListContainer = (props) => {
    return (
        <div className = "body-bg">
            <Container>
                <h4> {props.greeting} </h4>
                <ItemList/>
            </Container>
            </div>
    )
}

export default ItemListContainer;