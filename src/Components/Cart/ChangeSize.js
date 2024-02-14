const ChangeSize = ({size, setSize}) => {

    const addSize = () => {
        if (size >= 44) return size=44;
        const newSize = size + 2;
        setSize(newSize)
    }
    const substractSize = () => {
        if (size <= 34) return;
        const newSize = size - 2;
        setSize(newSize)
    }
    return(
        <div>
            <span>Size:<button onClick={addSize}>+</button></span>
            <span>{size}</span>
            <button onClick={substractSize}>-</button>
        </div>
    )
}
export default ChangeSize;