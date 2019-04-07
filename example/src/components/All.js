import React from "react";
import { useContext } from "react-share-context";
const All = () => {
  const globalStates = useContext.getGlobal();
  const [state, setState] = React.useState(0);
  const addAgeHandle = dispatch => {
    dispatch(data => ({
      ...data,
      age: data.age + 1
    }));
    setState(state + 1);
  };
  const dom = Object.entries(globalStates).map(([, v]) => (
    <div key={v.state.name}>
      name : {v.state.name} <br />
      age:{v.state.age}
      <br />
      value:{JSON.stringify(v.getState())}
      <button onClick={() => addAgeHandle(v.dispatch)}> add</button>
    </div>
  ));
  return dom;
};

export default All;
