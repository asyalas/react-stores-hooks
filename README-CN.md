### react-share-context

受到[react-context-io](https://github.com/yesmeck/react-context-io)的启发，基于 react 的 hooks，利用 useContext 和 createContext 来进行状态的存储，同时也提供了获取全局状态树的可能。

### Installation

```bash
npm i react-share-context
```

### Base Usage

```js
import React from "react";
import { createContext, useContext } from "react-share-context";

const Result = () => {
  const { age, name } = useContext("person").state;
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

  注册一个 context

  - Argument
    - namespace 注册它的命名空间
    - initialState 初始值
  - Return
    - Provider 组件

- `ContextProvider`

  生成一个 Provider,内部调用 createContext

  - props
    - namespace
    - initialState
    - children

- `useContext`

  获取指定的 context

  - Argument
    - namespace 注册它的命名空间
  - Return
    - state 注册的 states
    - dispatch 派发一个更新 state 的操作
    - getState 获取 states 的 function

- `useGlobalContext`

  Return object[]

- `deleteContext`

  delete the specified context
