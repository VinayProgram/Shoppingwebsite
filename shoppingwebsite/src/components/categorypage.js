import React from 'react'
import { useContext as UseContext, useEffect as UseEffect } from "react";
import ItemContext from "../context/itemscontext";

const Categorypage = () => {
    const context = UseContext(ItemContext);
    const { Buynow,category } = context;
    UseEffect(() => {
        let type=window.location.search.substring(8)
        category(type)
    }, []);
  

    const billing=(e)=>{
      console.log(e.target.name)
    window.location.href='http://localhost:3000/customerlogin/billing?'+e.target.name
    }
   const itemshowcase=(item)=>{
    return(
        <div className="card mb-3 mx-5 my-3 " style={{maxWidth: "1000px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={item.image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h1 className="card-title">{item.productname}</h1>
        <p className="card-text">{item.description}</p>
      <button className="btn btn-primary" name={item.productid} onClick={billing} >Buy Now</button><button className="btn btn-primary mx-2" >Add Cart</button>
        <h1>({item.category})</h1>
      <h5 className="btn btn-danger">{item.price}.Rs</h5><br></br>
      </div>
    </div>
  </div>
</div>
        )
   }
    return (
    <div className='mx-5' style={{paddingLeft:"5cm"}}>
        {Buynow.map((i)=>{
           return itemshowcase(i)
        })}
       </div>
  )
}

export default Categorypage
