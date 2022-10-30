import { useState, useEffect } from "react";
import React from 'react';
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import { getProductsFirestore } from "../helpers/Helpers";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]) // State for products array from database
    const [loading, setLoading] = useState(true) // State for conditional rendering of Loading component

    const {categoryId} = useParams() //UseParams hook to get the parameters of the route


    useEffect(() => { 
        getProductsFirestore(categoryId) // Pass useParams hook value to the function that brings the firestore document
        .then(resp => setProducts(resp.docs.map(prod => ({id: prod.id,...prod.data()})))) //Set products and assign the id to each item
        .catch(err=> console.log(err)) // Check for errors in the previous step
        .finally(() => setLoading(false)) //Set loading to false to show ItemList component
       
    }, [categoryId]) //useEffect control on mount and every time categoryId changes

    

    return (
        <>
            <br/>

            {!categoryId && <h3>{ greeting }</h3>}

            <br/><br/>
            
            {loading ? <Loading/>
            
            : 
                <ItemList products={products}/>
            
            }
            
            <br/><br/>
        </>
    )
    
}

export default ItemListContainer