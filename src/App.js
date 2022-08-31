import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Eror from './pages/Error'
import Login from './pages/Login';
function App() {

  return (
  <BrowserRouter>
  <Routes>
<Route path='/' element={<Home  />}  />
<Route path='about' element={ <About />}    />
 <Route  path='products' element={  <Products  />  }  />
 <Route path='*' element={<Eror /> } />
<Route path='Login' element={<Login />} />
  </Routes>
  </BrowserRouter>

  );}


export default App;
