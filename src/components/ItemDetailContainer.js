import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const { id } = useParams();     
    useEffect ( () => {
        const detail = getDetail(id);
        detail.then (d => setDetail (d))
        }, [id]   
    )

    function getDetail (id) {
    return new Promise((resolve,reject) =>{
        setTimeout(() => resolve(findItem (id)), 500)
    })
    }

    function findItem (id) {
        console.log (id)
        if (id == "1234") {
            return {
                id,
                title: "Arboles",
                price: "$3999",
                pictureUrl: "arboles.jpg"
            }
        } else {
            return {
            id,
            title: "Caracoles",
            price: "$5999",
            pictureUrl: "caracoles.jpg"
        }
    }
}

    return (
            <Container>
                <ItemDetail content={detail} />
                
            </Container>
    )
}

export default ItemDetailContainer;