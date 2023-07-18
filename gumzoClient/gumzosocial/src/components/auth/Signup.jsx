import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup (){
  // create different states required
const [FirstName, setFirstName] = useState('');
const [LastName, setLastName] = useState('');
const [UserName, setUserName] = useState('');
const [UserAge, setUserAge] = useState('');
const [UserEmail, setUserEmail] = useState('');
const [UserPassword, setUserPassword] = useState('');


const registrationData = {
  FirstName: FirstName,
  LastName: LastName,
  UserName: UserName,
  UserAge: UserAge,
  UserEmail: UserEmail,
  UserPassword: UserPassword
}; 

const fetchData = () => {
  fetch('http://localhost:5000/users/signup', {
    method: 'POST',
    headers: {  
      'Content-Type': 'application/json', 
  },
  body: JSON.stringify(registrationData)
  })
  .then(res => res.json())
  .then(json => { 
    console.log(json)
    setResponse(json)
  })
  .catch(err => console.log(err))

}

  return (
    <div className='signup template d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <div className='form-container p-5 rounded bg-white'>
        <form>
          <h3 className='text-center'>Sign up to Gumzo</h3>

          <div className='mb-2'>
            <label htmlFor='firstname'></label>
            <input type='firstname' placeholder='firstname' className='form-control' />
          </div>

          <div className='mb-2'>
            <label htmlFor='secondname'></label>
            <input type='lastname' placeholder='last name' className='form-control' />
          </div>

          <div className='mb-2'>
            <label htmlFor='username'></label>
            <input type='username' placeholder='username' className='form-control' />
          </div>

          <div className='mb-2'>
            <label htmlFor='usersage'></label>
            <input type='userage' placeholder='Age' className='form-control' />
          </div>

          <div className='mb-2'>
            <label htmlFor='email'></label>
            <input type='email' placeholder='email' className='form-control' />
          </div>

          <div className='mb-2'>
            <label htmlFor='password'></label>
            <input type='password' placeholder='password' className='form-control' />
          </div>
          <div className='mb-2'>
            <input type='checkbox' className='custom-control custom-checkbox' id='check' />
            <label htmlFor='check' className='custom-input-label ms-2' >
              Accept terms & conditions
            </label>
          </div>
          <div className='d-grid'>
            <button className='btn btn-primary'> Register</button>
          </div>
          <p className='text-end mt-2'>
            Already have an account
            <Link to='/' className='ms-2'>Login </Link>
          </p>
        </form>
      </div>

    </div>
  )
}

export default Signup