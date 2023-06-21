import React from "react";
import { Container, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function PatientDailyReviewForm() {
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
      <h3 class="_h3">Registo chequeo diario</h3>
      <Form className="" onSubmit={handleSubmit(onSubmit)}>
        <Col>
          <Form.Group className="mb-3" controlId="checkPatientName">
            <Form.Label>Paciente</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="patient"
              {...register("patient", {
                required: true,
              })}
            >
              <option selected disabled value="">
                Seleccione el paciente
              </option>
            </Form.Select>
            {errors.patient && errors.patient.type === "required" && (
              <p className="errorMsg">Elige paciente</p>
            )}
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="checkPatientDate">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="date"
              {...register("date", {
                required: true,
              })}
            ></Form.Control>
            {errors.date && errors.date.type === "required" && (
              <p className="errorMsg">Pon fecha</p>
            )}
            <Form.Text></Form.Text>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="checkPatientPresion">
            <Form.Label>Presion</Form.Label>
            <Form.Control
              type="text"
              name="pressure"
              {...register("pressure", {
                required: true,
              })}
              placeholder="Ingrese la presión"
            ></Form.Control>
            {errors.pressure && errors.pressure.type === "required" && (
              <p className="errorMsg">Poner la presión</p>
            )}
            <Form.Text></Form.Text>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="checkPatientTemp">
            <Form.Label>Temperatura</Form.Label>
            <Form.Control
              type="text"
              name="temp"
              {...register("temp", {
                required: true,
                pattern:/[0-9]+/,
                min:0,
                max:48
              })}
              placeholder="Ingrese la temperatura"
            ></Form.Control>
            {errors.temp && errors.temp.type === "required" && (
              <p className="errorMsg">Poner la temperatura</p>
            )}
            {errors.temp && errors.temp.type === "min" && (
              <p className="errorMsg">Pon temperatura mayor a 0</p>
            )}
            {errors.temp && errors.temp.type === "max" && (
              <p className="errorMsg">Pon temperatura menor que 48</p>
            )}
            {errors.temp && errors.temp.type === "pattern" && (
              <p className="errorMsg">Solo numeros</p>
            )}
            <Form.Text></Form.Text>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="checkPatientPeso">
            <Form.Label>Peso</Form.Label>
            <Form.Control
              type="text"
              name="wheight"
              {...register("wheight", {
                required: true,
                pattern:/[0-9]+/,
              })}
              placeholder="Ingrese el peso"
            ></Form.Control>
            {errors.wheight && errors.wheight.type === "required" && (
              <p className="errorMsg">Poner peso</p>
            )}
            {errors.wheight && errors.wheight.type === "pattern" && (
              <p className="errorMsg">Solo numeros</p>
            )}
            <Form.Text></Form.Text>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="checkPatientObs">
            <Form.Label>Observaciones:</Form.Label>
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
          Registrar chequeo
        </Button>
      </Form>
    </Container>
  );
}
export default PatientDailyReviewForm;
