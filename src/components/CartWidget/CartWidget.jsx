import cartIcon from '../assets/cartIcon.png';
import React from 'react';
import { useCartContext } from "../../context/CartContext"


const CartWidget = () => {

    const {totalAmount} = useCartContext()
 
    
    return (
        <>
            <img src={cartIcon} alt="cartIcon" width="40" height="40" />{totalAmount() !== 0 && <span style={{ fontSize: "25px" }}> {totalAmount()}</span>}

        </>
        
    )

}
export default CartWidget