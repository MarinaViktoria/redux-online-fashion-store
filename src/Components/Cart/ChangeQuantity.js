const ChangeQuantity = ({quantity, setQuantity}) => {

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }
    const substractQuantity = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }
    return(
        <div>
            <span>Quantity:<button onClick={addQuantity}>+</button></span>
            <span>{quantity}</span>
            <button onClick={substractQuantity}>-</button>
        </div>
    )
}
export default ChangeQuantity;