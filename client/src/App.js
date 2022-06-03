import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useRouteMatch,
} from "react-router-dom";

function App() {
  return (
    <div>
       
    <BrowserRouter> 
    <Navbar />  
      <Routes>
      <Route exact path = "/"  element = {<Home />} />        
      <Route eaxct path = "/about" element={<About />} />
      <Route exact path ="/contact" element={<Contact />} />
      <Route exact path ="/login" element={<Login />} />
      <Route exact path="signup" element = {<Signup />} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
