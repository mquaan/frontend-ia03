import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Form.css';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import StatusMessage from './StatusMessage';

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [status, setStatus] = useState({ message: '', type: '' });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', data);
      setStatus({ message: response.data.message || 'Login successful!', type: 'success' });
    } catch (error) {
      setStatus({ message: error.response?.data?.message || 'Login failed', type: 'error' });
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
        <h2>IA03 - Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className='input-box'>
            <input type="text" placeholder='Email or username' {...register('identifier', { required: 'Email/usename is required' })} />
            <FaUser className='icon' />
            {errors.identifier && <p className="error-message">{errors.identifier.message}</p>}
          </div>

          <div className="input-box">
            <input type="password" placeholder='Password' {...register('password', { required: 'Password is required' })} />
            <FaLock className='icon' />
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>
          
          <button type="submit" className="submit-button-login">Log In</button>
          <div className='register-link'>
            <p> Don&apos;t have an account?</p>
            <Link to="/register" className='link-login'>Register</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
