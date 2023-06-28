import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import EditUsersAdmin from "./EditUsersAdmin";

//agrarro los datos
export default function UsersAdmin() {
  let userID;
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/getUsers")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/deleteUser/" + id)
      .then((res) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  //update user muestra la forma dependiendo de editar

  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  //aqui se hace el update

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    profession: "",
    isAdmin: "",
    password: "",
  });
  const handleUpdate = (event,id) => {
    event.preventDefault()
    axios.put("http://localhost:3000/updateUser/" + id, values)
      .then((res) => {
        console.log(res );
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Card style={{ margin: "20px" }}>
              <Card.Header>
                <Button variant="warning">
                  <Link to="/admin-create-users">Crear Usuario</Link>
                </Button>
              </Card.Header>
            </Card>
            {data.map((users, index) => {
              return (
                
                  <Card key={index} style={{ margin: "20px" }}>
                    <Card.Header>
                      {users.firstname} {users.lastname}
                    </Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>ID: {users.ID}</ListGroup.Item>
                      <ListGroup.Item>{users.email}</ListGroup.Item>
                      <ListGroup.Item>{users.profession}</ListGroup.Item>
                      <ListGroup.Item>
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(users.ID)}
                        >
                          Delete
                        </Button>
                      </ListGroup.Item>
                      {/* <ListGroup.Item>
                        <Button variant="info">
                 <Link to="/admin-update-user">Editar</Link>
                        </Button>

                        {isShown && (
                          <div>
                            <Form  key={index} >
                              <Form.Group className="mb-3">
                                <Form.Label>Primer nombre:</Form.Label>
                                <Form.Control
                                  type="text"
                                  onChange={(e) =>
                                    setValues({
                                      ...values,
                                      firstname: e.target.value,
                                    })
                                  }
                                />
                              </Form.Group>
                              <Form.Group className="mb-3">
                                <Form.Label>Primer apellido:</Form.Label>
                                <Form.Control
                                  type="text"
                                  onChange={(e) =>
                                    setValues({
                                      ...values,
                                      lastname: e.target.value,
                                    })
                                  }
                                />
                              </Form.Group>
                              <Form.Group className="mb-3">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control
                                  type="email"
                                  onChange={(e) =>
                                    setValues({
                                      ...values,
                                      email: e.target.value,
                                    })
                                  }
                                />
                              </Form.Group>
                              <Form.Group className="mb-3">
                                <Form.Label>Profesión:</Form.Label>
                                <Form.Control
                                  type="text"
                                  onChange={(e) =>
                                    setValues({
                                      ...values,
                                      profession: e.target.value,
                                    })
                                  }
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                              >
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                  type="password"
                                  placeholder="Password"
                                  onChange={(e) =>
                                    setValues({
                                      ...values,
                                      password: e.target.value,
                                    })
                                  }
                                />
                              </Form.Group>
                              <Form.Group className="mb-3">
                                <Form.Label>
                                  Administrador? (responda con 1 si o 0 para no)
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  onChange={(e) =>
                                    setValues({
                                      ...values,
                                      isAdmin: e.target.value,
                                    })
                                  }
                                />
                              </Form.Group>
                              <Button variant="primary" type="submit" >
                                Envia Cambios
                              </Button>
                            </Form>
                          </div>
                                )}
                      </ListGroup.Item>*/}
                    </ListGroup>
                  </Card>
                  
                
              );
            })}
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
