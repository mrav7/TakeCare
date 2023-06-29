import React, { Component } from 'react';
import { ListGroup, Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../../components/styles/lists.css';

class DisplayUsersFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: [],
      loading: true
    };
  }

  componentDidMount() {
    this.obtenerListaUsuarios();
  }

  obtenerListaUsuarios() {
    fetch('http://localhost:3000/getUsers')
      .then(response => response.json())
      .then(data => {
        this.setState({
          usersData: data,
          loading: false
        });
      })
      .catch(error => {
        console.error('Error al obtener los datos de los usuarios:', error);
      });
  }

  render() {
    const { usersData } = this.state;
    const userList = usersData.map((data, index) => (
      <Container fluid className="person-list" key={index}>
        <ListGroup>
          <ListGroup.Item className="person-list-item">
            <Row className="person-details-row">
              <Col>
                <span className="person-info">ID Usuario:</span> {data.ID}
              </Col>
              <Col>
                <span className="person-info">Nombre:</span> {data.firstname}
              </Col>
              <Col>
                <span className="person-info">Apellido:</span> {data.lastname}
              </Col>
              <Col>
                <span className="person-info">Correo electrónico:</span> {data.email}
              </Col>
              <Col>
                <span className="person-info">Profesión:</span> {data.profession}
              </Col>
              <Col>
                <span className="person-info">Contraseña:</span> {data.password}
              </Col>
              <Col>
                <span className="person-info">Administrador:</span> {data.isAdmin === 0 ? 'No' : 'Si'}
              </Col>
            </Row>          
          </ListGroup.Item>
          <ListGroup.Item className="edit-delete-buttons">
            <Button className="edit-button">Editar</Button>
            <Button className="delete-button">Borrar</Button>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    ));

    return <>{userList}</>;
  }
}

export default DisplayUsersFile;