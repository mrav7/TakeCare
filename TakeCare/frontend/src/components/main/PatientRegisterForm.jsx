import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PatientRegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [values, setValues] = useState({
    IDProfessional: '',
    firstname: '',
    middlename: '',
    lastname: '',
    rut: '',
    birthdate: '',
    age: '',
    gender: '',
    address: '',
    phone: '',
    insurance: '',
    diagnostics: '',
    treatments: '',
    observations: ''
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios.post('http://localhost:3000/createPatient', values)
      .then(res => {
        console.log(res);
        navigate('/admin-user-list-control')
      })
      .catch(err => console.log(err)) 
  }

  return (
    <Container fluid>
      <h3 className="_h3">Registro de paciente</h3>
      <Form className="" method="" onSubmit={handleSubmit(onSubmit)}>
        <Col>
            <Form.Group className="mb-3" controlId="regPatientsProfessionalID">
              <Form.Label>ID del profesional tratante</Form.Label>
              <Form.Control 
                type="text"
                name="IDProfessional"
                {...register("IDProfessional", {
                  required: true,
                  min: 1,
                  max: 1000,
                })}
                placeholder="Ingrese su ID"
                onChange={e => setValues({...values, IDProfessional: e.target.value})}
              ></Form.Control>
              {errors.IDProfessional && errors.IDProfessional.type === "required" && (
                <p className="errorMsg">Ingresa el ID del profesional</p>
              )}
              {errors.IDProfessional && errors.IDProfessional.type === "min" && (
                <p className="errorMsg">El ID debe ser mayor a 0</p>
              )}
              {errors.IDProfessional && errors.IDProfessional.type === "max" && (
                <p className="errorMsg">El ID debe ser menor o igual a 1000</p>
              )}
            </Form.Group>
          </Col>
        <Row>          
          <Col>
            <Form.Group className="mb-3" controlId="regPatientName">
              <Form.Label>Nombres</Form.Label>
              <Form.Control 
                type="text"
                name="firstname"
                {...register("firstname", {
                  required: true,
                  pattern: /^([A-Za-z])+$/,
                })}
                placeholder="Ingrese su nombre de pila"
                onChange={e => setValues({...values, firstname: e.target.value})}
              ></Form.Control>
              {errors.firstname && errors.firstname.type === "required" && (
                <p className="errorMsg">Ingresa el primer nombre</p>
              )}
              {errors.firstname && errors.firstname.type === "pattern" && (
                <p className="errorMsg">Solo se permiten letras sin espacios</p>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="regPatientMiddlename">
              <Form.Label>Primer apellido</Form.Label>
              <Form.Control
                type="text"
                name="middlename"
                {...register("middlename", {
                  pattern: /^([A-Za-z])+$/,
                })}
                placeholder="Ingrese su primer apellido"
                onChange={e => setValues({...values, middlename: e.target.value})}
              ></Form.Control>
              {errors.middlename && errors.middlename.type === "pattern" && (
                <p className="errorMsg">Solo se permiten letras sin espacios</p>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="regPatientLastName">
              <Form.Label>Segundo Apellido</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
                {...register("lastname", {
                  required: true,
                  pattern: /^([A-Za-z])+$/,
                })}
                placeholder="Ingrese su segundo"
                onChange={e => setValues({...values, lastname: e.target.value})}
              ></Form.Control>
              {errors.lastname && errors.lastname.type === "required" && (
                <p className="errorMsg">Ingresa su segundo apellido</p>
              )}
              {errors.lastname && errors.lastname.type === "pattern" && (
                <p className="errorMsg">Solo se permiten letras sin espacios</p>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row>          
          <Col>
            <Form.Group className="mb-3" controlId="regPatientRUT">
              <Form.Label>RUT</Form.Label>
              <Form.Control
                type="text"
                name="rut"
                {...register("rut", {
                  required: true,
                  pattern: /[0-9]{8}(-)(([0-9]{1})|k)/,
                })}
                placeholder="RUT del paciente sin puntos y con guión"
                onChange={e => setValues({...values, rut: e.target.value})}
              ></Form.Control>
              {errors.rut && errors.rut.type === "required" && (
                <p className="errorMsg">Ingresa el RUT</p>
              )}
              {errors.rut && errors.rut.type === "pattern" && (
                <p className="errorMsg">Ingresa un RUT válido</p>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="regPatientBirthdate">
              <Form.Label>Fecha de nacimiento</Form.Label>
              <Form.Control
                type="text"
                name="birthdate"
                {...register("birthdate", {
                  required: true,
                })}
                placeholder="AAAA/MM/DD"
                onChange={e => setValues({...values, birthdate: e.target.value})}
              ></Form.Control>
              {errors.birthdate && errors.birthdate.type === "required" && (
                <p className="errorMsg">Ingresa la fecha de nacimiento</p>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="regPatientAge">
              <Form.Label>Edad</Form.Label>
              <Form.Control
                type="number"
                name="age"
                {...register("age", {
                  required: true,
                  min: 0,
                })}
                placeholder="Edad"
                onChange={e => setValues({...values, age: e.target.value})}
              ></Form.Control>
              {errors.age && errors.age.type === "required" && (
                <p className="errorMsg">Ingresa la edad</p>
              )}
              {errors.age && errors.age.type === "min" && (
                <p className="errorMsg">La edad debe ser mayor o igual a 0</p>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="regPatientGender">
              <Form.Label>Sexo</Form.Label>
              <Form.Control 
                as="select"
                name="gender"
                {...register("gender", {
                  required: true,
                })}
                onChange={e => setValues({...values, gender: e.target.value})}>
                <option value="">Selecciona una opción</option>
                <option value="0">Masculino</option>
                <option value="1">Femenino</option>
              </Form.Control>
              {errors.gender && errors.gender.type === "required" && (
                <p className="errorMsg">Selecciona el sexo</p>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="regPatientAddress">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                name="address"
                {...register("address", {
                  required: true,
                })}
                placeholder="Dirección"
                onChange={e => setValues({...values, address: e.target.value})}
              ></Form.Control>
              {errors.address && errors.address.type === "required" && (
                <p className="errorMsg">Ingresa la dirección</p>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="regPatientPhone">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                {...register("phone", {
                  required: true,
                  pattern: /[0-9]{9}/,
                })}
                placeholder="Teléfono"
                onChange={e => setValues({...values, phone: e.target.value})}
              ></Form.Control>
              {errors.phone && errors.phone.type === "required" && (
                <p className="errorMsg">Ingresa el teléfono</p>
              )}
              {errors.phone && errors.phone.type === "pattern" && (
                <p className="errorMsg">Ingresa un número de teléfono válido</p>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="regPatientInsurance">
              <Form.Label>Seguro de salud</Form.Label>
              <Form.Control
                type="text"
                name="insurance"
                {...register("insurance", {
                  required: true,
                })}
                placeholder="Seguro de salud"
                onChange={e => setValues({...values, insurance: e.target.value})}
              ></Form.Control>
              {errors.insurance && errors.insurance.type === "required" && (
                <p className="errorMsg">Ingresa el seguro de salud</p>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="regPatientDiagnostics">
              <Form.Label>Diagnósticos</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="diagnostics"
                {...register("diagnostics", {
                  required: true,
                })}
                placeholder="Diagnósticos"
                onChange={e => setValues({...values, diagnostics: e.target.value})}
              ></Form.Control>
              {errors.diagnostics && errors.diagnostics.type === "required" && (
                <p className="errorMsg">Ingresa los diagnósticos</p>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="regPatientTreatments">
              <Form.Label>Tratamientos</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="treatments"
                {...register("treatments", {
                  required: true,
                })}
                placeholder="Tratamientos"
                onChange={e => setValues({...values, treatments: e.target.value})}
              ></Form.Control>
              {errors.treatments && errors.treatments.type === "required" && (
                <p className="errorMsg">Ingresa los tratamientos</p>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="regPatientObservations">
              <Form.Label>Observaciones</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="observations"
                {...register("observations")}
                placeholder="Observaciones"
                onChange={e => setValues({...values, observations: e.target.value})}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Registrar paciente
        </Button>
      </Form>
    </Container>
  );
}

export default PatientRegisterForm;
