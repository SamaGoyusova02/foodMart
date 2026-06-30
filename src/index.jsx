import { createRoot } from 'react-dom/client'
import './App.css'
import DataContext from './Context/DataContext'
import BasketContext from './Context/BasketContext'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
   <BasketContext>
     <DataContext>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
   </DataContext>
   </BasketContext>
   
)
