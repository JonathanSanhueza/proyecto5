import { useContext, useState } from 'react';
import UserContext from "../../../contexts/users/UserContext.jsx";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col, Row} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

export const SignUp = () => {
    const userCtx = useContext( UserContext )
    const { registerUser } = userCtx
    const [ formValues, setFormValues ] = useState( {
    name: "",
    surname: "",
    email: "",
    password: ""
    } )

    async function handleSubmit( event ) {
    event.preventDefault()
    await registerUser( formValues )
    console.log( formValues );
    }

    async function handleFormChange( event ) {
    const { target } = event
    const { name, value } = target
    const newValues = { ...formValues, [ name ]: value }
    setFormValues( newValues )
    }

    return (
    <div className="form-container">
        <h1 className="login-title">Portal Registro de Usuarios</h1>
        <Row>
            <Col md='6' xs='12'>
            <Form onSubmit={ handleSubmit }>
<Form.Group className="mb-3">
    <Form.Label htmlFor='name'>Nombre</Form.Label>
    <Form.Control id="name" name='name' type='text' value={ formValues.name } onChange={ handleFormChange } placeholder="Ingrese su Nombre" />
</Form.Group>

<Form.Group className="mb-3">
    <Form.Label htmlFor='surname'>Apellido</Form.Label>
    <Form.Control id="surname" name='surname' type='text' value={ formValues.surname } onChange={ handleFormChange} placeholder="Ingrese su Apellido" />
</Form.Group>

<Form.Group className="mb-3">
    <Form.Label htmlFor='email'>Correo</Form.Label>
    <Form.Control id="email" name='email' type='email' value={ formValues.email } onChange={ handleFormChange } placeholder="Ingrese su Correo" />
</Form.Group>

<Form.Group className="mb-3">
    <Form.Label  htmlFor='password'>Contraseña</Form.Label>
    <Form.Control id="password" name='password' type='password' value={ formValues.password } onChange={ handleFormChange } placeholder="Ingrese su Contraseña" />
</Form.Group>

<Button variant="secondary" type="submit">
    Registro
</Button>
</Form>
            </Col>
            <Col>
            <div>
            <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://i.pinimg.com/originals/77/ca/ba/77cabaffbe5ef24e1ba1bdfa3b73c24b.jpg"/>
    </Card>
            </div>
            </Col>
        </Row>

    </div>
    )

}



