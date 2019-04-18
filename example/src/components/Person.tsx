import React from "react";
import { createContext, useContext, useDispatchContext } from "../dist";

const Result = () => {
  const { age, name }: any = useContext("person");
  return (
    <div>
      <div>name:{name}</div>
      <div>age:{age}</div>
    </div>
  );
};

const AddButton = () => {
  const { dispatch } = useDispatchContext("person");
  const addAgeHandle = () => {
    dispatch((data: any) => ({
      ...data,
      age: data.age + 1
    }));
  };
  return <button onClick={addAgeHandle}>increase age</button>;
};
const Person = () => {
  const Provider = createContext({
    namespace: "person",
    initialState: {
      age: 18,
      name: "harry"
    }
  });
  return (
    <Provider>
      <Result />
      <AddButton />
    </Provider>
  );
};

export default Person;
