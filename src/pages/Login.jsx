import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';
import '../styles/Back.css';
import { FaHome } from "react-icons/fa";

function Login() {
  return (
    <div>
      <Link to="/" className="home-button">
        <FaHome className='icon'/>
        <p>Home</p>
      </Link>
      <LoginForm />
    </div>
  );
}

export default Login;
