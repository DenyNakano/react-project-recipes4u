
import { Routes, Route  } from 'react-router';

import './App.css';
import { About } from './Pages/About';
import { Home } from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<Home/>} /> 
        <Route path='/about' element= {<About/>} /> 
      </Routes>

  
      
    </div>
  );
}

export default App;
