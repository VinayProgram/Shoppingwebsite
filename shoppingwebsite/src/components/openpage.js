import { useContext as UseContext, useEffect as UseEffect} from "react";
import ItemContext from "../context/itemscontext"

const openpage = () => {
const context = UseContext(ItemContext);
const {setprops,Buynow,items, fetchitems} = context;

UseEffect(() => {
  let searc=window.location.search.substring(8)
  setprops(searc);
  fetchitems('false');
}, []);

const billing=(e)=>{
  console.log(e.target.name)
window.location.href='http://localhost:3000/customerlogin/billing?'+e.target.name
}

var stock="NA";
if (Buynow.stock>0) {
    stock="Available"
}

const callpage=(item)=>{
  window.location.href="http://localhost:3000/openpage?itemid="+item.target.name
}

const itemsdisplay=(item)=>{
  return(
    <div className="card my-5 mx-3" style={{width: "18rem",display:"inline-flex"}}>
  <img className="card-img-top mx-5" src={item.image} style={{height:"5cm" ,width:"5cm"}}  onClick={callpage} name={item.productid}
     alt="Cardcap"/>
  <div className="card-body">
    <b><p className="card-text">{item.productname}</p></b>
  </div>
</div>
  )
}
return (
  <div>
  <div>
    <div className="mx-3 my-4" style={{backgroundImage:"url(https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-banner-OVERSIZED-POLOS-Final.jpg?format=webp&w=1366&dpr=1.0)",backgroundRepeat:"no-repeat",backgroundPositionY:"10%",backgroundPositionX:"40%",backgroundSize:"80%"}}>
    <img src={Buynow.image} className="img-fluid rounded mx-auto d-block" alt="Responsive" style={{height:"25%" ,width:"25%"}}></img>
      <center>
      <hr style={{color:"black"}}></hr>
      <h1>{Buynow.productname} ({Buynow.category})</h1>
      <h5 className="btn btn-danger">{Buynow.price}.Rs</h5><br></br>
      <select className="form-select btn btn-dark" id="size" aria-label="Default select example" required>
  <option selected>Select Size</option>
  <option value="xl">xl</option>
  <option value="xxl">XXL</option>
  <option value="s">S</option>
  <option value="l">L</option>
</select>
<br></br><br></br>
      <h6 >{Buynow.description}</h6>
      <h6 style={{backgroundColor:"lightgreen", width:"7%",paddingLeft:"1%"}}>{stock}</h6>
      <button className="btn btn-primary" name={Buynow.productid} onClick={billing} >Buy Now</button><button className="btn btn-primary mx-2" >Add Cart</button>
      </center>
      <br></br><br></br><br></br>
      <hr></hr>
    </div>
    </div>
    {items.map((products)=>{
        return itemsdisplay(products)
    })}
    </div>
  )
  }
export default openpage
