import { createContext } from "react";
import { IContext } from "../type/type";

export const DrawerContext = createContext<IContext>({} as IContext);