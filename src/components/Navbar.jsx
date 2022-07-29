import CartWidged from './CartWidged'
import './CSS/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container'>
      <nav className = "navbar">
          <Link to ={"/"}><div id="nav-brand"></div></Link>
          <Link to ={"/"} className='NavEl'> About Us </Link>
          <Link to ={"/"} className='NavEl'> Contact </Link>
            <CartWidged  />
      </nav> 
    </div>      
  )
}

export default Navbar