import React,{useState} from "react";
import "./Card.css";
import { Link } from "react-router-dom";
export default function Card(props) {
  let [AddedToCart,setAddedToCart] = useState();
  function handleClick()
  {
    props.setCartProducts([...props.cartProductsData,props])
    setAddedToCart(true)
  }
  return (
    <div className="Card">

        <div id="Thumbnail">

      <Link  onClick={()=>{props.sendData(props)}}  to={"/Products"}>

          <img src={props.Img} alt="" />

      </Link >

        </div>

      <div id="CardContent">
        <h2>{props.Title}</h2>
        <div id="CardP">
          {/* <p>{props.Desc}</p> */}
          <p className="Price">
            <b>Price:- </b> Usd {props.Price}$ &nbsp;{" "}
            <del>{props.Price + parseInt((props.Price / 100) * 10)} </del>
          </p>
        </div>
      </div>
      {AddedToCart?<h3>Addeed To Cart</h3>:<div id="Btns">
        <button onClick={()=>handleClick()}>Add To Cart</button>
        <button>Shop Now</button>
      </div> }
    </div>
  );
}