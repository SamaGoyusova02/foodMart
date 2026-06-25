import { createContext, useEffect, useState } from "react"
import { getCategory, getData } from "../Services/app"

export const DATA = createContext([])
function DataContext({children}) {
    const [products , setProducts] = useState([])
    const [category , setCategory] = useState([])
    useEffect(() => {
        getData().then(res => setProducts(res)) 
        getCategory().then(res => setCategory(res))
    } , [])
  return (
   <>
    <DATA.Provider value={{products , category}}>
        {children}
    </DATA.Provider>
   </>
  )
}

export default DataContext
