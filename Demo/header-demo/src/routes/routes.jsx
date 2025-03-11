import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../page/home'
import Products from '../page/products'
import MainLayout from '../layout/mainLayout'
const routes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<MainLayout page={<Home/>}></MainLayout>}/>
            <Route path='products' element={<MainLayout page={<Products/>}></MainLayout>}/>
        </Routes>
    </div>
  )
}

export default routes