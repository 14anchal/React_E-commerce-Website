import React,{useState,useEffect} from 'react'

export default function CartItem({product,TotalPrice,settotalPrice}) {
    let [PQty,setPQty] = useState(1);
    
    useEffect(()=>{
       let Total = product.Price *PQty
        settotalPrice(TotalPrice += Total)
    },[PQty])
  return (
    <div>
         <div key={product.id} className='cart-item'>
            <img src={product.Img} alt={product.Title} />
            <div className='cart-details'>
              <h3>{product.Title}</h3>
              <p>{product.Desc}</p>
              <p>Price: ${product.Price}</p>
            </div>
            {/* <button onClick={()=>{deleteProduct(product.id)}}>Delete</button> */}
            <center>
              <button onClick={()=>setPQty(PQty+1)}>+</button> <h3>{PQty}</h3> <button onClick={()=>setPQty(PQty-1)}>-</button>
            </center>
          </div>
    </div>
  )
}