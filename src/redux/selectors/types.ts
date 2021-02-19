import {RootState} from "../store";

//system selector
export type SystemSelector = (state: RootState) => RootState["system"];

//selectors
export interface Selectors {
  getSystem: SystemSelector,
}