import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';

import Home from './pages/home'
import Project from './pages/project'
import About from './pages/About'
import Contact from './pages/Contact'



import './index.css'


const router = createBrowserRouter([
  {
    path:"/deploy-percobaan/",
    element:<Home></Home>,
    },
  {
    path:"/deploy-percobaan/project",
    element:<Home></Home>,
    },

 
  
  
     
    
  
  
]

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
