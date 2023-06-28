import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  InputGroup,
  Form,
  Button
} from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from "axios";



export default function ControlPanelContent() {
    let userid=1;
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/getUsers")

      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);



  return (
    
    <Container>
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
                      <Button variant="info" href="user-patient-view">VerPacientes</Button>{' '}
                      </ListGroup.Item>
                      
                    </ListGroup>
                  </Card>
                  
                
              );
            })}
        
    </Container>
  );
}
