import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function Product() {
  return (
    <>
    <Container fluid className="text-center">
      <h1><strong>Nuestras Herramientas</strong></h1>
      <h3>Una aplicación facilitadora de la salud de los adultos mayores</h3>
      <br></br>
      <p>Nuestra app web está diseñada para ayudar a las personas que cuidan de
      adultos mayores. Ofrecemos una variedad de herramientas y recursos para
      ayudar a los cuidadores, administrar medicamentos, y compartir
      información importante.</p>
      <br></br>
      <p> Nuestro objetivo es hacer que la atención de los adultos mayores sea más
      eficiente y efectiva, para que los cuidadores puedan centrarse en lo más
      importante: el bienestar y la calidad de vida de sus seres queridos.</p>
    </Container>
    <br></br>
    <Container fluid className="text-center">
      <Card fluid className="text-center" style={{margin: 'auto', width: '50%'}} >
        <Card.Header><strong>Registro de pacientes</strong></Card.Header>
        <Card.Body>
          <Card.Text>
            Un registro de medicación ayuda a los usuarios realizando un seguimiento efectivo de sus medicamentos y mejorar la adherencia al tratamiento. Mejorando su calidad de vida.           </Card.Text>
        </Card.Body>
      </Card>
      <br></br>
      <Card fluid className="text-center" style={{margin: 'auto', width: '50%'}} >
        <Card.Header><strong>Registro Medico Recurrente</strong></Card.Header>
        <Card.Body>
          <Card.Text>
            Un registro de información basica que permite analizar como se sienten los pacientes en su día a día. Esto ayudando a analizar su bienestar. 
          </Card.Text>
        </Card.Body>
      </Card>
      <br></br>
      <Card fluid className="text-center" style={{margin: 'auto', width: '50%'}} >
        <Card.Header><strong>Registro de tratamiento</strong></Card.Header>
        <Card.Body>
          <Card.Text>
          Es una manera que permite al profesional de la salud mantener el historia y progreso del paciente a través de un sistema. 
          </Card.Text>
        </Card.Body>
      </Card>
      </Container>
    </>    
  )
}

export default Product
