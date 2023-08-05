import React from 'react'
import styles from './Register.module.css'
import { useFormik } from 'formik'
import *  as yup from 'yup'
export default function Register() {


  let validation = yup.object({
    name: yup.string().required('name is required').min(3, 'name minlength is 3').max(12, 'name maxlength is 12 '),
    email: yup.string().required('email is required').email('email is invalid'),
    password: yup.string().required('password is required').matches(/^[a-z0-9]{2,6}$/, 'Invalid password'),
    rePassword: yup.string().required('rePassword is required').oneOf([yup.ref('password')], 'Passwords must match'),
    phone: yup.string().required('phone is tequired').matches(/^01[0125][0-9]{8}$/,'Invalid number')

  })

  function hadelRegister(value) {
    console.log('......');
    console.log(value);

  }
  let formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
      rePassword: ''
    },
    validationSchema:validation,
    onSubmit: hadelRegister
  });

  return (<>
    <div className='w-75 mx-auto py-4'>
      <form onSubmit={formik.handleSubmit}>

        <label htmlFor='name'>name</label>
        <input className='form-control mb-2' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} type='text' name='name' id='name' ></input>
        {formik.errors.name && formik.touched.name ? <div className='alert alert-danger'>{formik.errors.name}</div> : null}


        <label htmlFor='email'>email</label>
        <input className='form-control mb-2' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type='email' name='email' id='email'></input>
        {formik.errors.email && formik.touched.email ? <div className='alert alert-danger'>{formik.errors.email}</div> : null}


        <label htmlFor='phone'>phone</label>
        <input className='form-control mb-2' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} type='tel' name='phone' id='phone'></input>
        {formik.errors.phone && formik.touched.phone ? <div className='alert alert-danger'>{formik.errors.phone}</div> : null}


        <label htmlFor='password'>password</label>
        <input className='form-control mb-2' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type='password' name='password' id='password'></input>
        {formik.errors.password && formik.touched.password ? <div className='alert alert-danger'>{formik.errors.password}</div> : null}


        <label htmlFor='rePassword'>rePassword</label>
        <input className='form-control mb-2' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePassword} type='password' name='rePassword' id='rePassword'></input>
        {formik.errors.rePassword && formik.touched.rePassword ? <div className='alert alert-danger'>{formik.errors.rePassword}</div> : null}

        <button className='btn bg-main text-white text-center' type='submite'> Register </button>

      </form>

    </div>


  </>
  )
}
