/// <reference types="react" />
import create from "./create";
export { default as StoreProvider } from "./StoreProvider";
export declare const useContext: (namespace: string) => any, useDispatchContext: (namespace: string) => import("./interface").DispatchContextType, useGlobalContext: () => any, globalContext: import("./interface").InitialStateContext, deleteContext: (namespace: string) => void, ContextProvider: (props: import("./interface").ContextProviderProps) => import("react").FunctionComponentElement<any>, createContext: ({ namespace, initialState }: import("./interface").CreateContextOptions) => ({ children }: any) => import("react").FunctionComponentElement<import("react").ProviderProps<object>>;
export { create };
