import React from "react";
import { Row, Col, Typography, Alert } from "antd";
import { Field } from "formik";

const { Title } = Typography;

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
        <Title>{props.labelText} </Title>
      </Col>
      <Col>
        <Field name={props.name} />
      </Col>
      <Col>
        {props.errors[props?.name] && props.touched[props?.name] ? (
          <Alert type="error" message={props.errors[props?.name]} />
        ) : null}
      </Col>
    </Row>
  );
};
