import { useContext } from "react";
import React from "react";
import { UserContext } from "./App";

const UserProfile = () => {
  const text = useContext(UserContext);
  return (
    <>
      <h1 id="name">Name:- {text.name}</h1>
      <h1 id="age">Age:- {text.age}</h1>
    </>
  );
};

export { UserProfile };
