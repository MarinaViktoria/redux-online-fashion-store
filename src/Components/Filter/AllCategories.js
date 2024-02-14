import Filter from './Filter';

const AllCategories = () => {
    return(
        <div className="categories">
            {["DRESS", "SKIRT", "JACKET", "TROUSERS", "ALL"]
            .map(category => <Filter category={category} key={category}/>)}
        </div>
    )
}
export default AllCategories;