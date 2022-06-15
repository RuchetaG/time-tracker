import React from "react";
import "./App.css";

import { Link } from "./link-tag";
import { FormFields } from "./form";
import { CustomDropdown } from "./dropdown";
import { SignUpForm } from "./signup";
import { COUNTRIES } from "./countries";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <SignUpForm></SignUpForm> */}
        <COUNTRIES></COUNTRIES>
      </header>
    </div>
  );
}

export default App;
