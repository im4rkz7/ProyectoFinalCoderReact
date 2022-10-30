import CartItem from "../CartItem/CartItem"
import { useCartContext } from "../../context/CartContext"

const CartList = () => {

    const {cartList} = useCartContext() 
    
    return (
        <>
            {cartList.map( item => <CartItem key={item.id} item={item}/>)}
        </>
    )}

export default CartList