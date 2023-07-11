import React from 'react'

const category = () => {
  
  const Opencat=(e)=>{
    e.preventDefault();
    console.log(e.target.id)
    window.location.href="http://localhost:3000/category?itemid="+e.target.id;
  }


  return (
         <>
         <div className="row">
  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="https://assets.ajio.com/medias/sys_master/root/20220602/tJ2g/6298a1a8aeb26921af07c99a/-1117Wx1400H-464357477-multi-MODEL.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water" onClick={Opencat} id="Tshirt"
    />
    <img
      src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1677939250_4841206.jpg?format=webp&w=376&dpr=1.0"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape" onClick={Opencat} id="Shorts"
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://www.brooktaverner.co.uk/media/catalog/category/lifestyle-category/White-Shirts.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds" onClick={Opencat} id="Formals"
    />

    <img
      src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1677768423_8104638.jpg?format=webp&w=376&dpr=1.0"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water" onClick={Opencat} id="Hoodiee"
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1618669754_6818995.png?format=webp&w=376&dpr=1.0"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea" onClick={Opencat} id="Jeans"
    />


    <img
      src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/Monster-Pattern--Solids-Space-Pattern-Black-Pack-of-32023_04_21-14-48-14.jpg?format=webp&w=376&dpr=1.0"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park" onClick={Opencat} id="Garments"
    />
  </div>
</div>
    
    </>
    )
}

export default category
