import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import Form from './Components/Form.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import MakeCard from './Components/MakeCard.jsx'

const router=createBrowserRouter([
  {path:"/" , element:<App/>,children:[
    {path:"/" , element:<MakeCard/>},
    {path:"/create-post", element:<Form/>} ,
  ]},
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
