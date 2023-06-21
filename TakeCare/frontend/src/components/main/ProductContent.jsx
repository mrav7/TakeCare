import React from "react";
import Container from "react-bootstrap/Container";
import "../styles/landingPageContent.css";
import Card from "react-bootstrap/Card";

export default function ProductContent() {
  return (
    <>
      <Container fluid className="landingContent text-center">
        <h1>Nuestras Herramientas</h1>
        <h3>Una aplicación que ayuda a los adultos mayores.</h3>

        <p>
          Nuestra app web está diseñada para ayudar a las personas que cuidan de
          adultos mayores. Ofrecemos una variedad de herramientas y recursos
          para ayudar a los cuidadores, administrar medicamentos, y compartir
          información importante.
        </p>
        <p>
          Nuestro objetivo es hacer que la atención de los adultos mayores sea
          más eficiente y efectiva, para que los cuidadores puedan centrarse en
          lo más importante: el bienestar y la calidad de vida de sus seres
          queridos.
        </p>
      </Container>
      <Container fluid className="landingContent text-center">
        <h1>Algunas Funcionalidades</h1>
      </Container>

      <Container fluid className="card-contents">
        <Card style={{ width: "50%" }} className="mx-auto">
          <Card.Body>
            <Card.Title>Registro de Pacientes</Card.Title>

            <Card.Text>
              Un registro de medicación ayuda a los usuarios realizando un
              seguimiento efectivo de sus medicamentos y mejorar la adherencia
              al tratamiento. Mejorando su calidad de vida.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>

      <Container fluid className="card-contents">
        <Card style={{ width: "50%" }} className="mx-auto">
          <Card.Body>
            <Card.Title>Registro Medico Recurrente</Card.Title>

            <Card.Text>
              Un registro de medicación ayuda a los usuarios realizando un
              seguimiento efectivo de sus medicamentos y mejorar la adherencia
              al tratamiento. Mejorando su calidad de vida.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>

      <Container fluid className="card-contents">
        <Card style={{ width: "50%" }} className="mx-auto">
          <Card.Body>
            <Card.Title>Registro de Tratamiento</Card.Title>

            <Card.Text>
              Es una manera que permite al profesional de la salud mantener el
              historia y progreso del paciente a través de un sistema.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
