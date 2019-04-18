import * as React from "react";
import { createContext, useDispatchContext } from "./index";
import { createDispatch, wrap } from "./utils";

export const DispatchProvider = props => {
  const { C, namespace, children } = props;
  const dispatchProps = useDispatchContext(namespace);
  return React.createElement(C, dispatchProps, children);
};

export default props => {
  const { reducers, namespace, children } = props;
  const Store = Object.entries(reducers).reduce((C, v, index) => {
    const [key, reduce] = v;
    const reducerNamespace = `${namespace}.${key}`;
    const { initialState, Component } = createDispatch(reduce);
    const StateProvider = createContext({
      namespace: reducerNamespace,
      initialState
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
            { C: Component, namespace: reducerNamespace },
            WrapProps.children
          )
        )
      );
  }, wrap);

  return React.createElement(Store, {}, children);
};
