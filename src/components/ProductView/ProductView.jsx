import {Button, Col, Container, Image, Row} from 'react-bootstrap'

export const ProductView = ({product})=> {
    return (
        <Container fluid style={{marginTop:20}}>
            <Row>
                <Col xs={12} sm={12} md={6}>
                <Image src={product.imageUrl} width={500} height={500}>
                </Image>
                </Col>
                <Col xs={12} sm={12} md={6}>
                <Row style={{gap:40}}>
                    <Col xs={12} sm={12} md={12}>{product.title}</Col>
                    <Col xs={12} sm={12} md={12}>{product.description}</Col>
                    <Col xs={12} sm={12} md={12}>${product.price}.00</Col>
                </Row>
                <Row style ={{gap: 10}}>
                    <Col>
                        <Button variant="secondary">Comprar</Button>
                    </Col>
                    <Col>
                        <Button variant="secondary">Agregar al Carrito</Button>
                    </Col>
                </Row>
                </Col>
            </Row>
        </Container>
    )
}