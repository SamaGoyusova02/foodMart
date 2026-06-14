import React from 'react'
import Header from './pages/Header'
import Main from './pages/Main'
import DataContext from './Context/DataContext'
import Footer from './pages/Footer'

function App() {
  return (
   <> 
   <DataContext>
      <Header/>
      <Main/>
      <Footer/>
   </DataContext>
   
   </>
  )
}

export default App
