import React from 'react'
import {Container, Row, Col, Card, ListGroup, InputGroup, Form}  from "react-bootstrap";

function ControlPanel() {
    return (
        <Container fluid className="text-center">
            <Container fluid className="_center">
                <Row className="">
                    <Col >
                        <Card style={{width: '25%'}}>
                            <Card.Header>
                                <h3>Datos Profesional</h3>
                            </Card.Header>
                            <Card.Title>
                                <h5>Nombre Apellido1 Apellido2</h5>
                            </Card.Title>
                            <Card.Body>                            
                                <ListGroup vertical className="_left">
                                    <ListGroup.Item>Rol:</ListGroup.Item>
                                    <ListGroup.Item>Número telefónico:</ListGroup.Item>
                                    <ListGroup.Item>Correo electrónico:</ListGroup.Item>
                                </ListGroup>                           
                            </Card.Body>
                        </Card>                
                    </Col>
                </Row>
            </Container>
            <Container fluid className="_center" >
            <Row className="">
                    <Col >
                        <Card style={{width: '25%'}}>
                            <Card.Header>
                                <h3>Datos Paciente</h3>
                            </Card.Header>
                            <Card.Title>
                                <h5>Nombre Apellido1 Apellido2</h5>
                            </Card.Title>
                            <Card.Body>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="Nombre / RUT / ID paciente"
                                    />
                                    <InputGroup.Text id="basic-addon2">Buscar</InputGroup.Text>
                                    </InputGroup>                            
                                <ListGroup vertical className="_left">
                                    <ListGroup.Item>Edad:</ListGroup.Item>
                                    <ListGroup.Item>Sexo:</ListGroup.Item>
                                    <ListGroup.Item>Número telefónico:</ListGroup.Item>
                                    <ListGroup.Item>Correo electrónico:</ListGroup.Item>
                                    <ListGroup.Item>Dirección:</ListGroup.Item>
                                </ListGroup>
                                    <a href="">Ficha médica</a>                            
                            </Card.Body>
                        </Card>                
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default ControlPanel;