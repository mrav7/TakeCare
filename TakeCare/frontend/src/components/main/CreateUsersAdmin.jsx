import React, { Fragment, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../../components/styles/forms.css'

function CreateUsersAdmin() {
  const [values, setValues] = useState({
    firstname:'',
    lastname:'',
    profession:'',
    admin:'',
    password:''

  })
  const navigate = useNavigate();
  const handleSubmit =(e) =>{
    e.preventDefault();
    axios.post('http://localhost:3000/createUser', values)
    .then(res => {
      console.log(res);
      navigate('/admin-users-control')
    })
    .catch(err => console.log(err)) 
  }
  return (
    <>
        <Container>
      <Row>
        <Col></Col>
        <Col>
          <Form onSubmit={handleSubmit}>
            
            <Form.Group className="mb-3" >
              <Form.Label>Primer nombre:</Form.Label>
              <Form.Control type="text" onChange={e => setValues({...values, firstname: e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Primer apellido:</Form.Label>
              <Form.Control type="text" onChange={e => setValues({...values, lastname: e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" onChange={e => setValues({...values, email: e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Profesión:</Form.Label>
              <Form.Control type="text" onChange={e => setValues({...values, profession: e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={e => setValues({...values, password: e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Administrador? (responda con 1 si o 0 para no)</Form.Label>
              <Form.Control type="text" onChange={e => setValues({...values, isAdmin: e.target.value})}/>
            </Form.Group>
            <Button className="_button" variant="primary" type="submit">
              Crear
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
      </Container>
    </>
  );
}

export default CreateUsersAdmin;
