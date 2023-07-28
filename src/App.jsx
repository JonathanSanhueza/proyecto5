import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Header} from './components/Header/Header.jsx'
import UserState from './contexts/users/UserState.jsx'
import {Login} from './pages/Auth/Login/Login.jsx'
import {SignUp} from './pages/Auth/SignUp/SignUp.jsx'
import Home from "./pages/Home/Home.jsx"
import Product from './pages/Products/Product/Product.jsx'
import Products from './pages/Products/Products.jsx'
import {Profile} from'./pages/Profile/Profile.jsx'
import {Footer} from './components/Footer/Footer.jsx'
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'
import PublicRoute from './components/publicRoute/PublicRoute.jsx'
import AuthRoute from './components/AuthRoute/AuthRoute.jsx'
import ShoppingCartState from './contexts/ShoppingCart/ShoppingCartState.jsx'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import PayPalCheckout from './pages/PayPalCheckout/PaypalCheckout.jsx'

function App() {

  return (
    <div className='App'>
      <UserState>
      <ShoppingCartState>
        <PayPalScriptProvider options={{
          clientId:"AU4kP6CA9z6d2Ut-dqgYAn9gr8V84YIk1S8mZ8RgAKuKaio389sojp2eVCG5RTZ4uuPArJBuvUuoY8rc",
          components:"buttons",
          currency:"USD"
          }}>
        <BrowserRouter>
        <Header></Header>
        <Routes >
        
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Home' element={
          <PublicRoute>
            <Home></Home>
          </PublicRoute>
        }></Route>
          <Route path='/products' element={<PublicRoute>
            <Products></Products>
          </PublicRoute>
          }></Route>
          <Route path='/products/:productId' element={<PublicRoute>
            <Product></Product>
          </PublicRoute>}></Route>
          <Route path='/checkout' element={
                  <PublicRoute>
                    <PayPalCheckout></PayPalCheckout>
                  </PublicRoute>
                }></Route>
          <Route path='/auth/login' element={<AuthRoute>
            <Login></Login>
          </AuthRoute>}></Route>
          <Route path='/auth/signup' element={<AuthRoute>
            <SignUp></SignUp>
          </AuthRoute>}></Route>
          <Route path='/profile' element={
            <PrivateRoute>
              <Profile></Profile>
            </PrivateRoute>
          }>
          </Route>
        </Routes>
        </BrowserRouter>
        </PayPalScriptProvider>
        </ShoppingCartState>
      </UserState>
      <div>
      <Footer></Footer>
    </div>
    </div>
  )
}

export default App
