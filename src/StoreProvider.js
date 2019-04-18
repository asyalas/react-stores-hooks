import * as React from "react";
import { createContext, useDispatchContext } from "./index";

const wrap = props => {
  return props.children;
};
const DispatchProvider = props => {
  const { C, namespace, children } = props;
  const dispatchProps = useDispatchContext(namespace);
  return React.createElement(C, dispatchProps, children);
};
export default props => {
  const { reducers, namespace, children } = props;
  const Store = Object.entries(reducers).reduce((C, v, index) => {
    const [key, Dispatch] = v;
    const reducerNamespace = `${namespace}.${key}`;
    const StateProvider = createContext({
      namespace: reducerNamespace,
      initialState: {}
    });

    return WrapProps =>
      React.createElement(
        C,
        {},
        React.createElement(
          StateProvider,
          {},
          React.createElement(
            DispatchProvider,
            { C: Dispatch, namespace: reducerNamespace },
            WrapProps.children
          )
        )
      );
  }, wrap);

  return React.createElement(Store, {}, children);
};
