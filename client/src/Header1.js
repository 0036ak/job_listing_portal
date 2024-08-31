import './Header.css';
import logo from './job.png';
function Header1()
{
    return(
        <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="site-title">Job Portal</span>
      </div>
      <nav className="header-nav">
        <a href=" " className="nav-item">Home</a>
        <a href=" " className="nav-item">Jobs</a>
        <a href=" " className="nav-item">About Us</a>
        <a href=" " className="nav-item">Contact Us</a>
      </nav>
      <div className="header-right">
        <a href=" " className="login">Login</a>
        <button className="register-button">Register</button>
      </div>
    
    </header>
  
           
    )
}
export default Header1;