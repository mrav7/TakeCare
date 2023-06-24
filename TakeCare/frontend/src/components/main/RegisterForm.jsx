import React, {useRef} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/forms.css"
import { useForm } from "react-hook-form";
import ReCAPTCHA from 'react-google-recaptcha';
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

  const onSubmit = (data) => {
    console.log(data);
  };

  const captcha = useRef(null);  

  // genera un token cuando el usuario completa
  // exitosamente el captcha
  const onChange = () => {
    console.log(captcha.current.getValue());
  }

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

                {errors.name && errors.name.type === "required" && (
                  <p className="errorMsg">Pon tu nombre</p>
                )}
                {errors.name && errors.name.type === "pattern" && (
                  <p className="errorMsg">Debe ser solo letras sin espacios</p>
                )}

                <Form.Text></Form.Text>
              </Form.Group>
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
                  placeholder="Ingrese su primer appellido"
                ></Form.Control>

{errors.lastName && errors.lastName.type === "required" && (
                  <p className="errorMsg">Pon tu primer apellido</p>
                )}
                {errors.lastName && errors.lastName.type === "pattern" && (
                  <p className="errorMsg">Debe ser solo letras sin espacios</p>
                )}

                <Form.Text></Form.Text>
              </Form.Group>
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

            {errors.email && errors.email.type === "required" && (
                  <p className="errorMsg">Pon tu correo</p>
                )}
              <Form.Text></Form.Text>
            </Form.Group>
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
              </Form.Select>
                {errors.email && errors.email.type === "required" && (
                  <p className="errorMsg">Pon tu profesión</p>
                )}
            </Form.Group>
            
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
              {errors.password && errors.password.type === "required" && (
                  <p className="errorMsg">Pon tu contraseña</p>
                )}
              {errors.password && errors.password.type === "minLength" && (
                  <p className="errorMsg">Ponga mas de 6 caracteres</p>
                )}
              {errors.password && errors.password.type === "maxLength" && (
                  <p className="errorMsg">Ponga menos de 20 caracteres</p>
                )}
              {errors.password && errors.password.type === "pattern" && (
                  <p className="errorMsg">Ponga solo mayusculas, minusculas y numeros</p>
                )}
              <Form.Text></Form.Text>
            </Form.Group>
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
                  required:true
                })}
                placeholder="Ingrese nuevamente su contraseña"
              ></Form.Control>
              {errors.rePassword && errors.rePassword.type === "required" && (
                  <p className="errorMsg">Pon tu contraseña de nuevo</p>
                )}
              <Form.Text></Form.Text>
            </Form.Group>
            {watch("rePassword") !== watch("password") &&
              getValues("rePassword") ? (
               <p>password not match</p>
               ) : null}
          </Col>
          <Col>
            <ReCAPTCHA className="_recaptcha"
              ref={captcha}
              sitekey="6LdNAsUmAAAAAIJ8z0IDTB0mYzJroF84cEEB-lQX"
              onChange={onChange}
            />
          </Col>
          <Button type="submit" className="_button">
            Crear Cuenta
          </Button>
          <Col>
            <Form.Group className="_mb-3" controlID="acceptTermsInput">
              <Form.Check
                type="checkbox"
                name="checkbox"
                {...register("checkbox",{
                  required:true
                })}

                label="Acepta las Condiciones de Uso y Política de Privacidad"
              ></Form.Check>
              {errors.checkbox && errors.checkbox.type === "required" && (
                  <p className="errorMsg">Acepta las condiciones</p>
                )}
            </Form.Group>
          </Col>
          <p class="text-center">
            ¿Ya tienes una cuenta? <a href="/login">Ingresa Aquí</a>
          </p>
        </Form>
      </Container>
    </>
  );
}
