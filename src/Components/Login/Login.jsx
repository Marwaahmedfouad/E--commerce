import React, { useState } from 'react';
import styles from './Login.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/images/freshcart-logo.svg'



const Login = ({ saveUserData }) => {
    console.log(saveUserData);

    let navigate = useNavigate()
    const [isloading, setisloading] = useState(false);
    const [msgError, setmsgError] = useState('')
    async function handleLogin(values) {
        setisloading(true);
        let { data } = await axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signin', values)
            .catch((err) => {
                setmsgError(`${err.response.data.statusMsg}:${err.response.data.message}`);
                console.log(err);
                console.log(msgError);
            })
        console.log(data);
        if (data.message === 'success') {
            localStorage.setItem('userToken', data.token)
            saveUserData()
            console.log('success');
            navigate('/');
            setisloading(false);
        }
    }


    let validationSchema = Yup.object({
        email: Yup.string().required('email is required').email("Email is invalid "),
        password: Yup.string().required('Password is required').matches(/^[A-Z][a-z0-9]{5,10}$/, "Password must start with uppercase - then from 5 to 10 numbers or letters "),
    })


    let formik = useFormik({

        initialValues: {
            email: '',
            password: ''
        },
        validationSchema
        ,
        onSubmit: handleLogin
    })


    return (<>
{/* <div className='d-flex'> */}

        {/* <div className='col-md-4  py-4'> */}
{/* <img src={image} alt='' width={100}></img> */}
        {/* </div> */}
        <div className='col-md-8  m-auto border rounded p-4 m-2'>
            <h3>Login Now : </h3>
            <form id='LoginForm' onSubmit={formik.handleSubmit}>



                <label htmlFor='email'>Email</label>
                <input className={`form-control mb-2 ${styles.formControl}  ${formik.errors.email && formik.touched.email ? 'border-danger' : ''} `} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type='email' name='email' id='email'></input>
                {formik.errors.email && formik.touched.email ? <p className='text-danger'>{formik.errors.email}</p> : ''}



                <label htmlFor='password'>Password</label>
                <input className={`form-control mb-2 ${styles.formControl}  ${formik.errors.password && formik.touched.password ? 'border-danger' : ''} `} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type='password' name='password' id='password'></input>
                {formik.errors.password && formik.touched.password ? <p className='text-danger'>{formik.errors.password}</p> : ''}


                {isloading ? <button className='btn bg-main text-white'><i class="fas fa-spinner fa-spin"></i></button> : <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-main text-white'>Login</button>}
                {msgError.length > 0 ? <p className='text-danger'>{msgError}</p> : null}
            </form>
        </div>
        {/* </div> */}

    </>
    );
}

export default Login;