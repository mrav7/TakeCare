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
              <Col xs={6} md={3}>
                <span className="person-info">ID Paciente:</span>
                <br />
                {data.ID}
              </Col>
              <Col xs={6} md={3}>
                <span className="person-info">ID Profesional tratante:</span>
                <br />
                {data.IDProfessional}
              </Col>
              <Col xs={6} md={3}>
                <span className="person-info">Nombre:</span>
                <br />
                {data.firstname}
              </Col>
              <Col xs={6} md={3}>
                <span className="person-info">Apellido:</span>
                <br />
                {data.lastname}
              </Col>
            </Row>
            <Row className="person-details-row">
              <Col xs={6} md={3}>
                <span className="person-info">RUT:</span>
                <br />
                {data.rut}
              </Col>
              <Col xs={6} md={3}>
                <span className="person-info">Fecha de nacimiento:</span>
                <br />
                {data.birthdate.substring(0, 10)}
              </Col>
              <Col xs={6} md={3}>
                <span className="person-info">Edad:</span>
                <br />
                {data.age}
              </Col>
              <Col xs={6} md={3}>
                <span className="person-info">Sexo:</span>
                <br />
                {data.gender === 0 ? 'Masculino' : 'Femenino'}
              </Col>
            </Row>
            <Row className="person-details-row">
              <Col xs={6} md={3}>
                <span className="person-info">Domicilio:</span>
                <br />
                {data.address}
              </Col>
              <Col xs={6} md={3}>
                <span className="person-info">Número telefónico:</span>
                <br />
                {data.phone}
              </Col>
              <Col xs={6} md={3}>
                <span className="person-info">Previsión:</span>
                <br />
                {data.insurance}
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item className="person-list-item diagnosis-field">
            <span className="person-info">Diagnóstico:</span>
            <br />
            {data.diagnostics}
          </ListGroup.Item>
          <ListGroup.Item className="person-list-item treatment-field">
            <span className="person-info">Tratamiento:</span>
            <br />
            {data.treatments}
          </ListGroup.Item>
          <ListGroup.Item className="person-list-item observation-field">
            <span className="person-info">Observaciones:</span>
            <br />
            {data.observations}
          </ListGroup.Item>
          <ListGroup.Item className="edit-delete-buttons">
            <Button className="edit-button">Editar</Button>
            <Button className="delete-button" onClick={() => this.deletePatient(data.ID)}>
              Borrar
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    ));

    return <>{patientList}</>;
  }
}

export default DisplayPatientFile;