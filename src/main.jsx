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
    path:"/web-porto-2/",
    element:<Home></Home>,
  },
  {
    path:'/web-porto-2/project',
    element:<Project/>
  },
  {
    path:'/web-porto-2/about',
    element:<About/>
  },
  {
    path:'/web-porto-2/contact',
    element:<Contact/>
  }
  
  
     
    
  
  
]

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
