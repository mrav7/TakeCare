import React from 'react'
import InNavBar from '../components/navBars/InNavBar'
import MainFooter from '../components/footers/MainFooter'
import Container from 'react-bootstrap/Container'

export default function PrivacyPolicy() {
    return (
        <>
            <InNavBar />
            <Container fluid>
                <p><h1>Política de privacidad</h1></p>
                <p>
                    Nos tomamos muy en serio la privacidad de nuestros usuarios. Por lo tanto,
                    nos comprometemos a proteger la información personal que recopilamos de nuestros usuarios. A continuación,
                    se detallan los términos de nuestra política de privacidad.
                </p>
                <br></br>
                <p>
                    <h4>1. Información personal recopilada:</h4> Recopilamos 
                    información personal de nuestros usuarios, como nombres, direcciones de correo electrónico y números de teléfono 
                    solo cuando se proporciona de manera voluntaria.
                </p>
                <p>
                    <h4>2. Uso de la información personal:</h4> Utilizamos la información personal recopilada para proporcionar servicios y productos a nuestros usuarios,
                    para mejorar nuestros servicios y productos, y para comunicarnos con nuestros usuarios.
                </p>
                <p>
                    <h4>3. Compartir información personal:</h4> No compartimos información personal con terceros, 
                    excepto cuando sea necesario para proporcionar servicios y productos a nuestros usuarios o cuando se requiera por ley.
                </p>
                <p>
                    <h4>4. Seguridad de la información personal:</h4> Nos comprometemos a proteger la información personal de nuestros usuarios mediante el uso de medidas de seguridad adecuadas, 
                    como el cifrado de datos y el acceso restringido a la información personal.
                </p>
                <br></br>
                <p>
                    Como empresa, nos comprometemos a cumplir con todas las leyes y regulaciones aplicables en relación con la privacidad y la protección de datos personales de nuestros usuarios. Si tiene alguna pregunta o inquietud sobre nuestra política de privacidad, no dude en ponerse en contacto con nosotros.
                </p>
            </Container>
            <MainFooter />
        </>
    )
}