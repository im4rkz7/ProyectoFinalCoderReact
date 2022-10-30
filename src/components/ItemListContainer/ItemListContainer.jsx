import { useState, useEffect } from "react";
import React from 'react';
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import { getProductsFirestore } from "../helpers/Helpers";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]) 
    const [loading, setLoading] = useState(true) 

    const {categoryId} = useParams() 


    useEffect(() => { 
        getProductsFirestore(categoryId) 
        .then(resp => setProducts(resp.docs.map(prod => ({id: prod.id,...prod.data()})))) 
        .catch(err=> console.log(err)) 
        .finally(() => setLoading(false)) 
       
    }, [categoryId]) 

    

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