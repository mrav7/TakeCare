import React, { Component } from 'react';
import { ListGroup, Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../../components/styles/lists.css';

class DisplayPatientFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patientData: [],
      loading: true
    };
  }

  componentDidMount() {
    this.obtenerListaPacientes();
  }

  obtenerListaPacientes() {
    fetch('http://localhost:3000/getPatients')
      .then(response => response.json())
      .then(data => {
        this.setState({
          patientData: data,
          loading: false
        });
      })
      .catch(error => {
        console.error('Error al obtener los datos de los pacientes:', error);
      });
  }

  deletePatient(id) {
    fetch(`http://localhost:3000/deletePatient/${id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert("El paciente ha sido eliminado");
        location.reload();
      })
      .catch(error => {
        console.error('Error al eliminar el usuario:', error);
      });
  }

  render() {
    const { patientData } = this.state;
    const patientList = patientData.map((data, index) => (
      <Container fluid className="person-list" key={index}>
        <ListGroup>
          <ListGroup.Item className="person-list-item">
            <Row className="person-details-row">
              <Col>
                <span className="person-info">ID Paciente:</span> {data.ID}
              </Col>
              <Col>
                <span className="person-info">Nombre:</span> {data.firstname}
              </Col>
              <Col>
                <span className="person-info">Apellido:</span> {data.lastname}
              </Col>
              <Col>
                <span className="person-info">RUT:</span> {data.rut}
              </Col>
            </Row>
            <Row className="person-details-row">
              <Col>
                <span className="person-info">Fecha de nacimiento:</span> {data.birthdate}
              </Col>
              <Col>
                <span className="person-info">Edad:</span> {data.age}
              </Col>
              <Col>
                <span className="person-info">Sexo:</span>{' '}
                {data.gender === 0 ? 'Masculino' : 'Femenino'}
              </Col>
              <Col>
                <span className="person-info">Domicilio:</span> {data.address}
              </Col>
            </Row>
            <Row className="person-details-row">
              <Col>
                <span className="person-info">Número telefónico:</span> {data.phone}
              </Col>
              <Col>
                <span className="person-info">Previsión:</span> {data.insurance}
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item className="person-list-item diagnosis-field">
            <span className="person-info">Diagnóstico:</span> {data.diagnostics}
          </ListGroup.Item>
          <ListGroup.Item className="person-list-item treatment-field">
            <span className="person-info">Tratamiento:</span> {data.treatments}
          </ListGroup.Item>
          <ListGroup.Item className="person-list-item observation-field">
            <span className="person-info">Observaciones:</span> {data.observations}
          </ListGroup.Item>
          <ListGroup.Item className="edit-delete-buttons">
            <Button className="edit-button" >Editar</Button>
            <Button className="delete-button" onClick={() => this.deletePatient(data.ID)}>Borrar</Button>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    ));

    return <>{patientList}</>;
  }
}

export default DisplayPatientFile;