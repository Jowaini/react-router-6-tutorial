import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink to='/'   className={({isActive})=>(  isActive ? 'redd':'greyy') } >Home</NavLink>
      <NavLink to='/about'  >About</NavLink>
      <NavLink to='/products'>Products</NavLink>
   <NavLink to='/Login'  >login</NavLink>
    </nav>
  );
};
export default Navbar;