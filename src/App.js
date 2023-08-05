import React from 'react'
import Layout from './Components/Layout/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Carts from './Components/Carts/Carts'
import Categories from './Components/Categories/Categories'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import About from './Components/About/About'
import Brands from './Components/Brands/Brands'
import Products from './Components/Products/Products'
import Notfound from './Components/Notfound/Notfound'




export default function App() {
let routers=createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'carts',element:<Carts/>},
    {path:'categories',element:<Categories/>},
    {path:'login',element:<Login/>},
    {path:'register',element:<Register/>},
    {path:'about',element:<About/>},
    {path:'brands',element:<Brands/>},
    {path:'products',element:<Products/>},
    {path:'*',element:<Notfound/>},

  ]}])

  return (
<>
<RouterProvider router={routers}></RouterProvider>
</>  )
}
