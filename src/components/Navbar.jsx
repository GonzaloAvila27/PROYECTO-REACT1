import CartWidged from './CartWidged'
import { Link } from 'react-router-dom'
/* import "./Styles/Navbar.css" */

const Navbar = () => {
  return (
    <div className='container'>
      <nav className = "navbar"> 
         <Link to ={"/"}><div id="nav-brand">LOGO</div></Link>
         <ul> 
         <li> <Link to ={"/"} className='NavEl'> About Us </Link></li>
         <li> <Link to ={"/"} className='NavEl'> Contact </Link></li>
         <li>  < CartWidged  /> </li>
         </ul>
      </nav> 
    </div>      
  )
}

export default Navbar