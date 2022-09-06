import CartWidged from './CartWidged'
import { NavLink } from 'react-router-dom'
import './Styles/navvbar.css' 


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navlist">
        <NavLink to="/" className='navbrand' ></NavLink>
        <li className="nav-link" ><NavLink className="nav-link__p pale" to="/category/Pale's" >Pale's</NavLink></li>
        <li className="nav-link" ><NavLink className="nav-link__p dark" to="/category/Dark's" >Dark's</NavLink></li>
        <li className="nav-link" ><NavLink className="nav-link__p red" to="/category/Red's" >Red's</NavLink></li>
        <li>< CartWidged  /></li>
      </ul>
</nav>    
  )
}

export default Navbar