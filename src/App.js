
import { Routes, Route  } from 'react-router';

import './App.css';
import { About } from './Pages/About';
import { Home } from './Pages/Home';
import { NewRecipe } from './Pages/NewRecipe';
import { Search } from './Pages/Search';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<Home/>} /> 
        <Route path='/about' element= {<About/>} /> 
        <Route path='/search' element= {<Search/>} />
        <Route path='/new-recipe' element= {<NewRecipe/>} />
      </Routes>

  
      
    </div>
  );
}

export default App;
