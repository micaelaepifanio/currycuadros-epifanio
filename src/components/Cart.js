import { useCart } from "../contexts/CartContext";
import { Container, Button, Row, Col } from "react-bootstrap";
import CartItem from "./CartItem";
import { 
  collection, addDoc, getDoc, doc ,
  Timestamp, writeBatch 
} from 'firebase/firestore'
import { getDb } from '../services/firebase'


const Cart = (props) => {
    const cart = useCart();
    console.dir(cart.getItems())
    const eraseAll = () => cart.clear()

    const confirmOrder = () => {
  
      const objOrder = {
          items: cart.getItems(),
          total: cart.getTotalPrice(),
          date: Timestamp.fromDate(new Date())
      }
                  
      const batch = writeBatch(getDb)
      const outOfStock = []
          
      objOrder.items.forEach((prod, i) => {
          getDoc(doc(getDb, 'cuadros', prod.id)).then(DocumentSnapshot => {
              if(DocumentSnapshot.data().stock >= objOrder.items[i].qty) {
                  batch.update(doc(getDb, 'cuadros', DocumentSnapshot.id), {
                      stock: DocumentSnapshot.data().stock - objOrder.items[i].qty
                  })
              } else {
                  outOfStock.push({...DocumentSnapshot.data(), id: DocumentSnapshot.id})
              }
                  
          })
      })

      if(outOfStock.length === 0) {
          addDoc(collection(getDb, 'ordenes'), objOrder).then(() => {
              batch.commit().then(() => {
                  alert('Compraste el carrito!')
              })
          }).catch((error) => {
              console.log('Error al ejecutar la orden')
          }).finally(() => {
              eraseAll()
          })
      }
  }


    return (
        <div className = "body-bg">
            <Container className = 'carrito-general'>
                <h2> Carrito </h2>
                <p>Precio total: ${cart.getTotalPrice()}</p>
              { 
                cart.getItems().map (i => {return <CartItem content={i}/> })
              } 
              <Row>
                  <Col></Col>
                  <Col>
                  <Button className = 'boton-carrito' onClick={eraseAll}>Borrar todos</Button>
               
               <Button className = 'boton-carrito' onClick={confirmOrder}>Comprar carrito</Button>
               </Col>
               <Col></Col>
               </Row>

             
              
            </Container>
            </div>
    )
}

export default Cart;