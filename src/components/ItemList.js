import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Item from "./Item";
import {getDb} from "../services/firebase";
import { collection, getDocs } from 'firebase/firestore'

const ItemList = (props) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

        useEffect ( () => {
            setLoading(true);

            getDocs(collection(getDb, 'cuadros')).then((querySnapshot) => {
                    const products = querySnapshot.docs.map(doc => {
                        return { id: doc.id, ...doc.data() }
                    }) 
                    setItems(products)
                    console.dir(products)
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        });

    },[])

    return (
            <Container>
              {loading &&
                <p>LOADING</p>
              }  
              {!loading && 
                items.map (i => {return <Item itemData={i}/> })
              } 
              
            </Container>
    )
}

export default ItemList;