import { useState } from "react";
import { Container, Button, Row, Col} from "react-bootstrap";
const ItemCount = (props) => {

    const [counter, setCounter] = useState(props.initial)

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
            <Container>
                <Row className="justify-content-md-center">
                    <Col> 
                        <Button variant="outline-success" onClick={decrement}>-</Button>
                    </Col>
                    <Col> 
                        <p>{counter}</p>
                    </Col>
                    <Col> 
                        <Button variant="outline-success" onClick={increment}>+</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>                 
                        <Button variant="outline-success" onClick={onAdd}>Agregar al carrito</Button>
                    </Col>
                </Row>
            </Container>
    )
}

export default ItemCount;