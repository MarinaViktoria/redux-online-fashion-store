import { useDispatch, useSelector } from "react-redux";
import { filteredCategory, getSelectedCategory } from "../../redux/clothesSlice";

const Filter = ({category}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);
    return(
        <div>
            <p onClick={() => {dispatch(filteredCategory(category))}}
            className={selectedCategory === category ?
            "categorySelected" : "categoryNotSelected"}>{category}</p>
        </div>
    )
}
export default Filter;