import React from 'react'
import {Container, Col, Form, Button}  from "react-bootstrap";

function PatientDailyReview() {
    return (
        <Container fluid>
            <h3 class="_h3">Registo chequeo diario</h3>
            <Form className="">                
                <Col>
                    <Form.Group className="mb-3" controlId="checkPatientName">
                            <Form.Label>Paciente</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option selected disabled>Seleccione el paciente</option>                                
                            </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="checkPatientDate">
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type="date"></Form.Control>
                            <Form.Text></Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="checkPatientPresion">
                            <Form.Label>Presion</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese la presión"></Form.Control>
                            <Form.Text></Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="checkPatientTemp">
                            <Form.Label>Temperatura</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese la temperatura"></Form.Control>
                            <Form.Text></Form.Text>                            
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="checkPatientPeso">
                            <Form.Label>Peso</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el peso"></Form.Control>
                            <Form.Text></Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="checkPatientFisEv">
                            <Form.Label>Autoevaluación bienestar físico:</Form.Label>
                            <Form.Range/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="checkPatientPsiEv">
                            <Form.Label>Autoevaluación bienestar psicológico</Form.Label>
                            <Form.Range/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="checkPatientObs">
                            <Form.Label>Observaciones:</Form.Label>
                            <Form.Control type="text" as="textarea" rows={3} placeholder="Registre sus observaciones"></Form.Control>
                            <Form.Text></Form.Text>
                    </Form.Group>
                </Col>
                <Button type="submit" className="_button">Registrar chequeo</Button>
            </Form>
        </Container>
    )
}
export default PatientDailyReview;
