import { useContext, useEffect, useState } from "react"
import UserContext from "../../../contexts/users/UserContext.jsx"
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../Auth/Login/Login.css'
import {Col, Row} from 'react-bootstrap'

export const Login = ()=> {
    const userCtx= useContext(UserContext)
    const {loginUser,} = userCtx
    const navigate = useNavigate()
    const [formValues, setFormValues]= useState({
        email:"",
        password:""
    })

    async function handleSubmit( event ) {
        event.preventDefault()
        await loginUser( formValues )
        navigate( "/profile" )

    }
    async function handleFormChange(event){
        const {target}= event
        const {name, value} = target
        const newValues = {...formValues, [name]:value}
        setFormValues (newValues)
    }
    return(
        <div className="form-container" style={{ textAlign: 'center' }} >
        <h1 className="login-title">Portal de Ingreso</h1>
        <Row>
            <Col md='12' xs='12'>
                <div style={{display: "flex", justifyContent: "center"}}>
            <Form onSubmit ={handleSubmit}>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Correo</Form.Label>
                <Form.Control placeholder="Ingresa tu correo" className="controls" id = "email" name= "email" type="email"  value={formValues.email} onChange={handleFormChange} />
                <Form.Text className="text-muted">
                Nunca compartiremos tu correo electrónico con nadie más.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="password">Contraseña</Form.Label>
                <Form.Control placeholder="Ingresa tu contraseña" className="controls" id = "password" name= "password" type="password"  value={formValues.password} onChange={handleFormChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Mantener sesión iniciada" />
            </Form.Group>
            <Button className="buttons" variant="secondary" type="submit">
                Submit
            </Button>
            </Form>
            </div>
                        </Col>
                    </Row>
                    </div>
    )
}
/*<Form onSubmit ={handleSubmit}>
    <Form.Group className="mb-3">
        <Form.Label htmlFor="email">Email address</Form.Label>
        <Form.Control className="controls" id = "email" name= "email" type="email"  value={formValues.email} onChange={handleFormChange} />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control className="controls" id = "password" name= "password" type="password"  value={formValues.password} onChange={handleFormChange} />
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button className="buttons" variant="primary" type="submit">
        Submit
    </Button>
    </Form>*/
