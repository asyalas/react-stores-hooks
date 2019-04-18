import React from "react";
import { useContext, StoreProvider } from "../dist";

const Componet2 = () => {
  const { age, setState2 } = useContext("store.store2");
  const onClick = () => {
    setState2({
      age: age + 1
    });
  };
  return (
    <div>
      <button onClick={onClick}>increase age</button>
      <div>{age}</div>
    </div>
  );
};

const Componet1 = () => {
  const { num, setState1 } = useContext("store.store1");
  const onClick = () => {
    setState1({
      num: num + 1
    });
  };
  return (
    <div>
      <button onClick={onClick}>increase num</button>
      <div>{num}</div>
    </div>
  );
};

const ReducersComponet1 = (props: any): React.ReactNode => {
  const { setState, children } = props;
  const [state1, setState1] = React.useState({
    num: 1
  });
  setState({
    setState1,
    ...state1
  });
  return children;
};

const ReducersComponet2 = (props: any): React.ReactNode => {
  const { setState, children } = props;
  const [state2, setState2] = React.useState({
    age: 19
  });
  setState({
    setState2,
    ...state2
  });
  return children;
};
const Reducers = () => {
  return (
    <StoreProvider
      namespace="store"
      reducers={{
        store1: ReducersComponet1,
        store2: ReducersComponet2
      }}
    >
      <Componet1 />
      <Componet2 />
    </StoreProvider>
  );
};

export default Reducers;
