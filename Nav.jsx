import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'


import Search from "./Media/Search.svg"
import Cart from "./Media/Cart.svg"
import User from "./Media/User.svg"

export default function Nav({CartLength}) {
  return (
    <>

   <header>
        <p>Sign up and get 20% off on your first order. <span><a href="Sign Up Now"></a></span></p>
   </header>

   <nav>

    <h2><Link to = "/">SHOP.CO</Link></h2>

    <ul>
        <li><Link to = "/Shop">Shop</Link></li>
        <li>On Sale</li>
        <li>New Arivals</li>
        <li>Brands</li>
    </ul>

    <div id = "Third">
        <img id = "SearchLogo" src={Search} />
        <input placeholder='Search Your Products...' type="text" />

        <div>
           <Link to="/Cart"><img src={Cart} /> <sup>{CartLength}</sup> </Link>
            <img src={User} />
        </div>
    
    </div>


   </nav>

    </>
  )
}