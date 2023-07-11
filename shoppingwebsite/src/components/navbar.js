
const navbar = () => {

  const Opencat=(e)=>{
    e.preventDefault();
    let a=document.getElementById("type").value
    console.log(a)
    window.location.href="http://localhost:3000/category?itemid="+a;
  }

  const logout=()=>{
    localStorage.removeItem("Customerlogin")
    window.location.reload()
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/" ><b><i>Outwear Clothing</i></b></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/"><i>Clothes Lobby</i></a>
      </li>
      
      <li className="nav-item active">
        <a className="nav-link" href="http://localhost:3000/category?itemid=Tshirt"><i>Tshirts</i></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="http://localhost:3000/category?itemid=Formals"><i>Formals</i></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="http://localhost:3000/category?itemid=Jeans"><i>Jeans</i></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="http://localhost:3000/category?itemid=Shorts"><i>Shorts</i></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="http://localhost:3000/category?itemid=Garments"><i>Garments</i></a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Userprofile
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="http://localhost:3000/customerlogin">Login</a>
          <a className="dropdown-item" href="http://localhost:3000/profile">Profile</a>
          <button className=" dropdown-item btn btn-danger" onClick={logout}>Logout</button>    
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/">Contact</a>
        </div>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search"  id="type" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={Opencat}>Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}

export default navbar
