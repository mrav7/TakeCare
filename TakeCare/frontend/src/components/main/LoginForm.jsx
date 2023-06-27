import React, {useRef} from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/forms.css'
import {MdEmail, MdKey} from 'react-icons/md'
import { useForm } from "react-hook-form";
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
export default function LoginForm() {
    const API_BASE_URL = 'http://localhost:3010';
    const {
        register,
        watch,
        getValues,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = () => {
        const {email, password} = getValues();
        axios.post(`${API_BASE_URL}/api/login`, {email, password})
          .then(response => {
            localStorage.setItem('token', response.data.token);
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      };      
      const captcha = useRef(null); 
      const onChange = () => {
        console.log(captcha.current.getValue());
      }
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
                <Col>
                    <ReCAPTCHA className="_recaptchaLogin"
                    ref={captcha}
                    sitekey="6LdNAsUmAAAAAIJ8z0IDTB0mYzJroF84cEEB-lQX"
                    onChange={onChange}
                    />
                </Col>
                <Button type="submit" className="_button">Ingresar</Button>               
                <p class="text-center">¿Aún no te has registrado? <a href="/register">Ingresa Aquí</a></p>
            </Form>
            </Container>
        </>
    )
} 
