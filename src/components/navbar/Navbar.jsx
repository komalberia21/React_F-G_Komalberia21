import "./navbar.css";
import{Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
    <Link to="/">Tab1</Link>
   <Link to="/section2">Tab2</Link>
    </div>
  )
}

export default Navbar