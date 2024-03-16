import React from 'react';
import "../component/product.css";
import data from '../product';

function Product() {
  const props =  data.products;

  console.log(props); // Just to check the received prop
  return (
    <div className="product">
      {/* <div className="box" key={item.id}>
        <div><img src={item.url} alt='image' /></div>
        <div><h2>{item.name}</h2></div>
        <div className="">Price :--RS {item.price}/-</div>
      </div>    */}
{props.map((item) => (
    <div className="box" key={item.id}>
    <div><img src={item.url} alt='image' /></div>
    <div><h2>{item.name}</h2></div>
    <div className="">Price :--RS {item.price}/-</div>
  </div> 
))}



    </div>
  )
}

export default Product;