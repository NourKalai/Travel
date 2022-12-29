import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar.js";
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Service from './routes/Service';
import SignIn from './routes/SignIn';
import Dashboard from './routes/Dashboard';


export default function App(){
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/> 
        <Route path="/signin" element ={<SignIn/>}/>
        <Route path="/home" element ={<Dashboard/>}/>

      </Routes>
</div>
  );
}
