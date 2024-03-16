import Cart from "./component/cart";
import "./App.css";
import data from "./product";
import Product from "./component/product";

function App() {

  const products = data.products;


  return (
    <div>
      <Cart />
      <Product products={products}/>
    </div>
  );
}

export default App;


