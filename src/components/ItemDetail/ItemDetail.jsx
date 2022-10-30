import { ButtonGroup, Card } from 'react-bootstrap'
import React from 'react';
import CardHeader from 'react-bootstrap/esm/CardHeader'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import {  useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';



const ItemDetail = ({item}) => { //Recieves and destructurates prop
    const [added, setAdded] = useState(false) //State for conditional rendering of ItemCount component

    const {addCart} = useCartContext() // Consuming a function of context

    const onAdd = (amount) => { //Function that handles adding products to cart. Called with a button 
        setAdded(true) //Set state for conditional rendering
        addCart({...item, amount: amount}) //Using addCart function with spread operator to add to existing
                                            //items in cart. Setting the amount added with ItemCounts data
    }

    
    return (
        <>
        <Container  >
            <Card className="text-center mx-auto" style={{ width: '40rem'}}>
                <Row>
                    <Col>
                        <img src={item.pictureUrl} width="330" height="330" style={{ padding: '15px' }}/>
                    </Col>
                    <Col style={{ marginRight: '20px' }}>

                        <br/><CardHeader >{item.title}</CardHeader>

                        <br/><div>{item.description}</div>

                        <div style={{ marginTop: '5px' }}>{`Precio: ${item.price}`}</div>
                        <br/>

                        {added ? 
                        <ButtonGroup>
                            <button className="btn btn-sm" style={{ borderRadius:"12px", backgroundColor: "#FF9F50", margin:"5px", outlineColor:"white" }}><Link style={{  color: "white" }} to="/">Seguir Comprando</Link></button>
                            <button className="btn btn-sm" style={{ borderRadius:"12px", backgroundColor: "#FF9F50", margin:"5px", outlineColor:"white" }}><Link style={{  color: "white" }} to="/cart">Terminar Compra</Link></button>
                        </ButtonGroup>

                        : <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
                        
                        }
                        <br/>
                        
                    </Col>
                </Row>
            </Card>
            <br/>
        </Container>
        </>
    )

}
export default ItemDetail