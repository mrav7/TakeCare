import React from 'react'
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/mainFooter.css'

export default function MainFooter() {
  return (
    <Container fluid className="footer">
        <Row>
        <Col className='footer-columns'>
        <p><strong>Conectate con nosotros</strong></p>
        <a className="footer-links" href="https://github.com/AlexOttoVicencio/TakeCare">Github</a>
        <p>Mail: alex.otto.v@mail.pucv.cl</p>
        </Col>
        <Col className='footer-columns'>
        <p><strong>Otras Paginas</strong></p>
        <a className="footer-links" href="/faq">Preguntas Frecuntes</a>
        <p><a className="footer-links" href="/privacy-policy">Política de Privacidad</a></p>
        <p><a className="footer-links" href="/admin-users-control">Control Usuarios Admin</a></p>

        </Col>
        
      </Row>
    </Container>
  )
}
