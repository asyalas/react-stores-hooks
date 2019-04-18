import * as React from "react";
const globalContext = {};

const checkNameSpace = namespace => {
    if (!namespace) {
        throw new Error(`expect get the namespace ,but get ${typeof namespace}`);
    }
};
const checkIsExit = namespace => {
    if (globalContext.namespace) {
        throw new Error("the Context has mounted");
    }
};
export function useContext(namespace) {
    checkNameSpace(namespace);
    const context = (globalContext[namespace] || {}).stateContext;
    const state = React.useContext(context);
    return {
        ...state,
        getState: context.getState
    };
}
export function useDispatchContext(namespace) {
    checkNameSpace(namespace);
    const context = (globalContext[namespace] || {}).dispatchContext;
    return React.useContext(context);
}
export function useGlobalContext() {
    return Object.keys(globalContext).reduce((p, key) => {
        // only get the state
        // tslint:disable-next-line
        p[key] = {
            ...useContext(key),
            ...useDispatchContext(key)
        };
        return p;
    }, {});
}
export function createContext({ namespace, initialState }) {
    checkNameSpace(namespace);
    checkIsExit(namespace);
    // create a store context
    const Context = React.createContext();
    const NativeProvider = Context.Provider;
    return ({ children }) => {
        const [state, dispatch] = React.useState(initialState);
        Context.getState = () => state;

        // create a dispatch state context
        const DispatchContext = React.createContext({
            dispatch,
            setState: state =>
                dispatch(prevState => ({
                    ...prevState,
                    ...state
                }))
        });

        globalContext[namespace] = {
            stateContext: Context,
            dispatchContext: DispatchContext
        };

        return React.createElement(NativeProvider, { value: state }, children);
    };
}
export function ContextProvider(props) {
    const { namespace, initialState, children } = props;
    const Provider = createContext({ namespace, initialState });
    return React.createElement(Provider, {}, children);
}
export function deleteContext(namespace) {
    checkNameSpace(namespace);
    globalContext[namespace] = null;
}
export { globalContext };