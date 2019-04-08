import * as React from "react";

type StateType = any;
type namespaceType = string;
type BaseContext = {
  state: StateType;
  dispatch: React.SetStateAction;
  setState: (state: StateType) => void;
  getState: () => StateType;
};
interface ContextProviderProps {
  namespace: namespaceType;
  initialState: StateType;
  children: React.ReactChild;
}
interface GetGlobal {
  [index: string]: BaseContext;
}
export function useContext(namespace: namespaceType): BaseContext;
export function useGlobalContext(): GetGlobal;
export function createContext(
  namespace: namespaceType,
  initialState: StateType
): React.Provider;
export function ContextProvider(props: ContextProviderProps);
export function deleteContext(namespace: namespaceType): void;
export type globalContext = any;
