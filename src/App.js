import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Footer from './components/Footer';
import Services from './pages/Services'
import Sidebar from './components/Sidebar';
import { ScrollToTop } from './context/Context'
function App() {
  return (

    <Router>
      <ScrollToTop/>
        <Navbar/>
        <Sidebar/>
        <Routes>
        <Route path='/' element={<Home/> }></Route>
        <Route path='/services' element={<Services/> }></Route>
        {/* <Route path='/about' element={<About/> }></Route>
        <Route path='/cart' element={<Cart/> }></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/:id' element={<SingleProduct/> }></Route>
        <Route path='/checkout' element={
          <PrivateRoute>
          <Checkout/>
          </PrivateRoute> 
        }></Route>
        <Route path='*' element={<Error/> }></Route> */}
      </Routes>
      <Footer/>
    </Router>
 
  );
}

export default App;
