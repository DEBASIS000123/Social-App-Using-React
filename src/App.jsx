import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import SideBar from './Components/SideBar'

function App() {

  return (
    <div className='Main-div'>
      <SideBar></SideBar>
      <div className="bodyContent">
      <Header></Header>
      <Footer></Footer>
      </div>
    </div>
  )
}

export default App
