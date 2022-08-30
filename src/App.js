import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
  <BrowserRouter>
  <Routes>
<Route path='/' element={<div>home page</div>}  />
<Route path='about' element={<div>about it </div>}    />
  </Routes>
  </BrowserRouter>

  );}
  export const AL =()=>{
function About () {
  const about =()=>{
    return (
      <BrowserRouter>
      <Routes>

    <Route path='about' element={<div>about it </div>}    />
      </Routes>
      </BrowserRouter>
    
      );
  }
return <button onClick={about} >  about page </button>


};

  }


export default App;
