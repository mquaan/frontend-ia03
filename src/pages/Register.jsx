import RegistrationForm from '../components/RegistrationForm';
import { Link } from 'react-router-dom';
import '../styles/Back.css';
import { FaHome } from "react-icons/fa";

function Register() {
  return (
    <div>
      <Link to="/" className="home-button">
        <FaHome className='icon'/>
        <p>Home</p>
      </Link>
      <RegistrationForm />
    </div>
  );
}

export default Register;
