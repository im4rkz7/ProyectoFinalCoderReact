import { useState } from "react";
import React from 'react';
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import { getProductsId } from "../helpers/Helpers";
import ItemNotFound from "../ItemNotFound/ItemNotFound";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({}) 
    const [loading, setLoading] = useState(true) 

    const {detailId} = useParams() //UseParams hook to get the parameters of the route

    useEffect(()=> {
        getProductsId(detailId) 
        .then(resp => setItem({id:resp.id,...resp.data()})) 
        .catch(err=> console.log(err))
        .finally(() => setLoading(false)) //Show Loading component
    }, [])
    
    return (
        <>
            <br/>
            {}
            {loading ? <Loading/>
            
            :  item.title == undefined ? <ItemNotFound/> : <ItemDetail  item={item}/>
            }   
            
        </>
    )

}
export default ItemDetailContainer