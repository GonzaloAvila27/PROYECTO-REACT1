import './CSS/Navbar.css'

const Navbar = () => {
  return (
    <div className='container'>
      <nav className = "navbar">
          <a href = "index.html"><div id="nav-brand"></div></a>
          <a className='NavEl'> About Us </a>
          <a className='NavEl'> Contact </a>
        <div className = 'cart'>
          <button type = "button" id = "cart-btn">
             <i className = "bi bi-cart"></i>
             <span id = "cart-count-info">17</span>
          </button>  
          </div>
      </nav> 
    </div>      
  
  )
}

export default Navbar