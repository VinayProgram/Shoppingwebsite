import React from "react"; 
import { useState as UseState} from "react";
import CustomerContext from "./customercontext";
 
    const auth=localStorage.getItem('Customerlogin')
    const CustomerState=(props)=>{
      var intial=["dsafad","dasd","dafa"] 
      const[items,setItems]=UseState(intial)

    const order=async(email,productid,price,productname,size,pay,Contact,Contact2,address)=>{
     console.log(email,productid,price,productname,size,pay,Contact,Contact2,address)
    var data=await fetch('http://localhost:3500/customer/buynow',{method:'POST',
     headers:{'Content-Type':'application/json',
    "auth-token":auth},
     body:JSON.stringify({email,productid,price,productname,size,pay,Contact,Contact2,address})
     });
     data=await data.json()
     setItems(data)
    }

    const profile=async()=>{
     var data=await fetch('http://localhost:3500/customer/orderhistory',{method:'POST',
      headers:{'Content-Type':'application/json',
     "auth-token":auth},
      });
      data=await data.json()
      setItems(data)  
     }

  return (
    <CustomerContext.Provider value={{order,items,profile}}>
      {props.children}
    </CustomerContext.Provider>
    // eslint-disable-next-lin
  );
};

export default CustomerState;
