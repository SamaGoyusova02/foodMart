import React, { createContext, useState } from 'react'
export const BASKET = createContext([])
function BasketContext({children}) {
    const [sebet , setSebet] = useState([])
    
    function AddBasket(id , title , image , price){
       setSebet(prevSebet => {
        const existItem = prevSebet.find(item => item.id == id)
        if(existItem){
          return prevSebet.map(item => item.id == id ? {...item , count : item.count + 1} : item)
        }
        else{
          return [...prevSebet , { id, title, image, price, count: 1 }]
        }
       })
    }
    function Increase(id){
      setSebet(prevSebet => prevSebet.map(item => item.id == id ? {...item , count : item.count + 1 } : item))
    }
   function Decrease(id) {
      setSebet(prevSebet => 
        prevSebet.map(item => {
          if (item.id == id) {
            return { ...item, count: item.count > 1 ? item.count - 1 : 1 }
          }
          return item
    })
  )
}
function removeItem(id){
  setSebet(prevSebet => prevSebet.filter(item => item.id != id))
}
  return (
    <div>
      <BASKET.Provider value={{AddBasket , sebet , Increase , Decrease , removeItem}}>
        {children}
      </BASKET.Provider>
    </div>
  )
}

export default BasketContext

