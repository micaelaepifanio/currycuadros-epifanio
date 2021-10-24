import { useEffect, useState } from "react";
import { Container, Row , Col} from "react-bootstrap";
import Item from "./Item";
import {getDb} from "../services/firebase";
import { collection, getDocs } from 'firebase/firestore'

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

        useEffect ( () => {
            setLoading(true);

            getDocs(collection(getDb, 'cuadros')).then((querySnapshot) => {
                    const products = querySnapshot.docs.map(doc => {
                        return { id: doc.id, ...doc.data() }
                    }) 
                    setItems(products)
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        });

    },[])

    return (
            <Row>

              {loading &&
                <p>LOADING</p>
              }  
              {!loading && 
                items.map (i => {return <Col className = 'columnita'><Item itemData={i}/></Col>})
              } 
              
            </Row>
    )
}

export default ItemList;