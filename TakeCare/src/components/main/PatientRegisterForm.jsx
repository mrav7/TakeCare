import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function PatientRegisterForm() {
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
    <Container fluid>
      <h3 class="_h3">Registro de paciente</h3>
      <Form className="" onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="regPatientName">
              <Form.Label>Nombres</Form.Label>
              <Form.Control
                type="text"
                name="name"
                {...register("name", {
                  required: true,
                  pattern: /^([A-Za-z])+$/,
                })}
                placeholder="Primer Nombre"
              ></Form.Control>
              {errors.name && errors.name.type === "required" && (
                <p className="errorMsg">Pon tu nombre</p>
              )}
              {errors.name && errors.name.type === "pattern" && (
                <p className="errorMsg">Debe ser solo letras sin espacios</p>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="regPatientLastname">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                type="text"
                name="firstLastName"
                {...register("firstLastName", {
                  required: true,
                  pattern: /^([A-Za-z])+$/,
                })}
                placeholder="Ingrese el primer apellido"
              ></Form.Control>
              {errors.firstLastName && errors.firstLastName.type === "required" && (
                <p className="errorMsg">Pon tu primer Apellido</p>
              )}
              {errors.firstLastName && errors.firstLastName.type === "pattern" && (
                <p className="errorMsg">Debe ser solo letras sin espacios</p>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="regPatientLastname">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                type="text"
                name="secondLastName"
                {...register("secondLastName", {
                  required: true,
                  pattern: /^([A-Za-z])+$/,
                })}
                placeholder="Ingrese el segundo apellido"
              ></Form.Control>
              {errors.secondLastName && errors.secondLastName.type === "required" && (
                <p className="errorMsg">Pon tu segundo apellido</p>
              )}
              {errors.secondLastName && errors.secondLastName.type === "pattern" && (
                <p className="errorMsg">Debe ser solo letras sin espacios</p>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Col>
          <Form.Group className="mb-3" controlId="regPatientRut">
            <Form.Label>RUT</Form.Label>
            <Form.Control
              type="text"
              name='rut'
              {...register("rut", {
                required: true,
                pattern: /[0-9]{8}(-)(([0-9]{1})|k)/,
              })}
              placeholder="Ingrese el RUT del paciente"
            ></Form.Control>
            {errors.rut && errors.rut.type === "required" && (
                <p className="errorMsg">Pon tu rut</p>
              )}
              {errors.rut && errors.rut.type === "pattern" && (
                <p className="errorMsg">Debe poner rut con guion y sin puntos</p>
              )}
            <Form.Text></Form.Text>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="regPatientBirthday">
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control
              type="date"
              name="date"
              {...register("date", {
                required: true,
                
              })}
              placeholder="Ingrese la fecha de nacimiento del paciente"
            ></Form.Control>
            {errors.date && errors.date.type === "required" && (
                <p className="errorMsg">Pon fecha</p>
              )}
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="regPatientAge">
            <Form.Label>Edad</Form.Label>
            <Form.Control
              type="text"
              name="age"
              {...register("age", {
                required: true,
                min:1,
                max:130
              })}
              placeholder="Ingrese la edad del paciente"
            ></Form.Control>
            {errors.age && errors.age.type === "required" && (
                <p className="errorMsg">Poner edad</p>
              )}
            {errors.age && errors.age.type === "min" && (
                <p className="errorMsg">Edad minima 1</p>
              )}
            {errors.age && errors.age.type === "max" && (
                <p className="errorMsg">Edad maxima 130</p>
              )}
            <Form.Text></Form.Text>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="regPatientGender">
            <Form.Label>Sexo</Form.Label>
            <Form.Select aria-label="Default select example" name="gender"
            {...register("gender", {
                required: true
              })}
              >
              <option selected disabled value="">
                Seleccione el sexo del paciente
              </option>
              <option value="1">Másculino</option>
              <option value="2">Femenino</option>
            </Form.Select>
            {errors.gender && errors.gender.type === "required" && (
                  <p className="errorMsg">Pon tu género</p>
                )}
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="regPatientAddr">
            <Form.Label>Domicilio</Form.Label>
            <Form.Control
              type="text"
              name="homeAdress"
              {...register("homeAdress",{
                required:true
            }
            )} 
              placeholder="Ingrese el domicilio del paciente"
            ></Form.Control>
            {errors.homeAdress && errors.homeAdress.type === "required" && (
                  <p className="errorMsg">Pon dirección</p>
                )}
            <Form.Text></Form.Text>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="regPatientPhone">
            <Form.Label>Número telefónico</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              {...register("phone",{
                required:true,
                pattern:/9([0-9]{8})$/
            }
            )} 
              placeholder="Ingrese el número telefónico del paciente"
            ></Form.Control>
            {errors.phone && errors.phone.type === "required" && (
                  <p className="errorMsg">Pon telefono</p>
                )}
            {errors.phone && errors.phone.type === "pattern" && (
                  <p className="errorMsg">Parte con 9 y continúa con 8 numeros</p>
                )}
            
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="regPatientPrevicion">
            <Form.Label>Previsión</Form.Label>
            <Form.Control
              type="text"
              name="prevision"
              {...register("prevision",{
                required:true,
                pattern:/^[A-Za-z]+$/
            }
            )} 
              placeholder="Ingrese la previción del paciente"
            ></Form.Control>
            {errors.prevision && errors.prevision.type === "required" && (
                  <p className="errorMsg">Pon tu seguro</p>
                )}
            {errors.prevision && errors.prevision.type === "pattern" && (
                  <p className="errorMsg">Solo usa letras</p>
                )}
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="regPatientDiag">
            <Form.Label>Diagnósticos</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              rows={3}
              placeholder="Ingrese el diagnóstico del paciente"
              name="diagnostic"
              {...register("diagnostic",{
                required:true,
                
            }
            )}
            ></Form.Control>
            {errors.diagnostic && errors.diagnostic.type === "required" && (
                  <p className="errorMsg">Pon diagnostico</p>
                )}
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="regPatientTrat">
            <Form.Label>Tratamientos</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              rows={3}
              name="treatment"
              {...register("treatment",{
                required:true,
            }
            )}
              placeholder="Ingrese los tratamientos del paciente"
            ></Form.Control>
            {errors.treatment && errors.treatment.type === "required" && (
                  <p className="errorMsg">Pon tratamiento</p>
                )}
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="regPatientObs">
            <Form.Label>Observaciones</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              rows={3}
              placeholder="Registre sus observaciones"
            ></Form.Control>
            <Form.Text></Form.Text>
          </Form.Group>
        </Col>
        <Button type="submit" className="_button">
          Registrar paciente
        </Button>
      </Form>
    </Container>
  );
}

export default PatientRegisterForm;
