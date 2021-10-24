import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = (props) => {
    return (
            <>  
                <p>{props.itemData.nombre}</p>
                <Image className ='thumb' src =  {'/item/' + props.itemData.pictureUrl} thumbnail></Image>
                <br/>
               <Link to={"/item/" + props.itemData.id }>Ver detalle</Link>
            </>
    )
}

export default Item;