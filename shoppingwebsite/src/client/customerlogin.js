const Cutomerlogin = () => {
  
  const login=async(e)=>{
    e.preventDefault()
        let email=document.getElementById("email").value
        let password=document.getElementById("password").value;
        let gettoken=await fetch("http://localhost:3500/customer/login",{method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({email,password}) 
      })
        let logindetails=await gettoken.json();
        console.log(logindetails)
        if(logindetails==="incorrect details"){alert("please enter valid details")}
        else{  
          localStorage.setItem("Customerlogin",logindetails)
          let searc=window.location.search
          console.log(searc)
          if(!searc)
          {
            console.log("noid")
            window.location.href="http://localhost:3000/"
          }  
          else{
            console.log("i win")
            let searc=window.location.search.substring(1)
            window.location.href="http://localhost:3000/customerlogin/billing?"+searc 
          }
        }
      }
    
      const signup=async(e)=>{
        e.preventDefault()
        let name=document.getElementById("username").value
        let email=document.getElementById("newemail").value
        let address=document.getElementById("address").value;
        let contact=document.getElementById("contact").value;
        let password=document.getElementById("genpassword").value;
        let confirmpass=document.getElementById("confirmpass").value;
        
        
        if(password===confirmpass)
        {
        let gettoken=await fetch("http://localhost:3500/customer/signup",{method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({name,email,address,contact,password}) 
      })
        let logindetails=await gettoken.json();
         console.log(logindetails)
          alert("you can now login with the following details" + email)     
      }else{alert("You password doesnot match")}
      }

      return (
    <div>
      <div className="container my-4 App">
      <div className="card mx-3 my-2" style={{width: '24rem', display:"inline-flex"}}>
      <h3>Login</h3>
      <div className="mx-3">
        <form className="form">
          <div className="form-field">
            <input type="email"  id="email"placeholder="Email / Username" required />
          </div>
          <div className="form-field">
            <input type="password" id="password" placeholder="Password" required />{" "}
          </div>
          <div className="form-field">
            <button className="btn" type="submit" onClick={login}>
              Log in
            </button>
          </div>
        </form>
        </div>
      </div>



      <div className="card mx-3 my-2" style={{width: '24rem', display:"inline-flex"}}>
      <h3>Signup</h3>
      <div className="mx-3 form">
        <form>
          <div className="form-field">
            <input type="text" placeholder="Username" id="username" required />
          </div>
          <div className="form-field">
            <input type="email" placeholder="Email"  id="newemail"required />
          </div>
          <div className="form-field">
            <input type="number" placeholder="Contact"  id="contact" required />
          </div><textarea className="form-control" placeholder="Address" id="address" style={{height: "100px"}}></textarea>
          <div className="form-field my-3">
            <input type="password" placeholder="Create Password"  id="genpassword"required />
          </div>

          <div className="form-field">
            <input type="password" placeholder="Confirm Password" id="confirmpass" required />
          </div>
          <div className="form-field">
            <button className="btn" type="submit" onClick={signup}>
              signup
            </button>
          </div>
        </form>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Cutomerlogin
