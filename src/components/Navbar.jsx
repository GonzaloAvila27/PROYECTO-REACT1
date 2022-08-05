import CartWidged from './CartWidged'
import { NavLink } from 'react-router-dom'
import "./Styles/Navbar.css" 


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/" ><div className="navbrand">Brandqxalgunarazonnoseve</div></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/" >About Us</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="/Category"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categories
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/Category/top" >Category 1</NavLink></li>
            <li><NavLink className="dropdown-item" to="/Category/low" >Category 2</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/" >Contact </NavLink>
        </li>
      </ul>
      <div className="d-flex">
      < CartWidged  />
      </div>
    </div>
  </div>
</nav>    
  )
}

export default Navbar