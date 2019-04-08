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
      <div>
        <OtherPersonPage />
        <AddButton />
      </div>
    </ContextProvider>
  );
};
const AddButton = () => {
  const { setState, state } = useContext("otherPerson");
  const addAgeHandle = () => {
    setState({
      age: state.age + 1
    });
  };
  return <button onClick={addAgeHandle}>increase age</button>;
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
