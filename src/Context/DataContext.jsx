import { createContext, useEffect, useState } from "react"
import { getData } from "../Services/app"

export const DATA = createContext([])
function DataContext({children}) {
    const [products , setProducts] = useState([])
    useEffect(() => {
        getData().then(res => setProducts(res)) 
    } , [])
  return (
   <>
    <DATA.Provider value={{products}}>
        {children}
    </DATA.Provider>
   </>
  )
}

export default DataContext
