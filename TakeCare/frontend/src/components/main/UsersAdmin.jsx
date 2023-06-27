import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import EditUsersAdmin from "./EditUsersAdmin";

//agrarro los datos
export default function UsersAdmin() {
  let userID;
  const navigate =useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/getUsers")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/deleteUser/' + id)
    .then(res => { 
      location.reload();
    })
    .catch(err => console.log(err))
    
  }

  return (
    <>
      <Container >
        <Row>
          <Col></Col>
          <Col>
            <Card style={{ margin:'20px' }}>
              <Card.Header>
                <Button variant="warning" >
                  <Link to="/admin-create-users">Crear Usuario</Link>
                </Button>
              </Card.Header>
            </Card>
            {data.map((users, index) => {
              return (
                <div>
                  <Card key={index} style={{ margin:'20px' }}> 
                    <Card.Header>
                      {users.firstname} {users.lastname}
                    </Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>ID: {users.ID}</ListGroup.Item>
                      <ListGroup.Item>{users.email}</ListGroup.Item>
                      <ListGroup.Item>{users.profession}</ListGroup.Item>
                      <ListGroup.Item>
                      <Button variant="danger" onClick={ () => handleDelete(users.ID)}>Delete</Button>
                       
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                  <div></div>
                </div>
              );
            })}
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
