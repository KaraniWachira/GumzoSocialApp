import React from 'react'
import './styles.css';
import { Link } from 'react-router-dom';

function Login() {

    return (
        <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
            <div className='form-container p-5 rounded bg-white'>
                <form>
                    <h3 className='text-center'>Sign in to Gumzo</h3>
                    <div className='mb-2'>
                        <label htmlFor='username'></label>
                        <input type='username' placeholder='Enter your username' className='form-control' />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor='password'></label>
                        <input type='password' placeholder='Enter your password' className='form-control' />
                    </div>
                    <div className='mb-2'>
                        <input type='checkbox' className='custom-control custom-checkbox' id='check' />
                        <label htmlFor='check' className='custom-input-label ms-2' >
                            Remember me
                        </label>
                    </div>
                    <div className='d-grid'>
                        <p className='text-center mt-2'> Login</p>
                        <button className='btn btn-primary'>Login</button>
                    </div>
                    <p className='text-end mt-2'>
                        Forgot <a href=''>Password?</a>
                        <Link to='/signup' className='ms-2'>Sign up </Link>
                    </p>
                </form>
            </div>

        </div>
    )
}

export default Login