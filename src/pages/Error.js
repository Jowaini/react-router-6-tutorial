import {Link} from 'react-router-dom';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
const Error = () => {
 
  return (
    
    <section className='section'>
      <h2>Error 404 Page Not Found  </h2>
      <Link to ='/' className='btn' >Back To Home</Link>
     <br /> <br/> <Link to='products' className='btn'  > our products </Link>
     <Link to ='/Login'  >login</Link>
      

    </section>
  );
};
export default Error;
