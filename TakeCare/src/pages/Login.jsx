import React from 'react'
import InNav from "../components/navBars/InNavBar"
import MainFooter from "../components/footers/MainFooter";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../components/styles/registerLogin.css'
import {MdEmail, MdKey} from 'react-icons/md'

export default function Register() {
    return (
        <>
            <InNav />
            <Container fluid className="bg">            
            <Form className="form">
                <h3 class="_h3">Ingresa</h3>                
                <Col>
                    <Form.Group className="mb-3" controlId="emailInput">
                        <Form.Label><MdEmail className="_icon"/></Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su correo electrónico"></Form.Control>
                        <Form.Text></Form.Text>
                    </Form.Group>                
                </Col>                
                <Col>
                    <Form.Group className="mb-3" controlId="passInput">
                        <Form.Label><MdKey className="_icon"/></Form.Label>
                        <Form.Control type="password" placeholder="Ingrese su contraseña"></Form.Control>
                        <Form.Text></Form.Text>
                    </Form.Group>
                </Col>
                <Button type="submit" className="_button">Ingresar</Button>               
                <p class="text-center">¿Aún no te has registrado? <a href="/register">Ingresa Aquí</a></p>
            </Form>
            </Container>
            <MainFooter />
        </>
    )
} 