import './App.css';
import Cart from './Components/Cart/Cart';
import AllClothes from './Components/ClothesComponent/AllClothes';
import AllCategories from './Components/Filter/AllCategories';

function App() {
  return (
    <div className="App">
      <div className="blockOne">
        <AllClothes/>
      </div>
      <div className="blockTwo">
        <AllCategories/>
        <Cart/>
      </div>  
    </div>
  );
}

export default App;
