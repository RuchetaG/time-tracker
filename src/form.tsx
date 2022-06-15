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
  dob: Yup.date().max(new Date("01-01-2030"), "Enter date before 01-01-2030"),
  picked: Yup.string().required("Atleast one option should be selected"),
  checked: Yup.array().required("Check one or more"),
});

interface IAddress {
  line1: string;
  line2: string;
  city: string;
}

interface UserRegistration {
  firstName: string;
  lastName: string;
  email: string;
  dob: Date | null;
  picked: string;
  checked: string[];
  address?: IAddress;
}

export const FormFields = () => {
  const registerUser = (requestPayload: UserRegistration) => {
    const URL = "http://localhost:4000/api/register";
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
        firstName: "",
        lastName: "",
        email: "",
        dob: null,
        picked: "",
        checked: [],
      }}
      validationSchema={signUpSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
        registerUser(values);
      }}
    >
      {({ errors, touched, values }) => (
        <Form className="container">
          <Row>
            <Col>
              <div>
                <Card title="User Registration">
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
                  <Row>
                    <FormInput
                      labelText="Last Name: "
                      name="lastName"
                      errors={errors}
                      touched={touched}
                      values={values}
                    ></FormInput>
                  </Row>
                  <Row>
                    <FormInput
                      labelText="Email: "
                      name="email"
                      errors={errors}
                      touched={touched}
                      values={values}
                    ></FormInput>
                  </Row>
                  <Row>
                    <Col>
                      <Title level={5}>Date of Birth: </Title>
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
                  <Row>
                    <Col>
                      <Title level={5}>What is your favorite color:</Title>
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
                        <Alert message={errors.picked} type="error" />
                      ) : null}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Title level={5}>Check me out:</Title>
                    </Col>
                    <Col>
                      <Row className="color-black">
                        <Col>
                          <Field type="checkbox" name="checked" value="One" />
                          One
                        </Col>
                        <Col>
                          <Field type="checkbox" name="checked" value="Two" />
                          Two
                        </Col>
                        <Col>
                          <Field type="checkbox" name="checked" value="Three" />
                          Three
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      {errors.checked && touched.checked ? (
                        <Alert message={errors.checked} type="error" />
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
