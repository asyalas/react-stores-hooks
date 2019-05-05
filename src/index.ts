
import create from "./create";

export { default as StoreProvider } from "./StoreProvider";

export const {
  useContext,
  useDispatchContext,
  useGlobalContext,
  globalContext,
  deleteContext,
  ContextProvider,
  createContext
} = create();

export { create };
