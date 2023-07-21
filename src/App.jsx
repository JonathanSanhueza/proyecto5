import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Header} from './components/Header/Header.jsx'
import {Login} from './pages/Auth/Login/Login.jsx'
import {SignUp} from './pages/Auth/SignUp/SignUp.jsx'
import Home from "./pages/Home/Home.jsx"
import Product from './pages/Products/Product/Product.jsx'
import Products from './pages/Products/Products.jsx'
import {Profile} from'./pages/Profile/Profile.jsx'
import {Footer} from './components/Footer/Footer.jsx'

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Header></Header>
        <Routes >
        
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Home' element={<Home></Home>}></Route>
          <Route path='/products' element={<Products></Products>}></Route>
          <Route path='/products/:productId' element={<Product></Product>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>

        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
