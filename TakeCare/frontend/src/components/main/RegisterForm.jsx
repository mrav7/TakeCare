import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/forms.css";
import { useForm } from "react-hook-form";
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import {
  MdAccountCircle,
  MdEmail,
  MdMedicalServices,
  MdKey,
} from "react-icons/md";

export default function RegisterForm() {
  const {
    register,
    watch,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const captcha = useRef(null);
  const onChange = () => {
    console.log(captcha.current.getValue());
  };

  //Conexión con backend
  const API_BASE_URL = 'http://localhost:3010';
  const onSubmit = () => {
    const { name, lastName, email, profession, password } = getValues();
    const value = {
      firstname: name,
      lastname: lastName, 
      email: email,
      profession: profession,
      password: password,
      isAdmin: true
    };
    axios.post(`${API_BASE_URL}/api/register`, value)
      .then(response => {
        localStorage.setItem('token', response.data.token);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      <Container fluid className="bg">
        <Form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h3 class="_h3">Regístrate</h3>
          <Row>
            <Col>   
              <Form.Group className="_mb-3" controlId="nameInput">
                <Form.Label>
                  <MdAccountCircle className="_icon" />
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Ingrese su nombre"
                  {...register("name", {
                    required: true,
                    pattern: /^([A-Za-z])+$/,
                  })}
                ></Form.Control>
                <Form.Text></Form.Text>
              </Form.Group>
              {errors.name && errors.name.type === "required" && (
                  <p className="errorMsg">Pon tu nombre</p>
                )}
                {errors.name && errors.name.type === "pattern" && (
                  <p className="errorMsg">Debe ser solo letras sin espacios</p>
                )}
            </Col>
            <Col>
              <Form.Group className="_mb-3" controlId="lastnameInput">
                <Form.Label>
                  <MdAccountCircle className="_icon" />
                </Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  {...register("lastName", {
                    required: true,
                    pattern: /^([A-Za-z])+$/,
                  })}
                  placeholder="Ingrese su primer apellido"
                ></Form.Control>
                <Form.Text></Form.Text>
              </Form.Group>
              {errors.lastName && errors.lastName.type === "required" && (
                  <p className="errorMsg">Pon tu primer apellido</p>
                )}
                {errors.lastName && errors.lastName.type === "pattern" && (
                  <p className="errorMsg">Debe ser solo letras sin espacios</p>
                )}
            </Col>
          </Row>
          <Col>
            <Form.Group className="_mb-3" controlId="emailInput">
              <Form.Label>
                <MdEmail className="_icon" />
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                {...register("email",{
                    required:true
                }
                )}
                placeholder="Ingrese su correo electrónico"
              ></Form.Control>              
              <Form.Text></Form.Text>
            </Form.Group>
            {errors.email && errors.email.type === "required" && (
                <p className="errorMsg">Pon tu correo</p>
              )}
          </Col>
          <Col>
            <Form.Group className="_mb-3" controlId="professionInput" >
              <Form.Label>
                <MdMedicalServices className="_icon" />
              </Form.Label>
              <Form.Select name="profession"  {...register("profession",{
                    required:true
                }
                )} >
                <option selected disabled value="">
                  Seleccione una profesión
                </option>
                <option value="Médico">Médico</option>
                <option value="Enfermero">Enfermero</option>
                <option value="Odontológo">Odontólogo</option>
                <option value="Nutricionista">Nutricionista</option>
                <option value="Psicólogo">Psicólogo</option>
                <option value="Kinesiólogo">Kinesiólogo</option>
                <option value="Fisioterapeuta">Fisioterapeuta</option>
                <option value="TerapeutaOcupacional">
                  Terapeuta Ocupacional
                </option>
                <option value="N/A">N/A</option>
              </Form.Select>              
            </Form.Group>
            {errors.profession && errors.profession.type === "required" && (
                <p className="errorMsg">Pon tu profesión</p>
              )}
          </Col>
          <Col>
            <Form.Group className="_mb-3" controlId="passInput">
              <Form.Label>
                <MdKey className="_icon" />
              </Form.Label>
              <Form.Control
                type="password"
                name="password"
                {...register("password",{
                  required:true,
                  minLength:6,
                  maxLength:20,
                  pattern:/^([A-Za-z0-9])+$/
                }
                )}
                placeholder="Ingrese su contraseña"
              ></Form.Control>              
              <Form.Text></Form.Text>
            </Form.Group>
            {errors.password && errors.password.type === "required" && (
                <p className="errorMsg">Pon tu contraseña</p>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <p className="errorMsg">Ponga más de 6 caracteres</p>
              )}
              {errors.password && errors.password.type === "maxLength" && (
                <p className="errorMsg">Ponga menos de 20 caracteres</p>
              )}
              {errors.password && errors.password.type === "pattern" && (
                <p className="errorMsg">Ponga solo mayúsculas, minúsculas y números</p>
              )}
          </Col>
          <Col>
            <Form.Group className="_mb-3" controlId="repassInput">
              <Form.Label>
                <MdKey className="_icon" />
              </Form.Label>
              <Form.Control
                type="password"
                name="rePassword"
                {...register("rePassword",{
                  required:true,
                  validate: value => value === watch('password')
                })}
                placeholder="Ingrese nuevamente su contraseña"
              ></Form.Control>              
              <Form.Text></Form.Text>
            </Form.Group>
            {errors.rePassword && errors.rePassword.type === "required" && (
                <p className="errorMsg">Pon tu contraseña de nuevo</p>
              )}
              {errors.rePassword && errors.rePassword.type === "validate" && (
                <p className="errorMsg">Las contraseñas no coinciden</p>
              )}
          </Col>
          <Col>
            <ReCAPTCHA className="_recaptchaRegister"
              ref={captcha}
              sitekey="6LdNAsUmAAAAAIJ8z0IDTB0mYzJroF84cEEB-lQX"
              onChange={onChange}
            />
          </Col>
          <Button type="submit" className="_button">
            Crear Cuenta
          </Button>
          <Col>
            <Form.Group className="_mb-3" controlId="acceptTermsInput">
              <Form.Check
                type="checkbox"
                name="checkbox"
                {...register("checkbox",{
                  required:true
                })}

                label="Acepta las Condiciones de Uso y Política de Privacidad"
              ></Form.Check>              
            </Form.Group>
            {errors.checkbox && errors.checkbox.type === "required" && (
                <p className="errorMsg">Acepta las condiciones</p>
              )}
          </Col>
          <p className="text-center">
            ¿Ya tienes una cuenta? <a href="/login">Ingresa Aquí</a>
          </p>
        </Form>
      </Container>
    </>
  );
}
