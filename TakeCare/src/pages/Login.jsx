import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../components/styles/forms.css'
import {MdEmail, MdKey} from 'react-icons/md'
import { useForm } from "react-hook-form";
export default function Register() {

    const {
        register,
        watch,
        getValues,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };

    return (
        <>
            <Container fluid className="bg">            
            <Form className="form" onSubmit={handleSubmit(onSubmit)}>
                <h3 class="_h3">Ingresa</h3>                
                <Col>
                    <Form.Group className="_mb-3" controlId="emailInput">
                        <Form.Label><MdEmail className="_icon"/></Form.Label>
                        <Form.Control type="email"
                        name="email"
                        {...register("email",{
                            required:true
                        }
                        )}
                         placeholder="Ingrese su correo electrónico"></Form.Control>
                         {errors.email && errors.email.type === "required" && (
                  <p className="errorMsg">Pon tu correo</p>
                )}
                        <Form.Text></Form.Text>
                    </Form.Group>                
                </Col>                
                <Col>
                    <Form.Group className="_mb-3" controlId="passInput">
                        <Form.Label><MdKey className="_icon"/></Form.Label>
                        <Form.Control type="password"
                        name="password"
                        {...register("password",{
                            required:true
                        }
                        )}
                         placeholder="Ingrese su contraseña"></Form.Control>
                         {errors.password && errors.password.type === "required" && (
                  <p className="errorMsg">Pon tu contraseña</p>
                )}
                        <Form.Text></Form.Text>
                    </Form.Group>
                </Col>
                <Button type="submit" className="_button">Ingresar</Button>               
                <p class="text-center">¿Aún no te has registrado? <a href="/register">Ingresa Aquí</a></p>
            </Form>
            </Container>
        </>
    )
} 
