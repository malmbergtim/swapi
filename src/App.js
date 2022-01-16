import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Films from './components/Films'

function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}  ></Route>
        <Route path="about" element={<About/>}  ></Route>
        <Route path="films" element={<Films/>}  ></Route>

      </Route>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
