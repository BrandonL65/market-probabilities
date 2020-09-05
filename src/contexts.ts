import RootStore from "./stores/RootStore";
import { createContext } from "react";

export const rootStoreContext = createContext(new RootStore());
