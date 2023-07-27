import { useContext, useState } from "react"
import { Navbar, Nav, Container, Button, Badge,NavDropdown} from "react-bootstrap"
import UserContext from "../../contexts/users/UserContext"
import {ShoppingCartContext} from "../../contexts/ShoppingCart/ShoppingCartContext.jsx"
import { ShoppingCart } from "../ShoppingCart/ShoppingCart.jsx"


export const Header = ()=> {
  const userCtx= useContext(UserContext)
  const shoppingCartCtx= useContext(ShoppingCartContext)
  const {products}= shoppingCartCtx
  const{logout,user}=userCtx
  const[showShoppingCart, setShowShopingCart]=useState(false)

  const handleShowShoppingCart=()=> setShowShopingCart(!showShoppingCart)

    return (
      <>
        <Navbar bg='dark' expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">             <img
              src="https://i.ibb.co/HVvvhNF/anillos.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />    Tienda de Joyas</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{flexGrow:0}}>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/products">Productos</Nav.Link>
            <Button variant="primary" onClick={ handleShowShoppingCart }>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg> <Badge bg="secondary">{ products?.length > 0 ? products.length : '' }</Badge>
              </Button>
            {
              user?.email?<>
              <Nav.Link href="/profile">Perfil</Nav.Link>
              <Button className="btn btn-sm btn-primary mr-2" variant="secondary" onClick={()=>logout()}>
              <Nav.Link href="/">Cerrar sesión</Nav.Link>
              </Button>
              </>:<>
              <Nav.Link href="/auth/login">Ingreso</Nav.Link>
              <Nav.Link href="/auth/signup">Registro</Nav.Link>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
        </Navbar>
        <ShoppingCart showShoppingCart={showShoppingCart}handleCloseShoppingCart={handleShowShoppingCart}>

        </ShoppingCart>
      </>
    )
}