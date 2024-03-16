import React,{useState,useEffect} from 'react'
import "./Shop.css"
import Card from './Card'

import { Link} from 'react-router-dom'

export default function Shop({cartProductsData,setSelectedProduct,setCartProducts}) {
  let [AllProductsData,setAllProducts] = useState([]);
  
  useEffect(()=>{
     let getProducts = async () =>{
      let Data = await fetch('https://fakestoreapi.com/products');
      Data = await Data.json();
      setAllProducts(Data);
    }
    getProducts();
    console.log(AllProductsData)
  },[])

  function sendData(i)
  {
    setSelectedProduct(i)
    
  }
  
  return (
    <div id = "Shop">
      
          <header>
            <p>Best Products in the Market</p>
          </header>
            <main id = "ShopMain">

        {
          AllProductsData.map((item,index)=>
          {
            return (
         
                <Card cartProductsData = {cartProductsData} setCartProducts = {setCartProducts} sendData = {sendData}  Img = {item.image} Title = {item.title} Price = {item.price} Desc = {item.description}></Card>
         
            )
          })
        }
        
        

            </main>

    </div>
  )
}