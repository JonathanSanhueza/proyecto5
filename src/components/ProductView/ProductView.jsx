import {Col, Container, Image, Row} from 'react-bootstrap'

export const ProductView = ({prduct})=> {
    return (
        <Container>
            <Row>
                <Col xs={12} sm={12} md={6}>
                <Image src={ProductView.imageUrl}>
                </Image>
                </Col>
                <Col xs={12} sm={12} md={6}>
                <Row>
                    <Col xs={12} sm={12} md={4}>{Product.title}</Col>
                    <Col xs={12} sm={12} md={4}>{Product.description}</Col>
                    <Col xs={12} sm={12} md={4}>${Product.price}.00</Col>
                </Row>
                </Col>
            </Row>
        </Container>
    )
}