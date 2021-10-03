import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail"
import {getDb} from "../services/firebase";
import { doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();    
    
    

    useEffect ( () => {
        setLoading(true);

        getDoc(doc(getDb, 'cuadros' , id)).then((querySnapshot) => {
            console.log({id: querySnapshot.id, ...querySnapshot.data()})
            const product = { id: querySnapshot.id, ...querySnapshot.data()}
            setDetail(product)
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
                <ItemDetail content={detail} />
              }  
                
                
            </Container>
    )
}

export default ItemDetailContainer;