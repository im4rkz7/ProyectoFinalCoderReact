import { Card } from "react-bootstrap"
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import React, { useState } from 'react';
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CartList from "../CartList/CartList";
import { setOrder, updateStock } from "../helpers/Helpers";




const Cart = () => {
   
    const {cartList, emptyCart, totalPrice} = useCartContext() 
    const [orderId, setOrderId] = useState('') 


    const saveOrder = async (e, buyerData) => { 
        e.preventDefault()

        const order = {} 
        order.buyer =  buyerData 


        order.items = cartList.map(prod => { 
            return {
                product: prod.title,
                id: prod.id,
                price: prod.price
            }
        })
        order.date = new Date() 
        order.total = totalPrice() 
        
        setOrder(order) 
        .then(resp => setOrderId(resp.id)) 
        

        updateStock(cartList, emptyCart) 

    }

    

    return (
        <>  
            {}
            <br/>
            {orderId !== '' &&
            <div>
                <Card className="text-center mx-auto" style={{ width: '20rem' , borderRadius:"12px"}}>
                    <CardHeader style={{ backgroundColor: "#FF9F50", color: "white"}}>¡COMPRA EXITOSA!</CardHeader>
                    <Card.Text>{`Su numero de orden es ${orderId}`}</Card.Text>
                </Card>
                <br/>
            </div> 
             }
            
            <br/>
            {cartList.length === 0 ? 

            <Card className="text-center mx-auto" style={{ width: '10rem' }}>
            <CardHeader>No tenes nada en tu carrito aun</CardHeader>
            <button className="btn-outline-light" style={{ borderRadius:"12px", backgroundColor: "#FF9F50", color: "white", margin:"5px", outlineColor:"white" }}><Link to="/" style={{  color: "white" }}>Ir a comprar</Link></button>
            </Card>
            
            :
            <div>
                <h1>CARRITO</h1>
                <CartList/>
                <br/>
                
                <Card className="text-center mx-auto" style={{ width: '10rem' }}>
                    <CardHeader>TOTAL</CardHeader>
                    <h3>${totalPrice()}</h3>
                </Card>
                <button className="btn-outline-light" onClick={emptyCart} style={{ borderRadius:"12px", backgroundColor: "#FF9F50", color: "white", margin:"5px", outlineColor:"white" }}>Vaciar Carrito</button>
                
                <CheckoutForm saveOrder={saveOrder} />
                <br/>
                <br/>
                
            </div>
            }
            
        </>
    )
}

export default Cart