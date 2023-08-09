import React from 'react'
import styles from './Home.module.css'
import FeatureProduct from '../FeatureProduct/FeatureProduct'
import ProductDetails from '../ProductDetails/ProductDetails'
import CatergoriesSlider from '../CatergoriesSlider/CatergoriesSlider'
export default function Home() {
  return (<>
     {/* <div>Home</div> */}
     <CatergoriesSlider></CatergoriesSlider>
    <FeatureProduct></FeatureProduct>
    {/* <ProductDetails></ProductDetails> */}
  </>
  )
}
