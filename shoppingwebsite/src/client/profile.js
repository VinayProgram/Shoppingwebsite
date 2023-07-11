import React from 'react'
import { useContext as UseContext, useEffect as UseEffect } from "react";
import CustomerContext from "../context/customercontext";

const profile = () => {

  const Customercontextidea = UseContext(CustomerContext);
  const {items,profile } = Customercontextidea;
  
  UseEffect(() => {
    let checklogin = localStorage.getItem("Customerlogin");
    if (checklogin === null) {
      window.location.href = "http://localhost:3000/customerlogin"
    } else {
      profile();
    }
  }, []);

  console.log(items)

  const cancel=()=>{
    alert("Your request of cancel order has been sent to team,they will call you ASAP")
  }
  const ordershowcase=(item)=>{
    return(
      <div className="card">
  <div className="card-body">
    <h3>OrderNo:-{item._id}</h3>
    <h6>Productname:{item.productname}</h6>
    <h6>OrderDate:-{item.date}</h6>
    <h6>Payment Method:{item.paymentmethod}</h6>
    <h6>Track order:--{item.trackorder}</h6>
    <h6>Total Amount:{item.price}</h6>
    <button className='btn btn-danger'onClick={cancel}>Cancel order</button>
  </div>
</div>

    )
  }
  return (
    <div>
      {items.map((i)=>{
        return ordershowcase(i)
      })}
    </div>
  )
}

export default profile
