import React from 'react'
import "../component/cart.css";
import { useSelector } from 'react-redux';


function Cart() {
  const data = useSelector(state => state);
  const total = data.cart.reduce((a,b) => a + b.price, 0)
  console.log(data);
  return (
    <div className="cart-section">
      <div>Total Price :-- {total}</div>
      <div>Total items :-- {data.cart.length}</div>
    </div>
  )
}

export default Cart;