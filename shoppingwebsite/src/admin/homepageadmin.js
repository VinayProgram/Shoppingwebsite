import { useContext as UseContext} from "react";
import AdminContext from "../context/admincontext";
import Adminitempage from "./adminitempage";


const homepageadmin = () => {
  if(!localStorage.getItem("xyzshoppers")){alert("please login");window.location.href="http://localhost:3000/admin/adminlogin"}
  var image64;
  const image64base=(e)=>{
    var reader= new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload=()=>{
        image64=reader.result
    }}

    const item=UseContext(AdminContext)
    const {additem}=item
    
    const onadditem=async(e)=>{
      e.preventDefault();
        let productid=document.getElementById("productid").value
        let productname=document.getElementById("productname").value
        let price=document.getElementById("price").value
        let cat=document.getElementById("Category").value
        let desc=document.getElementById("desc").value
        let stock=document.getElementById("stock").value
        let checkbox=document.getElementById("checkbox").value
        var respo=await additem(productid,productname,price,cat,desc,stock,image64,checkbox)
       window.location.reload() 
    }

  return (      
    <>
     <div className="container my-5">
      <div className="card" style={{width: '24rem', display:"inline-flex", }}>
      <div className="mx-3 my-2 form">
      <h3>Additem</h3>
        <form>
          <div className="form-field">
            <input type="text" placeholder="Productid" id="productid" required />
          </div>
          <div className="form-field">
            <input type="text" placeholder="Productname"  id="productname"required />
          </div>
          <div className="form-field">
            <input type="number" placeholder="Amount"  id="price"required />
          </div>

          <div className="form-field mx-3" >
            <select placeholder="Enter Category" id="Category" style={{height:"1cm",width:"8cm"}} required>
              <option value="Tshirt">Tshirt</option>
              <option value="Formals">Formals</option>
              <option value="Jeans">Jeans</option>
              <option value="Shorts">Shorts</option>
              <option value="Hoodiee">Hoodiee</option>
              <option value="Garments">Garments</option>

            </select>
          </div>

          <div className="form-field">
            <input type="Text" placeholder="Description" id="desc" required />
          </div>

          <div className="form-field">
            <input type="number" placeholder="Stock" id="stock" required />
          </div>

          <div className="form-field">
            <input type="file" placeholder="Image" id="image"  onChange={image64base} required />
          </div>
          <div className="mx-5" style={{display:"-webkit-inline-flex"}}>
            <input type="checkbox" placeholder="Feature" value="true" id="checkbox" style={{height:"1cm", width:"1cm"}}></input><label className="mx-3 my-1">Feature product</label>
          </div>
          <br></br>
          <div className="form-field my-2">
            <button className="btn" type="submit" onClick={onadditem}>
            Add item
            </button>
          </div>
        </form>
      </div>
      </div>
      <div className="card mx-5" style={{display:"inline-flex"}}>
<Adminitempage></Adminitempage>
</div>
</div>
</>
  )
}

export default homepageadmin
