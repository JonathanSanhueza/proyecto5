import { Card, Button } from "react-bootstrap"

export const ProductCard = ({anillo, productViewPath})=>{
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={anillo.imageUrl} />
        <Card.Body>
            <Card.Title className="text-center">{anillo.title}</Card.Title>
            <Card.Text className="text-center">
            {anillo.description}
            </Card.Text>
        </Card.Body>
        <Card.Body className="text-center">
            <Card.Text className="text-center">{anillo.price}
            </Card.Text>
            <Button variant="secondary">Ver</Button>
            <Button variant="secondary">Agregar</Button>
        </Card.Body>
    </Card>
    )
}

