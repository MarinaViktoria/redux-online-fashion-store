import dataClothes from "../../data/dataClothes";
import Clothes from './Clothes';
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/clothesSlice";

const AllClothes = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return(
        <div>
            <div className="header">
                <h1>Our new collection</h1>
                <h2>💖 Spring/Summer 2024 💖</h2>
            </div>
        
        <div>
            {dataClothes
            .filter(clothes => {
                if (selectedCategory === "ALL") return true;
                return selectedCategory === clothes.category;
            })
            .map(clothes => <Clothes clothes={clothes}/>)}
        </div>
        </div>
    )
}
export default AllClothes;