import Category from './category'
import Items from './items'
const homepage = () => {
  return (
    <div>
    <Items></Items>
    <hr></hr>
    <marquee><h1> Categories</h1></marquee>
    <Category></Category>
    </div>
  )
}

export default homepage