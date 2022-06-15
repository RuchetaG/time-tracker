import React from "react";
import { Button, Card, Row, Col, Alert, Typography } from "antd";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { CustomDropdown } from "./dropdown";
import { FormInput } from "./formInput";
import axios from "axios";

const { Title } = Typography;

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
          <Row>
            <Col>
              <div>
                <Card title=" User Onboarding">
                  <Row>
                    <Col className="color-black">
                      <Title level={5}>Title:</Title>
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
                      <Title level={5}>Date of Birth:</Title>
                    </Col>
                    <Col>
                      <Field name="dob" type="date" />
                    </Col>
                    <Col>
                      {errors.dob && touched.dob ? (
                        <Alert type="error" message={errors.dob} />
                      ) : null}
                    </Col>
                  </Row>
                  <Button>Submit</Button>
                </Card>
              </div>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};
