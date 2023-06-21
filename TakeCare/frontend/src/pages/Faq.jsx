import React from 'react'
import InNavBar from '../components/navBars/InNavBar'
import MainFooter from '../components/footers/MainFooter'
import { Container, Accordion} from 'react-bootstrap'

export default function Faq() {
    return (
        <>
            <InNavBar />
            <Container fluid>
                <h1>Preguntas Frecuentes</h1>
                <Accordion defaultActiveKey={['0']} alwaysOpen className="_center">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <strong>¿Qué es TakeCare?</strong>
                        </Accordion.Header>
                        <Accordion.Body>
                            TakeCare es una aplicación web que tiene como objetivo ofrecer funcionalidades para facilitar el cuidado de pacientes.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <strong>¿Hacia quienes está dirigido TakeCare?</strong>
                        </Accordion.Header>
                        <Accordion.Body>
                            Profesionales del rubro de la salud. Médicos, enfermeros, dentistas, nutricionistas, psicológos, kinesiologos, etc. 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            <strong>¿Qué funcionalidades ofrece?</strong>
                        </Accordion.Header>
                        <Accordion.Body>
                            Nuestra aplicación le permite al profesional de la salud registrar los datos de sus pacientes para luego poder acceder a ellos rápida y seguramente.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            <strong>¿Puedo utilizar TakeCare en mi dispostiivo móvil?</strong>
                        </Accordion.Header>
                        <Accordion.Body>
                            El diseño responsivo con el que TakeCare fue creado en mente permite al usuario acceder a la aplicación a través de computadores de escritorio, notebooks, smartphones y tablets.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
            <MainFooter />
        </>
    )
}