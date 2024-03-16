import React from 'react'
import "../component/cart.css";
import { useSelector } from 'react-redux';


function Cart() {
  const data = useSelector(state => state);
  console.log(data);
  return (
    <div className="cart-section">
      <div>Total Price :-- 1250</div>
      <div>Total items :-- 0</div>
    </div>
  )
}

export default Cart;