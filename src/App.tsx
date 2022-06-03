import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Link } from "./link-tag";
import { FormFields } from "./form";
import { CustomDropdown } from "./dropdown";

const user = [
  {
    name: "Ashish",
    city: "Amravati",
    age: 29,
  },
  {
    name: "Rucheta",
    city: "Mumbai",
    age: 30,
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <FormFields></FormFields>
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link user={user[0]}></Link>
        <Link user={user[1]}></Link> */}
      </header>
    </div>
  );
}

export default App;
