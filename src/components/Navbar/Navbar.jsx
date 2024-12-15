import { NavLink } from "react-router-dom"
import "./Nav.css"

const Navbar = () => {


  return (
    <nav className="flex justify-center gap-4 items-center mt-4">
        <NavLink className={`btn btn-accent`} to={"/"}>Home</NavLink>
        <NavLink className={`btn btn-accent`} to={"/about"}>About</NavLink>
        <NavLink className={`btn btn-accent`} to={"/user"}>User</NavLink>
        <NavLink className={`btn btn-accent`} to={"/contact"}>Contact</NavLink>
        <NavLink className={`btn btn-accent`} to={"/post"}>Post</NavLink>
    </nav>
  )
}

export default Navbar