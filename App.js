import React,{useState,useEffect} from "react";
import Nav from "./Component/Nav";
import Home from "./Component/Home";
import Shop from "./Component/Shop";
import Product from "./Component/Product";
import Cart from "./Component/Cart"

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  let [SelectedProduct,setSelectedProduct] = useState();
  let [cartProductsData,setCartProducts] = useState([]);
  let [CartLength,setCartLength] = useState(cartProductsData.length);

  useEffect(()=>{
    setCartLength(cartProductsData.length)
  },[cartProductsData])
  

  return (
    <div>
      <BrowserRouter>
        <Nav CartLength = {CartLength}  />
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/Shop" element = {<Shop cartProductsData={cartProductsData} setCartProducts = {setCartProducts} setSelectedProduct = {setSelectedProduct}/>}/>
          <Route path="/Products" element = {<Product SelectedProduct = {SelectedProduct}/>}/>
          <Route path="/Cart" element = {<Cart  cartProductsData = {cartProductsData}/>}/>
        </Routes >
      </BrowserRouter>
    </div>
  );
}