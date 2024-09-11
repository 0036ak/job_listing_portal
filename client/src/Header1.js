import { Link } from 'react-router-dom';
import './Header.css';
import logo from './job.png';
import Login from './components/login.component';
import Signup from './components/signup.component';

function Header1()
{
    return(
        <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="site-title">Job Portal</span>
      </div>
      <nav className="header-nav">
        <a href=" " className="nav-item"><Link to="/">Home</Link></a>
        <a href=" " className="nav-item"><Link to="/Jobs">Jobs</Link></a>
        <a href=" " className="nav-item">About Us</a>
        <a href=" " className="nav-item">Contact Us</a>
      </nav>
      <div className="header-right">
        <Link to="/Login">
        <button className="login">Login</button></Link>
        <Link to="/Signup"><button className="register-button">Sign up</button></Link>

      </div>
    
    </header>
  
           
    )
}
export default Header1;