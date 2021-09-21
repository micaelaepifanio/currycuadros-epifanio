import { Container, Image } from "react-bootstrap";
import ItemDetailContainer from "./ItemDetailContainer";
const Item = (props) => {
    return (
            <Container>
               <ItemDetailContainer id={props.itemData.id}/>
            </Container>
    )
}

export default Item;