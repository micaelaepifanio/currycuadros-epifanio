import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ItemDetail from "./ItemDetail"
const ItemDetailContainer = (props) => {
    const [detail, setDetail] = useState({});
    useEffect ( () => {
        const detail = getDetail(props.id);
        detail.then (d => setDetail (d))
        }   
    )

    function getDetail (id) {
    return new Promise((resolve,reject) =>{
        setTimeout(() => resolve({
            id,
            title: "cuadrito2",
            price: "$3999",
            pictureUrl: "carrito.png"
        }), 2000)
    })
}
    return (
            <Container>
                <ItemDetail content={detail} />
            </Container>
    )
}

export default ItemDetailContainer;