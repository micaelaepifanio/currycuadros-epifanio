import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Item from "./Item";
const ItemList = (props) => {
    const [items, setItems] = useState([]);
    useEffect ( () => {
        const itemList = getList ();
        itemList.then (list => setItems (list))
        }   
    )

    function getList () {
    return new Promise((resolve,reject) =>{
        setTimeout(() => resolve([ 
            {
                id: "1234",
                title: "cuadrito",
                price: "$10000",
                pictureUrl: "carrito.png"

            },
            {
                id: "5678",
                title: "cuadrito2",
                price: "$3999",
                pictureUrl: "carrito.png"

            }
        ]), 2000)
    })
}



    return (
            <Container>
              { 
              items.map (i => {return <Item itemData={i}/> })
              } 
              
            </Container>
    )
}

export default ItemList;