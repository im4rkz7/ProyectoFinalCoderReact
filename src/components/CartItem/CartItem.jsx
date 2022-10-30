import { Card, Col, Row } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"
import { useCartContext } from "../../context/CartContext"

const CartItem = ({item}) => {

    const {removeItem} = useCartContext() //Importing function of cart context
    
    return (
        <>
            <br/>
            <Card className="text-center mx-auto" style={{ width: '40rem' }}>
                <Row>
                <Col>
                    <img src={item.pictureUrl} alt="" width="230" height="230" style={{ margin: '8px' }}/>
                </Col>
                <Col style={{ marginRight: '30px' }}>

                    <br/><CardHeader>{item.title}</CardHeader>

                    <br/>{`Cantidad: ${item.amount}`}

                    <div style={{ marginTop: '5px' }}>{`Precio: ${item.price}`}</div>
                    <br/>
                    <button onClick={() => removeItem(item.id)}>Eliminar Producto</button>                                   
                </Col>
                </Row>                              
            </Card> 
        </>
    )}

export default CartItem