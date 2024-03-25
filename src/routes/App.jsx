import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import SideBar from '../Components/SideBar'
import Form from '../Components/Form'
import MakeCard from '../Components/MakeCard'
import { useState } from 'react'
import PostListProvider from '../Store/post-list-store'
import { Outlet } from 'react-router-dom'


function App() {


  return (
    <PostListProvider>
    <div className='Main-div'>
      <SideBar></SideBar>
      <div className="bodyContent">
      <Header></Header>
        <Outlet/>
      <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
  )
}

export default App
