// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";

// export default function ProductDetails() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

//   const { id } = useParams();
//   const [productDetails, setProductDetails] = useState({});

//   async function getProductDetails(id) {
//     try {
//       const { data } = await axios.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`);
//       setProductDetails(data.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   useEffect(() => {
//     getProductDetails(id);
//   }, [id]);

//   return (
//     <div className='container'>
//       <div className='row'>
//         <div className='col-md-4'>
          
//             <Slider {...settings}>
//               {productDetails?.images.map((img) => <img src={img} alt='' />)}
//             </Slider>
        
          
//         </div>
//         <div className='col-md-8 d-flex' style={{ alignHeight: 'center', alignItems: 'center', lineHeight: '40px' }}>
//           <div className='d-flex flex-column align-items-star justify-center'>
//             <h2 className='fw-bolder text-primary'>title: {productDetails.title}</h2>
//             <div className='fw-bolder'>quantity: {productDetails.quantity}</div>
//             <div className='fw-bolder'>price: {productDetails.price}EGP</div>
//             <div className='fw-bolder'>Rate: <i className='fas fa-star rating-color'></i> {productDetails.ratingsAverage}</div>
//             <button className='btn bg-main text-white'>+Add</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
//////////////////////////////////////////////////////////
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import CircularProgress from '@mui/material/CircularProgress'; 

export default function ProductDetails() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});

  async function getProductDetails(id) {
    try {
      const { data } = await axios.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`);
      setProductDetails(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          {productDetails.images && productDetails.images.length > 0 ? (
            <Slider {...settings} style={{ paddingTop: '20px', paddingBottom: '20px' }}>
            {productDetails.images.map((img) => <img key={img} src={img} alt='' />)}
          </Slider>
          ) : (
            <div className='text-center'>
            {/* <i class="fas fa-spinner fa-spin"></i> */}
                 {/* <div>loading.....</div> */}
                <CircularProgress /> 
             </div>           
              // <p>No images available</p>
          )}
        </div>
        <div className='col-md-8 d-flex' style={{ alignHeight: 'center', alignItems: 'center', lineHeight: '40px' }}>
          <div className='d-flex flex-column align-items-star justify-center'>
            <h2 className='fw-bolder text-primary'>title: {productDetails.title}</h2>
            <div className='fw-bolder'>quantity: {productDetails.quantity}</div>
            <div className='fw-bolder'>price: {productDetails.price}EGP</div>
            <div className='fw-bolder'>Rate: <i className='fas fa-star rating-color'></i> {productDetails.ratingsAverage}</div>
            <button className='btn bg-main text-white'>+Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}
