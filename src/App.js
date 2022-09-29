
import { Routes, Route  } from 'react-router';
import { About } from './Pages/About';
import { Home } from './Pages/Home';
import { NewRecipe } from './Pages/NewRecipe';
import { Recipe } from './Pages/Recipe';
import { Search } from './Pages/Search';
import { Error } from './Pages/Error';
import { NavBar } from './Components/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element= {<Home/>} /> 
        <Route path='/about' element= {<About/>} /> 
        <Route path='/search' element= {<Search/>} />
        <Route path='/recipe/:id'element= {<Recipe/>} />
        <Route path='/new-recipe' element= {<NewRecipe/>} />
        <Route path='*' element= {<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
