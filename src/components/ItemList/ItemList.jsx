import Item from "../Item/Item"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React from 'react';



const ItemList = ({products}) => {
    
    return (
        <>
        <Container>
            <Row md={4}>
                {products?.map(product => <Item key={product.id} prods={product} />)}
            </Row>
        </Container>
        </>
        
        
)
}

export default ItemList