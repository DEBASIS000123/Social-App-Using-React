import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import Form from './Components/Form'
import MakeCard from './Components/MakeCard'
import { useState } from 'react'
import PostListProvider from './Store/post-list-store'


function App() {
  const [selectedtab,setselectedtab]=useState("Home");


  return (
    <PostListProvider>
    <div className='Main-div'>
      <SideBar selectedtab={selectedtab} setselectedtab={setselectedtab}></SideBar>
      <div className="bodyContent">
      <Header></Header>
        {selectedtab==="Create Post" && <Form></Form>}
        {selectedtab==="Home" && <MakeCard></MakeCard>}
      <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
  )
}

export default App
