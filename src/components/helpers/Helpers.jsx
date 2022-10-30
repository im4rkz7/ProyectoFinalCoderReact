import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch, doc, getDoc } from "firebase/firestore"



export const updateStock = async (cartList, emptyCart) => {

        const db = getFirestore()
    
        const queryCollectionStock = collection(db, 'items') //Target collection
    
        const queryUpdateStock = query( //Filter for request
                queryCollectionStock, where( documentId(), 'in', cartList.map(it => it.id)) //Brings ids than match the ones in the cart
        )
    
        const batch = writeBatch(db) //Allows many actions at a time
    
        await getDocs(queryUpdateStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, { //Substracts the amount in the cart to the current stock of each item
            stock : res.data().stock - cartList.find(item => item.id === res.id).amount
        })))
        .catch(err => console.log(err)) //Catches any psoible errors with the fetch
        .finally(emptyCart()) //Resets the cart
    
        batch.commit() //Executes the batch
    
}

export const setOrder = (order) =>{ //Takes the order state as a parameter
        
        const db = getFirestore()
        const queryOrders = collection(db, 'orders') //Target collection 
    
    return (addDoc(queryOrders, order)) //Returns this function which adds the order as a document in the orders collection
}

export const getProductsFirestore = (categoryId) => {

    const db = getFirestore()
    const queryCollection = collection(db, 'items') //Target collection 

    const queryFilterStock = query( //First filter out product that have no stock (doesnt render them) 
        queryCollection, //Collection of items
        where('stock', '>', 0))
    
    const queryFilter = categoryId ? query( //Filter products by the category (using params to get that category)
        queryFilterStock, //Using the already filtered collection instead of queryCollection
        where('category', '==', categoryId)) : queryFilterStock //If categoryId doesnt exist, use the previusly filtered collection

    return getDocs(queryFilter) //Return the getDocs method with the new collection as parameter
   
}

export const getProductsId = (detailId) => { 
    const db = getFirestore()
    const queryProduct = doc(db, 'items', detailId) //Define the doc with firestore, the collection and the id of the item (gotten with useParams)
    
    return (getDoc(queryProduct)) //Return the method getDoc
}


