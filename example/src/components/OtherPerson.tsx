import React from "react";
import { ContextProvider, useContext } from "../dist";
const OtherPerson = () => {
  return (
    <ContextProvider
      namespace="otherPerson"
      initialState={{
        age: 19,
        name: "nick"
      }}
    >
      <OtherPersonPage />
    </ContextProvider>
  );
};
const OtherPersonPage = () => {
  const { age, name } = useContext("otherPerson").state;
  return (
    <div>
      <div>name:{name}</div>
      <div>age:{age}</div>
    </div>
  );
};

export default OtherPerson;
