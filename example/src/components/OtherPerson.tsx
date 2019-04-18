import React from "react";
import { ContextProvider, useContext, useDispatchContext } from "../dist";
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
  const { setState } = useDispatchContext("otherPerson");
  const { age }:any = useContext("otherPerson");
  const addAgeHandle = () => {
    setState({
      age: age + 1
    });
  };
  return <button onClick={addAgeHandle}>increase age</button>;
};
const OtherPersonPage = () => {
  const { age, name }: any = useContext("otherPerson");
  return (
    <div>
      <div>name:{name}</div>
      <div>age:{age}</div>
    </div>
  );
};

export default OtherPerson;
