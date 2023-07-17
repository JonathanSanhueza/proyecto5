import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Header} from './components/Header/Header.jsx'
import {Login} from './pages/Auth/Login/Login.jsx'
import {SignUp} from './pages/Auth/SignUp/SignUp.jsx'
import Home from "./pages/Home/Home.jsx"
import product from './pages/Products/Product.jsx'
import products from './pages/Products/Product/Products.jsx'
import {Profile} from'./pages/Profile/Profile.jsx'

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Header></Header>
        <Routes >
        
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Home' element={<Home></Home>}></Route>
          <Route path='/products' element={<products></products>}></Route>
          <Route path='/products/:id' element={<product></product>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>

        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
