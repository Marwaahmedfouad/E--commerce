import React, { useState } from 'react'
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
import jwtDecode from 'jwt-decode'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import ProductDetails from './Components/ProductDetails/ProductDetails';



export default function App() {
  const [userData, setuserData] = useState(null)

  function saveUserData() {
    let encodedtoken = localStorage.getItem('userToken');
    let decodedtoken = jwtDecode(encodedtoken);
    setuserData(decodedtoken);
  }

  let routers = createBrowserRouter([
    {
      path: '', element: <Layout userData={userData} />, children: [
        { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path: 'carts', element: <ProtectedRoute><Carts /></ProtectedRoute> },
        { path: 'categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },
        { path: 'login', element: <Login saveUserData={saveUserData} /> },
        { path: 'register', element: <Register /> },
        { path: 'productsDetails/:id', element: <ProtectedRoute><ProductDetails userData={userData} /></ProtectedRoute> },
        { path: 'about', element: <ProtectedRoute><About /></ProtectedRoute> },
        { path: 'brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
        { path: 'products', element: <ProtectedRoute><Products /></ProtectedRoute> },
        { path: '*', element: <ProtectedRoute><Notfound /></ProtectedRoute> },

      ]
    }])

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>)
}
