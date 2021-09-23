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
                nombre: "Árboles",
                id: "1234"

            },
            {
                nombre: "Caracoles",
                id: "5678"
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