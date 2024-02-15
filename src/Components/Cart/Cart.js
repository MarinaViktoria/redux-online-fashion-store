import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";

const Cart = () => {
    const cartItems = useSelector(getCartItems)
    const totalPrice = useSelector(getTotalPrice)
    return(
        <div
            className="cart-result">
            <img className="cartIcon" 
            src="https://img.icons8.com/?size=160&id=rrY-w-YXZc4B&format=png" alt="cart"/>
            <h4>Total: ${totalPrice}.00</h4>
            {cartItems.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.id}/>)}
        </div>
    )
}
export default Cart;