### react-stores-hooks

受到[react-context-io](https://github.com/yesmeck/react-context-io)的启发，基于 react 的 hooks，利用 useContext 和 createContext 来进行state在不同组件里的共享，同时也提供了获取全局状态树的来获取其他模块的上下文的state。

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

  注册一个 context

  - Options
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
- `useDispatchContext`

  Get the specified context

  - Argument
    - namespace
  - Return
    - dispatch 派发一个更新 state 的操作
    - setState


- `useContext`

  获取指定的 context

  - Argument
    - namespace 注册它的命名空间
  - Return
    - state 注册的 states
    - getState 获取 states 的 function

- `useGlobalContext`

  Return object[]

- `deleteContext`

  delete the specified context
