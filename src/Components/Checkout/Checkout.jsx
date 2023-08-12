import React from 'react';
import styles from './Checkout.module.css';
import { useFormik } from 'formik';
import { useContext } from 'react';
import { cartContext } from '../../Context/Cartcontext';


export default function Checkout() {

  let {onlinepayment}= useContext(cartContext);

  async function handlesubmit(values){
    // 64089faf24b25627a25315cd
    let response = await onlinepayment('642c067c7e8abe57d5254f57',values);
    // if(response.data.status === 'success')

  console.log(values);
  console.log(response);
  }
let formik= useFormik({
  initialValues:{
    datails:'',
    city:'',
    phone:''
    
  },
onSubmit:handlesubmit
  },)
  return (
<>
<div className='w-50 py-5 mx-auto'>
<form onSubmit={formik.handleSubmit}>
<label htmlFor='datails'> details: </label>
<input type='text' className='form-control mb-3' onChange={formik.handleChange} value={formik.values.datails} name='datails' id='datails'></input>
<label htmlFor='city'> city: </label>
<input type='text' className='form-control mb-3' onChange={formik.handleChange} value={formik.values.city} name='city' id='city'></input>
<label htmlFor='phone'>phone:</label>
<input type='tel' className='form-control mb-3' onChange={formik.handleChange} value={formik.values.phone} name='phone' id='phone'></input>
<button type='submit' className='btn bg-main text-white'>pay</button>
</form>
</div>

</>  )
}
