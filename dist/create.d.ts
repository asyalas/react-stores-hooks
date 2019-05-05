import { FunctionComponentElement } from "react";
import { ContextProviderProps, InitialStateContext, CreateContextOptions, DispatchContextType } from './interface';
declare const create: (context?: InitialStateContext) => {
    useContext: (namespace: string) => any;
    useDispatchContext: (namespace: string) => DispatchContextType;
    useGlobalContext: () => any;
    globalContext: InitialStateContext;
    deleteContext: (namespace: string) => void;
    ContextProvider: (props: ContextProviderProps) => FunctionComponentElement<any>;
    createContext: ({ namespace, initialState }: CreateContextOptions) => ({ children }: any) => FunctionComponentElement<import("react").ProviderProps<object>>;
};
export default create;
