import React, {Component } from 'react'
import data from '../../assets/patientdata.json'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

class DisplayPatientFile extends Component {

    render() {
        const patientData = data.map((data, _id) => {
            return (
                <Container fluid className="landingContent text-center">                
                    <ListGroup horizontal>
                        <ListGroup.Item><strong>ID Paciente: </strong>{_id}</ListGroup.Item>
                        <ListGroup.Item><strong>Nombre: </strong>{data.name}</ListGroup.Item>
                        <ListGroup.Item><strong>Apellido: </strong>{data.surname}</ListGroup.Item>
                        <ListGroup.Item><strong>RUT: </strong>{data.rut}</ListGroup.Item>
                        <ListGroup.Item><strong>Fecha de nacimiento: </strong>{data.birthdate}</ListGroup.Item>
                        <ListGroup.Item><strong>Edad: </strong>{data.age}</ListGroup.Item>
                        <ListGroup.Item><strong>Sexo: </strong>{data.gender}</ListGroup.Item>
                        <ListGroup.Item><strong>Domicilio: </strong>{data.address}</ListGroup.Item>
                        <ListGroup.Item><strong>Número telefónico: </strong>{data.phone}</ListGroup.Item>
                        <ListGroup.Item><strong>Previsión: </strong>{data.prevision}</ListGroup.Item>
                        <ListGroup.Item><strong>Diagnóstico: </strong>{data.diagnostico}</ListGroup.Item>
                        <ListGroup.Item><strong>Tratamiento: </strong>{data.tratamiento}</ListGroup.Item>
                        <ListGroup.Item><strong>Observaciones: </strong>{data.observaciones}</ListGroup.Item>
                        <ListGroup.Item>
                            <ListGroup>
                                <ListGroup.Item><Button>Editar</Button></ListGroup.Item>
                                <ListGroup.Item><Button>Borrar</Button></ListGroup.Item>
                            </ListGroup>
                        </ListGroup.Item>
                    </ListGroup>
                </Container>
            )
        });
        return (<>{patientData}</>)
    }
}
export default DisplayPatientFile;