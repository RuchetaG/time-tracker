import React from "react";
import { Row, Col, Label, Card, CardBody, Alert } from "reactstrap";
import { Field } from "formik";

export const FormInput = (props: {
  labelText: string;
  name: string;
  errors: any;
  touched: any;
  values: any;
}) => {
  return (
    <Card>
      <CardBody>
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
            {errors[name] && touched[name] ? (
              <Alert color="danger">{errors[name]} </Alert>
            ) : null}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
