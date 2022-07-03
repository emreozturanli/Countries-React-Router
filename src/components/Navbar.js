import {NavLink} from 'react-router-dom';
export const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <h1>COUNTRIES</h1>
        </div>
        <div className="links">
            <NavLink to="/" className={({isActive})=>isActive ? 'link active' : 'link'}> HOME</NavLink>
            <NavLink to="about" className={({isActive})=>isActive ? 'link active' : 'link'}> ABOUT</NavLink>
        </div>
    </nav>
  )
}
