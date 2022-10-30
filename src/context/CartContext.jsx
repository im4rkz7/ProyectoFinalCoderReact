
import { useState, createContext, useContext } from "react";
import React from 'react';

const CartContext = createContext([]) 

export const useCartContext = () => useContext(CartContext) 

export const CartContextProvider = ({children}) => { 

    const [cartList, setCartList] = useState([]) 

    const removeItem = (id) => setCartList(cartList.filter(prod => prod.id !== id)); 

    const emptyCart = () => { 
        setCartList([])
    }

    const totalPrice = () => { 
        return cartList.reduce((total, product) => total = total + (product.price * product.amount), 0)
    }

    const totalAmount = () => { 
        return cartList.reduce((total, product) => total += product.amount, 0)
    }


    const addCart = (prod) => { 
        const idx = cartList.findIndex(product => product.id === prod.id) 
        if (idx !== -1){ 
            cartList[idx].amount += prod.amount 
            setCartList([...cartList]) 
        }
        else {
            setCartList([...cartList, prod]) 
        }

    }
    
    return ( 

        <CartContext.Provider value={{
            cartList,
            addCart,
            emptyCart,
            removeItem,
            totalPrice,
            totalAmount
        }}>
            {children}
        </CartContext.Provider>
    )
}



