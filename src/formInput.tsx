import React from "react";
import { Row, Col, Label, Alert } from "reactstrap";
import { Field } from "formik";

export const FormInput = (props: {
  labelText: string;
  name: string;
  errors: any;
  touched: any;
  values: any;
}) => {
  return (
    <Row>
      <Col>
        <Label className="color-black" check>
          {props.labelText}{" "}
        </Label>
      </Col>
      <Col>
        <Field name={props.name} />
      </Col>
      <Col>
        {props.errors[props?.name] && props.touched[props?.name] ? (
          <Alert color="danger">{props.errors[props?.name]} </Alert>
        ) : null}
      </Col>
    </Row>
  );
};
