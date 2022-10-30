import { Card } from "react-bootstrap"
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import React, { useState } from 'react';
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CartList from "../CartList/CartList";
import { setOrder, updateStock } from "../helpers/Helpers";




const Cart = () => {
   
    const {cartList, emptyCart, totalPrice} = useCartContext() //Import context array and functions
    const [orderId, setOrderId] = useState('') //Order State


    const saveOrder = async (e, buyerData) => { //Save order function that creates the order information to store in Firestore
        e.preventDefault()

        const order = {} //empty order object
        order.buyer =  buyerData //buyer state set by the form


        order.items = cartList.map(prod => { //List cartList(array) products and save the properties of interest (product, id, price)
            return {
                product: prod.title,
                id: prod.id,
                price: prod.price
            }
        })
        order.date = new Date() //Add a date to the order
        order.total = totalPrice() //Add the total price to the order
        
        setOrder(order) // Set order state with order object
        .then(resp => setOrderId(resp.id)) //If successful, set order id to show later
        

        updateStock(cartList, emptyCart) //Update stock of items bought

    }

    

    return (
        <>  
            {/* check if orderId was generated and if so, show */}
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