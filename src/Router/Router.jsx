import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from '../Layout/Layout'
import Main from '../pages/Main'
import Detail from '../pages/Detail'

function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path='/products/:slug' element={<Detail/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default Router
