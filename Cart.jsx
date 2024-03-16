import React ,{useEffect,useState}from 'react';
import "./Cart.css";
import CartItem from './CartItem';

export default function Cart({ cartProductsData }) {

  

  let [CartData,setCartData] = useState(cartProductsData);
  // console.log("Cart:- ", cartProductsData);
let [TotalPrice,settotalPrice] = useState(0);




let p = 0;
  useEffect(()=>{
      CartData.map(e=>{
        p+= e.Price;
      });
      settotalPrice(p);
  },[])


  return (
    <div className='cart-page'>
      <h1>Your Cart</h1>
      <div className='cart-container'>
        {CartData.map((product) => (
         <CartItem TotalPrice = {TotalPrice} settotalPrice = {settotalPrice} product = {product} />
        ))}
        <center>
          <h3>{TotalPrice}</h3>
        </center>
      </div>
    </div>
  );
}