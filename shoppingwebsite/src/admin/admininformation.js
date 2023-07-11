import React from 'react'
import { useContext as UseContext, useEffect as UseEffect}  from "react"
import ItemContext from "../context/itemscontext"

const admininformation = () => {
    const image64base=(e)=>{
        var reader= new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload=()=>{
            console.log(reader.result)
        }}

  return (
    <div>
       
       </div>
  )
}

export default admininformation

