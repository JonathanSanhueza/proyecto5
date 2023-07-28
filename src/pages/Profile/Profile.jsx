import { useContext } from "react"
import UserContext from "../../contexts/users/UserContext"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Profile = ()=> {
        const userCtx=useContext(UserContext)
        const {user}= userCtx
        return(
<Card style={{ width: '18rem', textAlign: 'center'}}>
    <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" />
    <Card.Body >
        <Card.Title>Perfil de Usuario</Card.Title>
        <Card.Text>
            <label>ID:{user._id}</label>
            <label>Nombre:{user.fullName}</label>
            <label>Correo:{user.email}</label>
        </Card.Text>
    </Card.Body>
    </Card>
        )
}

