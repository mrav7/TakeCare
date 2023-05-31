import React from 'react'
import {Container, Row, Col, Form, Button}  from "react-bootstrap";

function PatientRegister() {
    return (
        <Container fluid>
            <h3 class="_h3">Registro de paciente</h3>
            <Form className="">
                <Row>
                    <Col>
                    <Form.Group className="mb-3" controlId="regPatientName">
                            <Form.Label>Nombres</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el nombre del paciente"></Form.Control>
                            <Form.Text></Form.Text>
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3" controlId="regPatientLastname">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el apellido del paciente"></Form.Control>
                            <Form.Text></Form.Text>
                    </Form.Group>
                    </Col>
                </Row>
                <Col>
                    <Form.Group className="mb-3" controlId="regPatientRut">
                            <Form.Label>RUT</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el RUT del paciente"></Form.Control>
                            <Form.Text></Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="regPatientBirthday">
                            <Form.Label>Fecha de nacimiento</Form.Label>
                            <Form.Control type="date" placeholder="Ingrese la fecha de nacimiento del paciente"></Form.Control>
                            <Form.Text></Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="regPatientAge">
                            <Form.Label>Edad</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese la edad del paciente"></Form.Control>
                            <Form.Text></Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="regPatientGender">
                            <Form.Label>Sexo</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option selected disabled>Seleccione el sexo del paciente</option>
                                <option value="1">Másculino</option>
                                <option value="2">Femenino</option>
                            </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="regPatientAddr">
                            <Form.Label>Domicilio</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el domicilio del paciente"></Form.Control>
                            <Form.Text></Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="regPatientPhone">
                            <Form.Label>Número telefónico</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el número telefónico del paciente"></Form.Control>
                            <Form.Text></Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="regPatientPrevicion">
                            <Form.Label>Previción</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese la previción del paciente"></Form.Control>
                            <Form.Text></Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="regPatientDiag">
                            <Form.Label>Diagnósticos</Form.Label>
                            <Form.Control type="text" as="textarea" rows={3} placeholder="Ingrese el diagnóstico del paciente"></Form.Control>
                            <Form.Text></Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="regPatientTrat">
                            <Form.Label>Tratamientos</Form.Label>
                            <Form.Control type="text" as="textarea" rows={3} placeholder="Ingrese los tratamientos del paciente"></Form.Control>
                            <Form.Text></Form.Text>
                    </Form.Group>
                </Col> 
                <Col>
                    <Form.Group className="mb-3" controlId="regPatientObs">
                            <Form.Label>Observaciones</Form.Label>
                            <Form.Control type="text" as="textarea" rows={3} placeholder="Registre sus observaciones"></Form.Control>
                            <Form.Text></Form.Text>
                    </Form.Group>
                </Col>
                <Button type="submit" className="_button">Registrar paciente</Button>
            </Form>
        </Container>
    )
}

export default PatientRegister;