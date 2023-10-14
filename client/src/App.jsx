import { useState } from 'react'
import './App.css'
import HomePage from './pages/homePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/carts/Cart'

function App() {

  return (
    <>
    <Routes>
      <Route path='/home' element = {<HomePage/>} />
      <Route path='/cart' element = {<Cart/>} />
    </Routes>
    </>
  )
}

export default App
