import React from "react";
import { createContext, useContext } from "react-share-context";
const OtherPerson = () => {
  const Provider = createContext("otherPerson", {
    age: 19,
    name: "nick"
  });
  return (
    <Provider>
      <OtherPersonPage />
    </Provider>
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
