import { useContext as UseContext, useEffect as UseEffect } from "react";
import ItemContext from "../context/itemscontext";
import CustomerContext from "../context/customercontext";

const billing = () => {
  const context = UseContext(ItemContext);
  const { setprops, Buynow } = context;
  const Customercontextidea = UseContext(CustomerContext);
  const { order,purchase } = Customercontextidea;
  UseEffect(() => {
    let searc = window.location.search.substring(1);
    let checklogin = localStorage.getItem("Customerlogin");
    if (checklogin === null) {
      window.location.href = "http://localhost:3000/customerlogin?" + searc;
    } else {
      setprops(searc);
    }
  }, []);

  const placeorder=(e)=>{
    e.preventDefault();
    let newemail=document.getElementById("newemail").value
    let Size=document.getElementById("size").value
    let pay=document.getElementById("payment").value
    let contact=document.getElementById("contact").value
    let contact2=document.getElementById("contact2").value
    let address=document.getElementById("address").value
    console.log(newemail,Size,pay,contact,contact2)
    order(newemail,Buynow.productid,Buynow.price,Buynow.productname,Size,pay,contact,contact2,address)
    window.location.href="http://localhost:3000/profile"
  }

  return (
    <div style={{ paddingLeft:"4cm" }}>
      <div className="card mb-3 mx-5 my-3 " style={{ maxWidth: "1000px" }}>
        <div className="row g-0 ">
          <div className="col-md-4">
            <img src={Buynow.image} class="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{Buynow.productname}</h1>
              <h5 className="card-text">{Buynow.description}</h5>
              <h5 className="btn btn-danger">Price{Buynow.price}</h5>
              <h5 className="card-text">productid:-{Buynow.productid}</h5>
              Select the size
              <select
                className="form-select btn btn-dark"
                id="size"
                aria-label="Default select example"
                defaultValue="select the size"
                required
              >
                <option value="xl">xl</option>
                <option value="xxl">XXL</option>
                <option value="s">S</option>
                <option value="l">L</option>
              </select>
            </div>
          </div>
        </div>
      </div>
        <center>
      <div className="card mx-3 my-2" style={{width: '24rem', display:"inline-flex"}}>
      <div className="mx-3 form my-5">
        <form>
          <div className="form-field">
            <input type="text" placeholder="Enter Fullname" id="fullname" required />
          </div>
          <div className="form-field">
            <input type="email" placeholder="Email"  id="newemail"required />
          </div>
          <div className="form-field">
            <input type="number" placeholder="Contact"  id="contact" required  style={{height:"1cm",width:"2xm"}}  />
            <input type="number" placeholder="2Contact"  id="contact2" required style={{height:"1cm",width:"2xm"}}/>
          </div><textarea className="form-control" placeholder="Address" id="address" style={{height: "100px"}}></textarea>
          Select payment Type
              <select
                className="form-select btn btn-dark"
                id="payment"
                aria-label="Default select example"
                defaultValue="select the size"
                required
              >
                <option value="UPI">UPI-PAY</option>
                <option value="Card">Card</option>
                <option value="Cash on delivery">Cash on delivery</option>
                <option value="Kidney">Kidney</option>
              </select>
          <div className="form-field">
            <button className="btn my-3" type="submit" onClick={placeorder}>
              Place Order
            </button>
          </div>
        </form>
      </div>
      </div>
      </center>
      </div>
  );
};

export default billing;
