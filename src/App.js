import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import axios from "axios";
import ViewProducts from "./components/ViewProducts"
import NavBar from "./components/NavBar"
import AddProduct from "./components/AddProduct"
import UpdateProduct from "./components/UpdateProduct"
import Home from "./components/Home"
import Footer from "./components/Footer"
import About from "./components/About"

// Para hindi paulit-ulit
// axios.defaults.baseURL = "http://localhost:8000/api"
axios.defaults.baseURL = "https://bookshop-laravel.herokuapp.com/api"

function App() {
  return (
    <div className="App">
      
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/products' element={<ViewProducts/>}></Route>
          <Route path='/addproduct' element={<AddProduct/>}></Route>
          <Route path='/updateproduct/:id' element={<UpdateProduct/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;