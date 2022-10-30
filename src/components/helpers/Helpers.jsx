import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch, doc, getDoc } from "firebase/firestore"



export const updateStock = async (cartList, emptyCart) => {

        const db = getFirestore()
    
        const queryCollectionStock = collection(db, 'items') 
    
        const queryUpdateStock = query( 
                queryCollectionStock, where( documentId(), 'in', cartList.map(it => it.id)) 
        )
    
        const batch = writeBatch(db) 
    
        await getDocs(queryUpdateStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, { 
            stock : res.data().stock - cartList.find(item => item.id === res.id).amount
        })))
        .catch(err => console.log(err)) 
        .finally(emptyCart()) 
    
        batch.commit() 
    
}

export const setOrder = (order) =>{ 
        
        const db = getFirestore()
        const queryOrders = collection(db, 'orders') 
    
    return (addDoc(queryOrders, order)) 
}

export const getProductsFirestore = (categoryId) => {

    const db = getFirestore()
    const queryCollection = collection(db, 'items')

    const queryFilterStock = query( 
        queryCollection, 
        where('stock', '>', 0))
    
    const queryFilter = categoryId ? query( 
        queryFilterStock, 
        where('category', '==', categoryId)) : queryFilterStock 

    return getDocs(queryFilter) 
   
}

export const getProductsId = (detailId) => { 
    const db = getFirestore()
    const queryProduct = doc(db, 'items', detailId) 
    
    return (getDoc(queryProduct)) 
}


