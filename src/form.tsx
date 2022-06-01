import React from "react";
import {
  Label,
  Input,
  Button,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Name should not be empty")
    .max(64, "Specified name is too long"),
  lastName: Yup.string()
    .min(1, "Name should not be empty")
    .max(64, "Specified name is too long"),
  email: Yup.string().email("Email is invalid"),
});

const values = ["Mr.", "Mrs", "Miss"];

export const FormFields = (props: any) => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <label>Title: </label>
          <div className="d-flex justify-content-center p-5">
            <Dropdown toggle={function noRefCheck() {}}>
              <DropdownToggle caret>Select</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Mr.</DropdownItem>
                <DropdownItem>Mrs.</DropdownItem>
                <DropdownItem>Miss</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <Label check>First Name: </Label>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          &nbsp;
          <Label check>Last Name: </Label>
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <br></br>
          <Label check>Email: </Label>
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          &nbsp;
          <Label>Date of Birth: </Label>
          <Input
            id="exampleDate"
            name="date"
            placeholder="date placeholder"
            type="date"
          />
          <br></br>
          <Label>What is your favorite color: </Label>
          <br></br>
          <Input name="yes" type="radio" /> <Label check>Blue </Label>
          <Input name="no" type="radio" /> <Label check>Red</Label>
          <Input name="no" type="radio" /> <Label check>Black</Label>
          <Input name="no" type="radio" /> <Label check>White</Label>
          <Input name="no" type="radio" /> <Label check>Yellow</Label>
          <br></br>
          <Label check>Check me out: </Label>
          <Input id="checkbox2" type="checkbox" />
          <br></br>
          <button type="reset">Reset</button>
          &nbsp;
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
