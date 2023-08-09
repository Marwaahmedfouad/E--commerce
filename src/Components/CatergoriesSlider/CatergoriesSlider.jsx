import React, { useEffect, useState } from 'react';
import styles from './CatergoriesSlider.module.css';
import axios from 'axios';
import Slider from 'react-slick'; // Import the Slider component from react-slick
import staticImage from '../../assets/images/logo.png'
import CircularProgress from '@mui/material/CircularProgress'; 

export default function CatergoriesSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    try {
      let { data } = await axios.get(
        'https://route-ecommerce.onrender.com/api/v1/categories'
      );
      console.log(data.data);
      setCategories(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      {/* {categories.length > 0 ? ( */}
        <Slider {...settings}>
          {categories.map((cat) =>(<div key={cat._id}>{
            cat.image?(              <img className='w-100' height={200} src={cat.image} alt=""></img>
            ):( <img src={staticImage} alt=""></img>)
          }
              <h6>{cat.name}</h6>
            </div>
          ))}
        </Slider>
      {/* ) :( */}
        {/* <div className='text-center'> */}
      
           {/* <CircularProgress />  */}
        {/* </div> */}
       {/* )} */}
    </>
  );
}
