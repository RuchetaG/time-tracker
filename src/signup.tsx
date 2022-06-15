import React from "react";
import {
  Label,
  Button,
  Card,
  CardBody,
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
import axios from "axios";

const signUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Name should be at least 2 characters long")
    .max(64, "Specified name is too long"),
  lastName: Yup.string()
    .min(2, "Name should be atleast 2 characters long")
    .max(64, "Specified name is too long"),
  email: Yup.string().email("Email is invalid"),
  dob: Yup.date()
    .max(new Date("01-01-2030"), "Enter date before 01-01-2030")
    .required("DOB field is required"),
  cityInput: Yup.string().required("City field is required"),
});

interface UserSignup {
  title: any;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dob: Date | null;
  cityInput: string;
}

export const SignUpForm = () => {
  const signupUser = (requestPayload: UserSignup) => {
    const URL = "https://api.sampleapis.com/coffee/hot";

    axios
      .post(URL, requestPayload)
      .then(function (response) {
        console.log("success:", response);
      })
      .catch(function (error) {
        console.log("Error: ", error);
      });
  };

  return (
    <Formik
      initialValues={{
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        dob: null,
        cityInput: "",
      }}
      validationSchema={signUpSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
        signupUser(values);
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
                        User Onboarding
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
                      <FormInput
                        labelText="Last Name: "
                        name="lastName"
                        errors={errors}
                        touched={touched}
                        values={values}
                      ></FormInput>
                      <FormInput
                        labelText="Email: "
                        name="email"
                        errors={errors}
                        touched={touched}
                        values={values}
                      ></FormInput>
                      <FormInput
                        labelText="Password: "
                        name="password"
                        errors={errors}
                        touched={touched}
                        values={values}
                      ></FormInput>
                      <FormInput
                        labelText="City: "
                        name="cityInput"
                        errors={errors}
                        touched={touched}
                        values={values}
                      ></FormInput>
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
                      <Button>Submit</Button>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </Form>
      )}
    </Formik>
  );
};
