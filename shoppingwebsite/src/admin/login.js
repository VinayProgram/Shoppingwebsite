
const login = () => {
  
  const login=async(e)=>{
        e.preventDefault()
        let email=document.getElementById("email").value
        let password=document.getElementById("password").value;
        console.log(email)
        let gettoken=await fetch("http://localhost:3500/admin/login",{method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({email,password}) 
      })
        let logindetails=await gettoken.json();
        if(!logindetails){alert("please enter valid details")}
        else{  
          localStorage.setItem("xyzshoppers",logindetails)
          window.location.href="http://localhost:3000/admin/adminlogin/homepageadmin"
        }
      }
    
      const signup=async(e)=>{
        e.preventDefault()
        let name=document.getElementById("username").value
        let email=document.getElementById("newemail").value
        let password=document.getElementById("genpassword").value;
        let confirmpass=document.getElementById("confirmpass").value;
        if(password===confirmpass)
        {
        let gettoken=await fetch("http://localhost:3500/admin/signup",{method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({name,email,password}) 
      })
        let logindetails=await gettoken.json();
        if(!logindetails.authtoken){alert("please enter valid details")}
        else{
          console.log(logindetails.authtoken)
          localStorage.setItem('token',logindetails.authtoken)
          alert("you can now login with the following details" + email)     
        }
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

export default login
