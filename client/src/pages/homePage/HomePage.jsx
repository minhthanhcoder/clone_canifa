import React from 'react'
import Header from '../../layouts/components/User/Header/Header'
import SlideBar from '../../layouts/components/User/SlideBar/SlideBar'
import ListProducts from '../../layouts/components/User/ListProducts/ListProducts'
import Footer from '../../layouts/components/User/Footer/Footer'

function HomePage() {
  return (
    <div>
      <Header/>
      <SlideBar/>
      <ListProducts/>
      <Footer/>
    </div>
  )
}

export default HomePage
