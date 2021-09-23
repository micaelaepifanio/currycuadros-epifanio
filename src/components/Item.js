import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = (props) => {
    return (
            <Container>
                <p>{props.itemData.nombre}</p>
               <Link to={"/item/" + props.itemData.id }>Ver detalle</Link>
            </Container>
    )
}

export default Item;