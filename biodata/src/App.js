import './App.css';
import {BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import {Projects} from './Pages/Projects';
import {ExperienceEducation} from './Pages/ExperienceEducation';
import {Contact} from './Pages/Contact';
import {Skills} from './Pages/Skills';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/Projects' element={<Projects/>}/>
      <Route exact path='/ExperienceEducation' element={<ExperienceEducation/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
