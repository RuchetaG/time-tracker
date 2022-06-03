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
import { CustomDropdown } from "./dropdown";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(1, "Name should be atleast 2 characters long")
    .max(64, "Specified name is too long"),
  lastName: Yup.string()
    .min(2, "Name should be atleast 2 characters long")
    .max(64, "Specified name is too long"),
  email: Yup.string().email("Email is invalid"),
  dob: Yup.date().max(new Date("01-01-2000"), "Enter date before 01-01-2000"),
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
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched, values }) => (
        <Form>
          <label>Title: </label>
          <CustomDropdown></CustomDropdown>
          <Label check>First Name: </Label>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Label check>Last Name: </Label>
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <br />
          <Label check>Email: </Label>
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <Label>Date of Birth: </Label>
          <Field
            id="exampleDate"
            name="dob"
            placeholder="date placeholder"
            type="date"
          />
          <br />
          <Label>What is your favorite color: </Label>
          <br />
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="picked" value="Black" />
              Black
            </label>
            <label>
              <Field type="radio" name="picked" value="White" />
              White
            </label>
            <div>Picked: {values.picked}</div>
          </div>
          <br />
          <Label check>Check me out: </Label>
          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="checked" value="One" />
              One
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Two" />
              Two
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Three" />
              Three
            </label>
          </div>
          <br />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
