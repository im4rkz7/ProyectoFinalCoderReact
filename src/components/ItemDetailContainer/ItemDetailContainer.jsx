import { useState } from "react";
import React from 'react';
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import { getProductsId } from "../helpers/Helpers";
import ItemNotFound from "../ItemNotFound/ItemNotFound";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({}) //Item state with an empty object. To be setted by the fetch
    const [loading, setLoading] = useState(true) //Loading state for conditional rendering

    const {detailId} = useParams() //UseParams hook to get the parameters of the route

    useEffect(()=> {
        getProductsId(detailId) // Pass useParams hook value to the function that brings the firestore document
        .then(resp => setItem({id:resp.id,...resp.data()})) //Sets item with corresponding id
        .catch(err=> console.log(err))
        .finally(() => setLoading(false)) //Show Loading component
    }, [])
    
    return (
        <>
            <br/>
            {/* Nested ternary operators to determine what to show. 
            Show component ItemNotFound if a property of the item is undefined 
            Pass item state as a prop to ItemDetail component*/}
            {loading ? <Loading/>
            
            :  item.title == undefined ? <ItemNotFound/> : <ItemDetail  item={item}/>
            }   
            
        </>
    )

}
export default ItemDetailContainer