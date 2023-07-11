import React, { useContext as UseContext, useEffect as UseEffect } from "react";
import AdminContext from "../context/admincontext";
const adminitempage = () => {
  const context = UseContext(AdminContext);
  const { getitem, Login ,edititem,deleteitem} = context;

  UseEffect(() => {
    getitem();
  }, []);

  var image64;
  const image64base=(e)=>{
    var reader= new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload=()=>{
        image64=reader.result
    }
  }

  const edit=(e)=>{
    let edit=document.getElementById(e.target.id)
    let updatebutn=document.getElementById(e.target.id+658)
    let productname=document.getElementById(e.target.id+1)
    let price=document.getElementById(e.target.id+2)
    let stock=document.getElementById(e.target.id+3)
    let category=document.getElementById(e.target.id+4)
    let image=document.getElementById(e.target.id+5)
    let imageinput=document.getElementById(e.target.id+235)
    let desc=document.getElementById(e.target.id+6)
    let feature=document.getElementById(e.target.id+69)
    
    productname.outerHTML="<input type='text' placeholder="+productname.innerText+" id="+e.target.id+11+"></input>"
    price.outerHTML="<input type='number' placeholder="+price.innerText+"  id="+e.target.id+22+"></input>"
    stock.outerHTML="<input type='text' placeholder="+stock.innerText+" id="+e.target.id+33+"></input>"
    category.outerHTML="<input type='text' placeholder="+category.innerText+" id="+e.target.id+44+"></input>"
    desc.outerHTML="<textarea type='text' placeholder="+ desc.innerText+" id="+e.target.id+66+"></textarea>"
    feature.outerHTML="<select placeholder='feature' id="+e.target.id+70+"><option value='true'>yes</option><option value='false'>no</option></select>"
    
    image.style.visibility="hidden"
    imageinput.style.visibility="visible"
    edit.style.visibility="hidden"
    updatebutn.style.visibility="visible"
    
  }

  const update=async(e)=>{
    let productname=document.getElementById(e.target.name+11).value
    let price=document.getElementById(e.target.name+22).value
    let stock=document.getElementById(e.target.name+33).value
    let category=document.getElementById(e.target.name+44).value
    let desc=document.getElementById(e.target.name+66).value
    let feature=document.getElementById(e.target.name+70).value
    console.log(feature)
    console.log()  
    let info=await edititem(e.target.name,productname,price,category,stock,desc,image64,feature)
    if(info.acknowledged===true)
    {
      window.location.reload()
    }
    else(alert(info))
  }

  const delet=async(e)=>{
    let info=await deleteitem(e.target.name)
    if(info.acknowledged===true)
    {
      window.location.reload()
    }
    else(alert(info))
      
  }


  function showcase(item) {
    return (
      <div className="card my-2" style={{ width: "36rem" }}>
        <h6 className="card-header">
          <label>Id:-{item.productid}</label>
          <label id={item.productid+1} className="mx-5">ProductName:-{item.productname}</label>
        </h6>
        <div className="card-body" style={{ display: "inline-flex" }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h6 id={item.productid+2}>Price:-{item.price}</h6>
            </li>
            <li className="list-group-item">
              <h6 id={item.productid+3}> Stock:-{item.stock}</h6>
            </li>
            <li className="list-group-item">
              <h6 id={item.productid+4}>Category:-{item.category}</h6>
            </li>
            <li className="list-group-item">
              <h6 id={item.productid+69}>featured:-{item.featured}</h6>
            </li>
          </ul>
          <img  id={item.productid+5}src={item.image} alt="ad" style={{ height: "5cm", width: "5cm" }}></img>
          <p className="card-text" id={item.productid+6}>
            {item.description}
          </p>
        </div>
        <div className="container mx-2">
        <input type="file" id={item.productid+235} style={{visibility:"hidden"}} onChange={image64base}></input>
        <button className="btn btn-dark" name={item.productid} id={item.productid} onClick={edit} style={{visibility:"visible"}}>
         edit
        </button>
        <button className="btn btn-dark mx-2" onClick={delet} name={item.productid}>
         Delete
        </button>
        <button id={item.productid+658} className="btn btn-dark" name={item.productid}  onClick={update} style={{visibility:"hidden"}}>
         update
        </button>        
              </div>
        </div>
    );
  }

  return (
    <>
      {Login.map((item) => {
        return showcase(item);
      })}
    </>
  );
};
export default adminitempage;
