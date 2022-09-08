import CartWidged from './CartWidged'
import { NavLink } from 'react-router-dom'
import './Styles/navvbar.css' 


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navlist">
        <NavLink to="/" className='navbrand' ></NavLink>
        <li className="nav-link" ><NavLink  to="/category/Pale's" ><div className="nav-link__p pale">    Pale's    </div></NavLink></li>
        <li className="nav-link" ><NavLink  to="/category/Dark's" ><div className="nav-link__p dark">    Dark's    </div></NavLink></li>
        <li className="nav-link" ><NavLink  to="/category/Red's" ><div className="nav-link__p red">    Red's    </div></NavLink></li>
        <li>< CartWidged  /></li>
      </ul>
</nav>    
  )
}

export default Navbar