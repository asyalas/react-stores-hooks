import * as React from "react";
const globalContext = {};
export function useContext(namespace) {
  if (!namespace) {
    throw new Error(`expect get the namespace ,but get ${typeof namespace}`);
  }
  const context = globalContext[namespace];
  const state = React.useContext(context);
  return {
    state,
    dispatch: context.dispatch,
    setState: state =>
      context.dispatch(preState => ({ ...preState, ...state })),
    getState: context.getState
  };
}
export function useGlobalContext() {
  return Object.keys(globalContext).reduce((p, key) => {
    // only get the state
    // tslint:disable-next-line
    p[key] = useContext(key);
    return p;
  }, {});
}
export function createContext(namespace, initialState) {
  if (!namespace) {
    throw new Error(`expect get the namespace ,but get ${typeof namespace}`);
  }
  const Context = React.createContext(initialState);
  if (globalContext.namespace) {
    throw new Error("the Context has mounted");
  }
  globalContext[namespace] = Context;
  const NativeProvider = Context.Provider;
  return ({ children }) => {
    const [state, setState] = React.useState(initialState);

    Context.dispatch = setState;
    Context.getState = () => state;
    return React.createElement(NativeProvider, { value: state }, children);
  };
}
export function ContextProvider(props) {
  const { namespace, initialState, children } = props;
  const Provider = createContext(namespace, initialState);
  return <Provider>{children}</Provider>;
}
export function deleteContext(namespace) {
  if (!namespace) {
    throw new Error(`expect get the namespace ,but get ${typeof namespace}`);
  }
  globalContext[namespace] = null;
}
export { globalContext };
