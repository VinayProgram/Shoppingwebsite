import React from "react"; 
import AdminContexT from "./admincontext";
import { useState as UseState} from "react";
 
const Adminstate = (props) => {
  var intial=["Not logedin"]   
  const[Login,setLogin]=UseState(intial)
  
  function savelogin(logindetails){
    setLogin(logindetails)
  }

  const auth=localStorage.getItem('xyzshoppers')
  const additem=async(productid,productname,price,category,description,stock,image,feature )=>{
     var data=await fetch('http://localhost:3500/admin/additem',{method:'POST',
     headers:{'Content-Type':'application/json',
    "auth-token":auth},
    body:JSON.stringify({productid,productname,price,category,description,stock,image,feature})
     });
     data=await data.json()
     setLogin(data)
     return data  
    }

    const getitem=async()=>{
      console.log("gets")
      var data=await fetch('http://localhost:3500/admin/showitems')
     data=await data.json()
     setLogin(data)
     console.log(data)
     }

     const edititem=async(productid,productname,price,category,stock,description,image,feature)=>{
      var data=await fetch('http://localhost:3500/admin/edititem',{method:'POST',
      headers:{'Content-Type':'application/json',
     "auth-token":auth},
     body:JSON.stringify({productid,productname,price,category,stock,description,image,feature})
      });
      data=await data.json()
      return data  
     }

     const deleteitem=async(productid)=>{
      var data=await fetch('http://localhost:3500/admin/removeitem',{method:'POST',
      headers:{'Content-Type':'application/json',
     "auth-token":auth},
     body:JSON.stringify({productid})
      });
      data=await data.json()
      return data  
     }

  return (
    <AdminContexT.Provider value={{Login,setLogin,savelogin,additem,getitem,edititem,deleteitem}}>
      {props.children}
    </AdminContexT.Provider>
    // eslint-disable-next-lin
  );
};

export default Adminstate;
