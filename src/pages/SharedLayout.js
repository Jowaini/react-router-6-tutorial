import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StyledNavbar from '../components/StyledNavbar'
const Home = () => {
  return (
    <>
      <StyledNavbar />
      <section className='section'>
        <Outlet />
      </section>
      <Footer />
    </>
  );
};
export default Home;