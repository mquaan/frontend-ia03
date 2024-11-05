import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to User Registration System - 21127143</h1>
      <p>Already have an account? Log in below.</p>
      <Link to="/login" className="button login-button">Log In</Link>
      
      <p>Don&apos;t have an account? Register now.</p>
      <Link to="/register" className="button register-button">Register</Link>
    </div>
  );
}

export default Home;
