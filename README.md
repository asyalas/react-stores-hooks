### react-share-context

Inspired by [react-context-io] (https://github.com/yesmeck/react-context-io), based on react hooks, useContext and createContext to store state, and also provide global states tree.

### translate

中文[移步](https://github.com/asyalas/react-share-context/blob/master/README-CN.md)

### Installation

```bash
npm i react-share-context
```

### Base Usage

```js
import React from "react";
import { createContext, useContext } from "react-share-context";

const Result = () => {
  const { age, name } = useContext("person");
  return (
    <div>
      <div>name:{name}</div>
      <div>age:{age}</div>
    </div>
  );
};

const AddButton = () => {
  const { dispatch } = useContext("person");
  const addAgeHandle = () => {
    dispatch(data => ({
      ...data,
      age: data.age + 1
    }));
  };
  return <button onClick={addAgeHandle}>increase age</button>;
};
const Person = () => {
  const Provider = createContext("person", {
    age: 18,
    name: "harry"
  });
  return (
    <Provider>
      <Result />
      <AddButton />
    </Provider>
  );
};

export default Person;
```

### API

- `createContext`
  
  registered a context

  Argument

  - namespace 
  - initialState 

  Return

  - Provider a Provider component

- `useContext`
  
  Get the specified context

  Argument

  - namespace 

  Return

  - state 
  - dispatch a function that dispatch a new state to update the state
  - getState 

- `useContext.getGlobal`

  Return object[]
