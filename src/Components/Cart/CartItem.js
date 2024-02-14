import { useDispatch } from "react-redux";
import dataClothes from "../../data/dataClothes";
import { removeItemsFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {
    const dispatch = useDispatch()
    const allClothes = dataClothes.find(item => item.id === cartItem.clothesId)

    return(
        <div className="cart-items">
            <h4>{allClothes.name}</h4>
            <p>Size: {cartItem.size}</p>
            <p>{cartItem.quantity} piece(s)</p>
            <p>Price: ${allClothes.price * cartItem.quantity}.00</p>
            <span onClick={() => dispatch(removeItemsFromCart({cartItemId: cartItem.id}))}>
            <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="rubbish bin"/> 
            </span>
            
        </div>
    )
}
export default CartItem;