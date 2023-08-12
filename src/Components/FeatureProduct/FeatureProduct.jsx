import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { cartContext } from '../../Context/Cartcontext';
import { toast } from 'react-hot-toast';
export default function FeatureProduct() {
    let { addtocart } = useContext(cartContext);
    console.log(addtocart);
    async function addproduct(productid) {
        let response=await addtocart(productid);
        console.log(response);
        if(response.data.status ==='success'){
            toast.success(response.data.message ,{duration:2000})
            console.log(response);
        }else{
            toast.error('error',{duration:2000})
        }
    }
    const [products, setproducts] = useState([])
    async function getProducts() {
        let { data } = await axios.get('https://route-ecommerce.onrender.com/api/v1/products')
        console.log(data.data);
        setproducts(data.data)
    }
    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            {products.length > 0 ? (
                <div className='container my-5'>
                    <div className='row'>
                        {products.map((p) => <div key={p.id} className='col-md-2'>
                                <div className='product  cursor-pointer px-2 py-3'>
                            <Link className='text-decoration-none' to={`/productsDetails/${p._id}/`}>
                                    <img className='w-100' src={p.imageCover} alt=''></img>
                                    <div className='text-main fw-bolder font-sm'>{p.category.name}</div>
                                    <h1 className='h3 fw-bolder fs-6'>{p.title.split(' ').slice(0, 2).join(' ')}</h1>
                                    <div className='d-flex justify-content-between'>
                                        <span className='text-muted'>{p.price}EGP</span>
                                        <span><i className='fas fa-star rating-color'></i>{p.ratingsAverage}</span>
                                    </div>
                            </Link>
                    <button onClick={()=>addproduct(p._id)} className='btn bg-main text-white w-100'>+Add</button>
                                </div>
                        </div>)}

                    </div>
                </div>)
                : (
                    <div className='text-center'>
                        {/* <i class="fas fa-spinner fa-spin"></i> */}
                        {/* <div>loading.....</div> */}
                        <CircularProgress />
                    </div>
                )}
        </>)
}
