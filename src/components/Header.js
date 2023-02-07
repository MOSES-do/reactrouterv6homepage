import {useState} from 'react';
import './Header.css'
import {Link} from 'react-router-dom'
import Logo from '../asset/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'

const Header = () => {
const [click, setClick] = useState(false);

  return (
    <header>
      <nav  className="navbar">
        <div className="logo">
          <Link to='/'><img src={Logo} alt=''/></Link>
        </div>

        <ul className={click ? "nav-menu active": "nav-menu"}>
          <li className="nav-item">
          <Link to='/' className='nav-link'>Home</Link>
          </li>
          <li className="nav-item">
          <Link to='/pricing' className='nav-link'>Pricing</Link>
          </li>
          <li className="nav-item">
          <Link to='/faq' className='nav-link'>FAQ</Link>
          </li>
          <li className="nav-item">
          <Link to='/contact' className='nav-link'>Contact</Link>
          </li>
        </ul>

        {/* <div style={{marginRight:'auto'}}>
          <h1 >fhfdhk</h1>
        </div> */}


        <div className='hamburger' onClick={()=> setClick(!click)}>
          {click ? (<FaTimes size={20} className="burger" style={{color: '#ffffff' }}/>) :  
          <FaBars size={20} className="burger" style={{color: '#ffffff' }} />
          }
          </div>
      </nav>
    </header>
  )
}

export default Header