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

export default function PatientsAdmin() {
  let userID;
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/getPatients")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            
            {data.map((patients, index) => {
              return (
                <div>
                  <Card key={index} style={{ margin: "20px" }}>
                    <Card.Header>
                      {patients.firstname} {patients.middlename} {patients.lastname}
                    </Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>Nacimiento: {patients.birthdate}</ListGroup.Item>
                      <ListGroup.Item>Edad: {patients.age}</ListGroup.Item>
                      <ListGroup.Item>Telefono: {patients.phone}</ListGroup.Item>
                      <ListGroup.Item>Dirección: {patients.address}</ListGroup.Item>

                      <ListGroup.Item></ListGroup.Item>
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
