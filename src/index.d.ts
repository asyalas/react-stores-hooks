import * as React from "react";

type StateType = any;
type namespaceType = string;
interface StateContext extends StateType {
  getState: () => StateType;
}

type DispatchContext = {
  dispatch: any;
  setState: (state: StateType) => void;
};
interface CreateContextOptions {
  namespace: namespaceType;
  initialState: StateType;
}
interface ContextProviderProps extends CreateContextOptions {
  children: React.ReactNode;
}

interface GetGlobal {
  [index: string]: StateContext & DispatchContext;
}

interface StoreProviderPorps {
  children: React.ReactNode;
  namespace: namespaceType;
  reducers: any;
  // reducers: {
  //   [index: string]: React.ReactNode;
  // };
}
export function useContext(namespace: namespaceType): StateContext;
export function useDispatchContext(namespace: namespaceType): DispatchContext;
export function useGlobalContext(): GetGlobal;
export function createContext(options: CreateContextOptions): React.Provider;
export function ContextProvider(props: ContextProviderProps): any;
export function deleteContext(namespace: namespaceType): void;
export function StoreProvider(props: StoreProviderPorps): any;
