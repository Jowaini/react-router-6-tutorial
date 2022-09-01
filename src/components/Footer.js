import { NavLink } from 'react-router-dom';
function Footer (){
return(
    <footer >
  <NavLink to='/about' className={({ isActive }) => (isActive ? 'link active' : 'link')}  >About</NavLink>

    </footer>
)

};
export default Footer;