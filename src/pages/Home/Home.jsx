import { useContext,} from "react"
import { Carousel, Container,} from "react-bootstrap"
import UserContext from "../../contexts/users/UserContext"
import Products from "../Products/Products"

export function Home () {
  const userCtx = useContext(UserContext)
  const {user, verifyingToken, authStatus}= userCtx
  
    return (
      <Container>
        <h1 className="login-title" style={{ textAlign: 'center' }}>{ `Bienvenido ${ user?.fullName || "" }` }</h1>
        <Container>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/s9ybG0N/imagencarrousel1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Elegancia y Sofisticación en Cada Detalle</h3>
            <p>En nuestra joyería, comprendemos que cada pieza de joyería es única y especial para nuestros clientes. Las joyas no solo adornan nuestro cuerpo, sino que también reflejan nuestra personalidad y estilo. Cada diseño ha sido cuidadosamente creado con un enfoque en la elegancia y sofisticación para que nuestros clientes se sientan seguros y radiantes en cada ocasión.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/9qJ1m7m/imagencarrousel2.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Joyas que Transmiten Emociones y Recuerdos Inolvidables</h3>
            <p>Las joyas tienen un poder especial para transmitir emociones y capturar momentos inolvidables en la vida de las personas. Desde los destellos brillantes de un diamante hasta la calidez del oro, cada pieza cuenta una historia única y atemporal. En nuestra joyería, nos enorgullecemos de ofrecer joyas de calidad que se convierten en tesoros familiares, transmitiendo amor, gratitud y momentos inolvidables de generación en generación.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/S5tqdGp/imagencarrousel3.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Autenticidad y Valor que Trascienden el Tiempo</h3>
            <p>
            En el mundo cambiante de la moda, las joyas son una inversión intemporal. En nuestra joyería, valoramos la autenticidad y la calidad, y nos esforzamos por ofrecer piezas que trasciendan el paso del tiempo. Cada joya es el resultado de la dedicación artesanal y la pasión por la belleza, asegurando que nuestros clientes obtengan piezas que no solo enriquezcan su estilo, sino que también mantengan su valor y significado a lo largo de los años. Con nuestras joyas, ofrecemos una expresión duradera de amor, alegría y elegancia que será apreciada por toda la vida.
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