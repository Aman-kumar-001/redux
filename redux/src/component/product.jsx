import React from "react";
import "../component/product.css";
import { UseDispatch, useDispatch } from "react-redux";
import { additem } from "./redux/slice/cartSlice";

function Product({ products }) {
  const dispatch = useDispatch();
 
  return (
    <div className="product">
      {products.map((items) => (
         <div className="box" key={items.id}>
         <div>
           <img src={items.url} alt="image" />
         </div>
         <div>
           <h2>{items.name}</h2>
         </div>
         <div className="">Price :--RS {items.price}/-</div>
         <div><button onClick={(e) => dispatch(additem({name : items.name , image : items.url , price : items.price}))}>ADD TO CART</button></div>
       </div>
      ))}
      
    </div>
  );
}

export default Product;
