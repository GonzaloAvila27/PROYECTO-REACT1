import CartWidged from './CartWidged'
import './CSS/Navbar.css'

const Navbar = () => {
  return (
    <div className='container'>
      <nav className = "navbar">
          <a href = "index.html"><div id="nav-brand"></div></a>
          <a className='NavEl'> About Us </a>
          <a className='NavEl'> Contact </a>
            <CartWidged  />
      </nav> 
    </div>      
  
  )
}

export default Navbar