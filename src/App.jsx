import React from 'react'
import Header from './pages/Header'
import Main from './pages/Main'
import DataContext from './Context/DataContext'
import Footer from './pages/Footer'
import BasketContext from './Context/BasketContext'

function App() {
  return (
   <> 
   <BasketContext>
     <DataContext>
      <Header/>
      <Main/>
      <Footer/>
   </DataContext>
   </BasketContext>
  
   
   </>
  )
}

export default App
