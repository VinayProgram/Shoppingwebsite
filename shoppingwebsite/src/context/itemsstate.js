import React from "react"; 
import ItemContexT from "./itemscontext";
import { useState as UseState} from "react";
 
const itemstate = (props) => {
  var intial=["dsafad","dasd","dafa"]  
  var buynow=[]
  
  
  
  const fetchitems=async(feature)=>{
    var fetchitem=await fetch('http://localhost:3500/admin/feature/'+feature)
        var gotitems=await fetchitem.json()
        console.log(gotitems)
        setItems(gotitems)
  }
  const[items,setItems]=UseState(intial)
  const[Buynow,SetBuy]=UseState(buynow)

  
  const setprops=async(productid)=>{
    var data=await fetch('http://localhost:3500/admin/finditem/'+productid,{method:'GET',
    headers:{'Content-Type':'application/json'},
    });
    data=await data.json()
    SetBuy(data)
    return data
   }
   
   const category=async(type)=>{
    var data=await fetch('http://localhost:3500/admin/search/'+type,{method:'GET',
    headers:{'Content-Type':'application/json'},
    });
    let condata=await data.json()
    SetBuy(condata)
  }
  
  return (
    <ItemContexT.Provider value={{items,setItems,fetchitems,Buynow,setprops,category}}>
      {props.children}
    </ItemContexT.Provider>
    // eslint-disable-next-lin
  );
};

export default itemstate;
