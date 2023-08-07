
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slider from "react-slick";

export default function ProductDetails() {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  let allparams = useParams();
  // let allparams = useParams();
  let { id } = useParams();
  const [productDetails, setproductDetails] = useState({})
  console.log(allparams);
  async function getproductDetails(id) {
    let { data } = await axios.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`);
    console.log(data.data);
    setproductDetails(data.data)
  }
  useEffect(() => {
    getproductDetails(id)
  }, [])
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <img className='w-100 shadow my-3 gap-5 rouded' src={productDetails.imageCover} alt=''></img>
        </div>
        <div className='col-md-8 d-flex  ' style={{alignHeight:'center',alignItems:'center',lineHeight:'40px'}}>
          <div className='d-flex flex-column align-items-star  justify-center'>
          <h2 className='fw-bolder text-primary'>title{productDetails.title}</h2>
          {/* <div className='fw-bolder'>brandName :{productDetails.brand.name}</div> */}
          {/* <div className='fw-bolder'>category :{productDetails.category.name}</div> */}
          <div className='fw-bolder'>quantity : {productDetails.quantity}</div>
          <div className='fw-bolder'>price : {productDetails.price}EGP</div>
          <div className='fw-bolder'>Rate: <i className='fas fa-star rating-color'></i> {productDetails.ratingsAverage}</div>
          <button className='btn bg-main text-white'> +Add</button>
          </div>
          </div>

        </div>
      </div>

      import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </>)
}