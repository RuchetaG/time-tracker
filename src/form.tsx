import React from "react";
import {
  Label,
  Input,
  Button,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Container,
  Row,
  Col,
  CardHeader,
  Alert,
} from "reactstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { CustomDropdown } from "./dropdown";
import { FormInput } from "./FormInput";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Name should be at least 2 characters long")
    .max(64, "Specified name is too long"),
  lastName: Yup.string()
    .min(2, "Name should be atleast 2 characters long")
    .max(64, "Specified name is too long"),
  email: Yup.string().email("Email is invalid"),
  dob: Yup.date().max(new Date("01-01-2000"), "Enter date before 01-01-2000"),
  picked: Yup.string().required("Atleast one option should be selected"),
  checked: Yup.array().required("Check one or more"),
});

export const FormFields = (props: any) => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        dob: null,
        picked: "",
        checked: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched, values }) => (
        <Form className="container">
          <Container className="bg-light border" fluid>
            <Row>
              <Col>
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle tag="h5" className="color-black">
                        User Registration
                      </CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="color-black">
                          <Label>Title: </Label>
                        </Col>
                        <Col>
                          <CustomDropdown></CustomDropdown>
                        </Col>
                        <Col></Col>
                      </Row>
                      <FormInput
                        labelText="First Name: "
                        name="firstName"
                        errors={errors}
                        touched={touched}
                        values={values}
                      ></FormInput>
                      <Row>
                        <Col>
                          <Label className="color-black" check>
                            Last Name:{" "}
                          </Label>
                        </Col>
                        <Col>
                          <Field name="lastName" />
                        </Col>
                        <Col>
                          {errors.lastName && touched.lastName ? (
                            <Alert color="danger">{errors.lastName}</Alert>
                          ) : null}
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Label className="color-black" check>
                            Email:{" "}
                          </Label>
                        </Col>
                        <Col>
                          <Field name="email" />
                        </Col>
                        <Col>
                          {errors.email && touched.email ? (
                            <Alert color="danger">{errors.email}</Alert>
                          ) : null}
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Label className="color-black" check>
                            Date of Birth:{" "}
                          </Label>
                        </Col>
                        <Col>
                          <Field name="dob" type="date" />
                        </Col>
                        <Col>
                          {errors.dob && touched.dob ? (
                            <Alert color="danger">{errors.dob}</Alert>
                          ) : null}
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Label className="color-black" check>
                            What is your favorite color:{" "}
                          </Label>
                        </Col>
                        <Col>
                          <Row className="color-black">
                            <Col>
                              <Field name="picked" type="radio" value="Black" />
                              Black
                            </Col>
                            <Col>
                              <Field name="picked" type="radio" value="White" />
                              White
                            </Col>
                          </Row>
                        </Col>
                        <Col>
                          {errors.picked && touched.picked ? (
                            <Alert color="danger">{errors.picked}</Alert>
                          ) : null}
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Label className="color-black" check>
                            Check me out:{" "}
                          </Label>
                        </Col>
                        <Col>
                          <Row className="color-black">
                            <Col>
                              <Field
                                type="checkbox"
                                name="checked"
                                value="One"
                              />
                              One
                            </Col>
                            <Col>
                              <Field
                                type="checkbox"
                                name="checked"
                                value="Two"
                              />
                              Two
                            </Col>
                            <Col>
                              <Field
                                type="checkbox"
                                name="checked"
                                value="Three"
                              />
                              Three
                            </Col>
                          </Row>
                        </Col>
                        <Col>
                          {errors.checked && touched.checked ? (
                            <Alert color="danger">{errors.checked}</Alert>
                          ) : null}
                        </Col>
                      </Row>
                      <Button>Submit</Button>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>

          <Label>What is your favorite color: </Label>
          <br />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
