
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Resgister from './pages/register/Resgister';
import Login from './pages/Login/Login';
import Categories from './pages/Categories/Categories.jsx'
import Error from './pages/Error/Error';
import NavBar from './components/NavBar/NavBar';
import Products from './pages/Products/Products.jsx';
import Shoes from './pages/Products/Shoes/Shoes.jsx';
import Tshirts from './pages/Products/Tshirts/Tshirts.jsx';
import Balls from './pages/Products/Balls/Balls.jsx';
import Accessoires from './pages/Products/Accessoires/Accessoires.jsx';
import Basketball from './pages/Products/BasketBall Shirts/BasketBall-Jersey.jsx';
import Footer from './components/Footer/Footer.jsx';


function App() {
  return (
    <div className="App">
      {/* NavBar*/}
      <NavBar/>
      {/* Routes*/}
       <Routes>
        <Route path ='/' element = {<Home/>} />
         <Route path ='/register' element = {<Resgister/>} />
          <Route path ='/login' element = {<Login/>} />
           <Route path ='/Categories' element = {<Categories/>} />
            <Route path ='/*' element = {<Error/>} />
             <Route path ='/Products' element = {<Products/>} />
             <Route path="/shoes" element={<Shoes />} />
             <Route path="/tshirts" element={<Tshirts />} />
             <Route path="/balls" element={<Balls />} />
             <Route path="/accessoires" element={<Accessoires />} />
                <Route path="/BasketBall-Jersey" element={<Basketball/>} />
                    <Route path="/Footer" element={<Footer/>} />

       </Routes>
      {/* Footer*/}
      <Footer/>
    </div>
  );
}
//1:42
export default App;
