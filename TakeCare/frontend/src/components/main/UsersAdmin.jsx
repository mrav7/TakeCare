import React, { Fragment,useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function UsersAdmin() {
  const [data, setData] = useState([])
  useEffect(() => {
    
      axios.get('http://localhost:3000/getUsers')
      .then(res => console.log(res.data))
      .then(res => setData(res.data))
      
      .catch(err => console.log(err))
      
    
    
  }, []);
  

  return (
    <>
      <Container>
        <Row>
          <Col>ddd</Col>
          <Col>
            {data.map((users,index)=>{
              return <div key={index}>
                <div>{users.firstname}</div>
              </div>
            })}
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
