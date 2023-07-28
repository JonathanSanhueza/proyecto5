import { Col, Container, Row } from "react-bootstrap"
import { ProductCard } from "../../components/ProductCard/ProductCard"
import UserContext from "../../contexts/users/UserContext"
import { useContext, useEffect, useState } from "react"
import axiosClient from "../../config/axios"

export const Products = ()=> {
    const userCtx = useContext (UserContext)
    const {user} = userCtx
    const[products, setProducts]= useState([])
    
    //const products=[{
   //     id:"1",
   //     title:"producto 1",
   //     description:"descripcion",
   //     price:69990,
  //      imageUrl:"https://i.ibb.co/3mfvVrV/EM01010228-1.jpg"
   // },
    //{
  //      id:"2",
   //     title:"producto 2",
   //     description:"descripcion",
   //     price:69990,
   //     imageUrl:"https://i.ibb.co/dmP50KS/FN01010152-1.jpg"
   // },
   // {
  //      id:"3",
    //    title:"producto 3",
    //    description:"descripcion",
   //     price:69990,
   //     imageUrl:"https://i.ibb.co/FBdv9bs/JD01020032-1.jpg"
   // },
   // {
   //     id:"4",
   //     title:"producto 4",
   //     description:"descripcion",
   //     price:69990,
   //     imageUrl:"https://i.ibb.co/HqL7qkR/JD01020029-1.jpg"
   // },
   // {
   //     id:"5",
  //      title:"producto 5",
   //     description:"descripcion",
   //     price:69990,
   //     imageUrl:"https://i.ibb.co/XpDFFDx/JD01030003-1.jpg"
   // },
  //  {
   //     id:"6",
   //     title:"producto 6",
   //     description:"descripcion",
   //     price:69990,
   //     imageUrl:"https://i.ibb.co/Bc0V2Zg/JD01050022.jpg"
  //  },
   // {
   //     id:"7",
   //     title:"producto 7",
   //     description:"descripcion",
  //      price:69990,
  //      imageUrl:"https://i.ibb.co/vP3ZBYz/JD01020031-1.jpg"
//    }]

    useEffect(()=>{
        const getProductsFromDB= async()=>{
            const axiosRes = await axiosClient.get('/products')
            setProducts(axiosRes.data)
        }
        try{
            getProductsFromDB()
        }catch(error){
                console.error(error)
                alert(error.message)
            
        }
    },[])
    return( 
        <Container fluid>
            <Row>
                <Col>
                <h1 className="login-title" style={{ textAlign: 'center' }}>Catálogo de productos {user?.fullName|| "Cliente"}</h1>
                </Col>
            </Row>
            <Row>
                {products.map(product =>{
            return<Col key={product._id}>
                <ProductCard product={ product} productViewPath={`/products/${ product._id}`}></ProductCard>
            </Col>
        })
        }
            </Row>
        </Container>
    )
    }

export default Products