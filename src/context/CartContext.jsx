
import { useState, createContext, useContext } from "react";
import React from 'react';

const CartContext = createContext([]) //Creating context

export const useCartContext = () => useContext(CartContext) //Exporting useCartContext function to minimize code in other components

export const CartContextProvider = ({children}) => { //Provider in which values and functions are defined.

    const [cartList, setCartList] = useState([]) //State for the cart list. Empty array for default

    const removeItem = (id) => setCartList(cartList.filter(prod => prod.id !== id)); // Function that receives an item id, and filters it out using filter method

    const emptyCart = () => { //Function that empties the cart list by setting it as an empty array
        setCartList([])
    }

    const totalPrice = () => { // Function that calculates the total price of the order. Multiplying the amount of each product byt its price
        return cartList.reduce((total, product) => total = total + (product.price * product.amount), 0)
    }

    const totalAmount = () => { // Function that adds the amount of each product into a total
        return cartList.reduce((total, product) => total += product.amount, 0)
    }


    const addCart = (prod) => { // Add to cart function (recieves the product as a parameter)
        // Checking for duplicates
        const idx = cartList.findIndex(product => product.id === prod.id) //finding the index of the product that is already on the array
        if (idx !== -1){ // Checking if that index exists (which means the product was already added and we need to change the amount variable)
            cartList[idx].amount += prod.amount //Positioning on the index earlier found, and changing its amount variable
            setCartList([...cartList]) // Setting the cart array that was just modified
        }
        else {
            setCartList([...cartList, prod]) // Setting the cart list by using spread operator to add to the existing products in the cart.
        }

    }
    //Returning all variables and functions that will be used by the consumers
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



