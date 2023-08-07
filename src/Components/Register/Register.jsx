import React, { useState } from 'react';
import styles from './Register.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const Register = () => {

    let navigate = useNavigate()
    const [isloading, setisloading] = useState(false);
    const [msgError, setmsgError] = useState('')
    async function handleRegister(values) {
        setisloading(true);
        let { data } = await axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signup', values)
            .catch((err) => {
                setmsgError(`${err.response.data.statusMsg}:${err.response.data.message}`);
                console.log(err);
                console.log(msgError);
            })
            console.log(data);
        if (data.message === 'success') {
            console.log('success');
            navigate('/login');
            setisloading(false)
        }
    }


    let validationSchema = Yup.object({
        name: Yup.string().required('name is required').min(3, "Name min length is 3 ").max(20, "Name max length is 20 "),
        email: Yup.string().required('email is required').email("Email is invalid "),
        password: Yup.string().required('Password is required').matches(/^[A-Z][a-z0-9]{5,10}$/, "Password must start with uppercase - then from 5 to 10 numbers or letters "),
        rePassword: Yup.string().required('rePassword is required').oneOf([Yup.ref('password')], "Password and repassword doesn't match"),
        phone: Yup.string().required('rePassword is required').matches(/^01[0125][0-9]{8}$/, "Phone must be EGY number")
    })


    let formik = useFormik({

        initialValues: {
            name: '',
            phone: '',
            email: '',
            password: '',
            rePassword: ''
        },
        validationSchema
        ,
        onSubmit: handleRegister
    })


    return (

        <div className='w-75 mx-auto py-4'>
            <h3>Register Now : </h3>
            <form id='registerForm' onSubmit={formik.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input className={`form-control mb-2 ${styles.formControl}   ${formik.errors.name && formik.touched.name ? 'border-danger' : ''} `} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} type='text' name='name' id='name'></input>
                {formik.errors.name && formik.touched.name ? <p className='text-danger'>{formik.errors.name}</p> : ''}


                <label htmlFor='email'>Email</label>
                <input className={`form-control mb-2 ${styles.formControl}  ${formik.errors.email && formik.touched.email ? 'border-danger' : ''} `} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type='email' name='email' id='email'></input>
                {formik.errors.email && formik.touched.email ? <p className='text-danger'>{formik.errors.email}</p> : ''}



                <label htmlFor='password'>Password</label>
                <input className={`form-control mb-2 ${styles.formControl}  ${formik.errors.password && formik.touched.password ? 'border-danger' : ''} `} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type='password' name='password' id='password'></input>
                {formik.errors.password && formik.touched.password ? <p className='text-danger'>{formik.errors.password}</p> : ''}


                <label htmlFor='rePassword'>rePassword</label>
                <input className={`form-control mb-2 ${styles.formControl}  ${formik.errors.rePassword && formik.touched.rePassword ? 'border-danger' : ''} `} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} type='password' name='rePassword' id='rePassword'></input>
                {formik.errors.rePassword && formik.touched.rePassword ? <p className='text-danger'>{formik.errors.rePassword}</p> : ''}


                <label htmlFor='phone'>Phone</label>
                <input className={`form-control mb-2 ${styles.formControl}  ${formik.errors.phone && formik.touched.phone ? 'border-danger' : ''} `} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} type='tel' name='phone' id='phone'></input>
                {formik.errors.phone && formik.touched.phone ? <p className='text-danger'>{formik.errors.phone}</p> : ''}


                {isloading ? <button className='btn bg-main text-white'><i class="fas fa-spinner fa-spin"></i></button> : <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-main text-white'>Register</button>}
                {msgError.length >0 ? <p className='text-danger'>{msgError}</p> :null}
            </form>
        </div>
    );
}

export default Register;