import { useState } from "react";
import { Container, Button, Row, Col} from "react-bootstrap";
const ItemCount = (props) => {

    const [counter, setCounter] = useState(parseInt(props.initial))

    const increment = () =>  {
        if(counter < props.stock){
            setCounter(counter + 1)
        }
    }

    const decrement = () => {
        if(counter > 0){
            setCounter(counter - 1)
        }
    }
    
    const onAdd = () => {
        props.addQty(counter)
    }

    return (
            <Container className = 'count-container'>
                <p>Cantidad</p>
                <Row className="justify-content-md-center">
                <Col></Col>
                    <Col> 
                        <Button className ='count-button' onClick={decrement}>-</Button>
                    </Col>
                    <Col> 
                        <p>{counter}</p>
                    </Col>
                    <Col> 
                        <Button className ='count-button' onClick={increment}>+</Button>
                    </Col>
                    <Col></Col>
                </Row>
                <br/>
                <Row>
                    <Col>                 
                        <Button className ='count-button-add' onClick={onAdd}>Agregar al carrito</Button>
                    </Col>
                </Row>
            </Container>
    )
}

export default ItemCount;