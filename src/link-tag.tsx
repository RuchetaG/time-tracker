import React from "react";

export const Link = (props: any) => {
  return (
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.user.name} - {props.user.city} - {props.user.age}
    </a>
  );
};
