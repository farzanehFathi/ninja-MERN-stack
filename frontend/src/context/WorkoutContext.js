import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

export const workoutsContetxProvider = ({ children }) => {
  return <WorkoutsContext.Provider>{children}</WorkoutsContext.Provider>;
};
