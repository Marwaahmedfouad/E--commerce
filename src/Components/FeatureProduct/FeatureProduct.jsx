import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Products from './../Products/Products';
import CircularProgress from '@mui/material/CircularProgress'; 



export default function FeatureProduct() {
    const [Products, setProducts] = useState([])


    async function getProducts() {
        let { data } = await axios.get('https://route-ecommerce.onrender.com/api/v1/products')
        // .catch((err)=>{console.log(err)})
        // .then((res)=>{console.log(res)})
        console.log(data.data);
        setProducts(data.data)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
        {/* {Products.lenght >0? */}
           <div className='container'>
            <div className='row'>
                {Products.map((p) => <div key={p.id} className='col-md-2'>
                    <Link to={`/productsDetails/${p._id}/`}>
                        <div className='product px-2 py-3'>
                            <img className='w-100' src={p.imageCover} alt=''></img>
                            <div className='text-main fw-bolder font-sm'>{p.category.name}</div>
                            <h1 className='h3 fw-bolder fs-6'>{p.title.split(' ').slice(0, 2).join(' ')}</h1>
                            <div className='d-flex justify-content-between'>
                                <span className='text-muted'>{p.price}EGP</span>
                                <span><i className='fas fa-star rating-color'></i>{p.ratingsAverage}</span>
                            </div>
                            <button className='btn bg-main text-white w-100'>+Add</button>
                        </div>
                    </Link>
                </div>)}

            </div>
            </div>
             {/* : */}
                {/* <div>loading.....</div> */}
                {/* <CircularProgress /> */}
             {/* } */}
        </>)
}
