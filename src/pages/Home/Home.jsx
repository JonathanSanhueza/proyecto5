import { useContext,} from "react"
import { Carousel, Container,} from "react-bootstrap"
import UserContext from "../../contexts/users/UserContext"
import Products from "../Products/Products"

export function Home () {
  const userCtx = useContext(UserContext)
  const {user, verifyingToken, authStatus}= userCtx
  
    return (
      <Container>
        <h1>{ `Bienvenido ${ user?.fullName || "" }` }</h1>
        <Container>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/fotos-premium/monton-joyas-verdes-doradas_890746-3457.jpg?w=2000"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s03.s3c.es/imag/_v0/4242x2828/6/4/4/regalo-joyas-dreamstime.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images7.alphacoders.com/408/408321.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Container>
        <Products></Products>
      </Container>
    )
}

export default Home