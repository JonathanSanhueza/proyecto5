import { useContext } from "react"
import { Card, Button } from "react-bootstrap"
import ShoppingCartContext from "../../contexts/ShoppingCart/ShoppingCartContext.jsx"

export const ProductCard = ({product, productViewPath})=>{
    const shoppingCartCtx=useContext(ShoppingCartContext)
    const{addProduct}=shoppingCartCtx
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.imageUrl} />
        <Card.Body>
            <Card.Title className="text-center">{product.title}</Card.Title>
            <Card.Text className="text-center">
            {product.description}
            </Card.Text>
        </Card.Body>
        <Card.Body className="text-center">
            <Card.Text className="text-center">${product.price} USD
            </Card.Text>
            <Button variant="secondary" href={productViewPath}>Ver</Button>
            <Button variant="secondary" onClick={()=>{
                addProduct(product)
            }}>Agregar</Button>
        </Card.Body>
    </Card>
    )
}

