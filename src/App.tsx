import React from "react";
import "./App.css";

import { Link } from "./link-tag";
import { FormFields } from "./form";
import { CustomDropdown } from "./dropdown";
import { SignUpForm } from "./signup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SignUpForm></SignUpForm>
      </header>
    </div>
  );
}

export default App;
