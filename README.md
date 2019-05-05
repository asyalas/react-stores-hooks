### react-stores-hooks

Inspired by [react-context-io](https://github.com/yesmeck/react-context-io), based on react hooks, useContext and createContext to share state between components, and also provide global states tree to get different context state.

### translate

中文[移步](https://github.com/asyalas/react-stores-hooks/blob/master/README-CN.md)

### Installation

```bash
npm i react-stores-hooks
```

### Base Usage

```js
import React from "react";
import { createContext, useContext, useDispatchContext } from "react-stores-hooks";

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

```

### API

- `createContext`

  registered a context

  - Options
    - namespace
    - initialState
  - Return
    - Provider a Provider component

* `ContextProvider`

  create a Provider,call createContext inside

  - props
    - namespace
    - initialState
    - children

* `useContext`

  Get the specified context

  - Argument
    - namespace
  - Return
    - state
    - getState


* `useDispatchContext`

  Get the specified context

  - Argument
    - namespace
  - Return
    - dispatch a function that dispatch a new state to update the state
    - setState

* `useGlobalContext`

  Get all contexts

  Return object[]

* `deleteContext`

  delete the specified context
