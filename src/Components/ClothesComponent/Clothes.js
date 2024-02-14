import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeSize from "../Cart/ChangeSize";

const Clothes = ({clothes}) => {
    
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState(34)
    const dispatch = useDispatch()

    return(
        <div className="clothes-info" key={clothes.id}>
            <img src={`${clothes.img}.jpg`} alt="clothes" height="500px" width="350px"/>
            <h4>{clothes.name}</h4>
            <p>${clothes.price}.00</p>
            <ChangeSize size={size} setSize={setSize}/>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button className="add-btn"
            onClick={() => {dispatch(addItemToCart({clothes, quantity, size}))}}>Add to cart</button>
        </div>
    )
}
export default Clothes;