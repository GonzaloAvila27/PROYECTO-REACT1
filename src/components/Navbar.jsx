import CartWidged from './CartWidged'
import { NavLink } from 'react-router-dom'
import './Styles/navvbar.css' 


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navlist">
        <NavLink to="/" className='navbrand' ></NavLink>
        <li className="nav-link dark" ><NavLink  to="/category/Dark's" >Dark's</NavLink></li>
        <li className="nav-link pale" ><NavLink  to="/category/Pale's" >Pale's</NavLink></li>
        <li className="nav-link red" ><NavLink  to="/category/Red's" >Red's</NavLink></li>
        <li>< CartWidged  /></li>
      </ul>
</nav>    
  )
}

export default Navbar