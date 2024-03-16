import Cart from "./component/cart";
import "./App.css";
import data from "./product";
import Product from "./component/product";

function App() {

  const products = data.products;

 console.log(products)

  return (
    <div>
      <Cart />
      <div className="product">
        {products.map((items) => {
          <Product key={items.id} items={items} />;
        })}
      </div>
    </div>
  );
}

export default App;
