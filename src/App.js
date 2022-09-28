
import { Routes, Route  } from 'react-router';

import './App.css';
import { About } from './Pages/About';
import { Home } from './Pages/Home';
import { Search } from './Pages/Search';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<Home/>} /> 
        <Route path='/about' element= {<About/>} /> 
        <Route path='/search' element= {<Search/>} />
      </Routes>

  
      
    </div>
  );
}

export default App;
