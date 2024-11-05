import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Form.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import StatusMessage from './StatusMessage';

function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [status, setStatus] = useState({ message: '', type: '' });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/user/register', data);
      setStatus({ message: response.data.message || 'Registered successful!', type: 'success' });
    } catch (error) {
      setStatus({ message: error.response?.data?.message || 'Registration failed!', type: 'error' });
    }
  };

  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => setStatus({ message: '', type: '' }), 4000); // Clear after 4 seconds
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <>
      <StatusMessage message={status.message} type={status.type} />
      <div className="form-container">
        <h2>IA03 - Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className='input-box'>
            <input type="email" placeholder='Email' {...register('email', { required: 'Email is required' })} />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
            <FaUser className='icon' />
          </div>
          <div className='input-box'>
            <input type="text" placeholder='Username' {...register('username', { required: 'Username is required' })} />
            {errors.username && <p className="error-message">{errors.username.message}</p>}
            <FaUser className='icon' />
          </div>
          <div className='input-box'>
            <input type="password" placeholder='Password' {...register('password', { required: 'Password is required' })} />
            {errors.password && <p className="error-message">{errors.password.message}</p>}
            <FaLock className='icon' />
          </div>

          <button type="submit" className="submit-button-register">Register</button>

          <div className='register-link'>
            <p>Already have an account?</p>
            <Link to="/login" className='link-register'>Log In</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegistrationForm;
