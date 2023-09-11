
import './App.css'
import Home from './components/Home';
import Header from './components/Header';
import About from "./components/About";
import Error from "./components/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (

    <BrowserRouter>
    <Header>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />}/>
         <Route path="*" element={<Error/>}/>
      </Routes>
      </Header>
    </BrowserRouter>
   
  )
}

export default App
