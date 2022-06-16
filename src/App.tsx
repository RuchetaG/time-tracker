import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, Alert } from "antd";
import { Steps } from "antd";

import { Link } from "./link-tag";
import { FormFields } from "./form";
import { SignUpForm } from "./signup";

import { ReactHooks } from "./ReactHooks";

const { Step } = Steps;

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(`Selected step = ${currentStep}`);
  }, [currentStep]);

  return (
    <div className="App">
      <ReactHooks></ReactHooks>
      {/* <Button
        onClick={() => {
          if (currentStep > 0) setCurrentStep(currentStep - 1);
        }}
      >
        Prev
      </Button>
      <Button
        onClick={() => {
          if (currentStep < 2) setCurrentStep(currentStep + 1);
        }}
      >
        Next
      </Button>
      <Steps current={currentStep}>
        <Step title="Finished" description="This is a description1." />
        <Step
          title="In Progress"
          subTitle="Left 00:00:08"
          description="This is a description2."
        />
        <Step title="Waiting" description="This is a description3." />
      </Steps>
      <Alert type="success" message={message}></Alert>
      <SignUpForm></SignUpForm> */}
    </div>
  );
}

export default App;
