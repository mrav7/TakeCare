import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "../styles/landingPageContent.css";

export default function LandingPage() {
  return (
    <Container fluid className="landingContent text-center">
      <h1>
        <strong>Ayudando al Adulto Mayor</strong>
      </h1>
      <h3>Una aplicación con corazón.</h3>
      <a href="/register">
        <Button size="lg">
          <strong> Registrate ya!</strong>
        </Button>
      </a>
      <Container fluid className="landingContent text-center">
        <h1>¿Qué es lo que hacemos?</h1>
        <h5 class="text-center">
           Ayudamos a los profesionales manteniendo
          información acerca de sus pacientes.
         </h5>
      </Container>
    </Container>
  );
}
